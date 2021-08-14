import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("Search")

    const handleInputChange = ({ target: {value} }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(inputValue.trim().length > 2){
            setCategories( categories => [...categories, inputValue])
            setInputValue('')
        }else{
            console.error("ERROR: Must have more of two letters");
        }
    }
    
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
             />
        </form>
    )
}

export default AddCategory
