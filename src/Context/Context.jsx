import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=> {

    const [input,setInput] = useState("");  //save input data
    const [recentPrompt, setRecentPrompt] = useState("");  //input will be saved as recentPrompt
    const [previousPrompts,setPreviousPrompts] = useState([]); //show all input history in recent tab
    const [showResult, setShowResult] = useState(false); //if true it will hide text and boxes on main page
    const [loading,setLoading] = useState(false); //if true display loading animation, after make it false
    const [resultData, setResultData] = useState(""); //siplay result on webpage

    const delayPara = (index,nextWord) => {
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)

        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }
        else{
            setPreviousPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        //setRecentPrompt(input)
        //setPreviousPrompts(prev=>[...prev,input])
        //const response = await run(input) 

        //replace double star with bold
        let responseArray = response.split("**");
        let newResponse="" ;
        for(let i = 0; i<responseArray.length;i++){
            if(i===0 || i%2 !== 1){ //even or zero
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }

        //replace single star with newline
        let newResponse2 = newResponse.split("*").join("</br>");

        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i,nextWord+" ");
        }
        setLoading(false)
        setInput("")

    }


    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent, 
        setRecentPrompt,
        recentPrompt, 
        showResult, 
        loading,
        resultData,
        input,
        setInput,
        newChat
        
    }

    return(

        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;
