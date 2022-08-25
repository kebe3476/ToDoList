import React from "react";



const Form = ({inputText, todos, setToDos, setInputText}) => {
    // JS code and Function
    const inputTextHandler = (event) =>{
        console.log(event.target.value);
        setInputText(event.target.value);
    };
    const submitToDoHandler = (event) => {
        event.preventDefault();
        setToDos([...todos, 
        {text: inputText, completed: false, id:Math.random() * 1000}
        ]);
        setInputText("");
    };
    return(
        <form>
            <input 
                value = {inputText} 
                onChange={inputTextHandler} 
                type="text" className="todo-input" 
            />
            <button onClick ={submitToDoHandler}>
                <span>Add</span>
            </button>
            
        </form>  
    );
};

export default Form;