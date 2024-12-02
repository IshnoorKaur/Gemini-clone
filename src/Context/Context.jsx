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


    const onSent = async (prompt)=>{
        await run(input)
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
        setInput
        
    }

    return(

        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;
