import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target: {value} }) => {
        setInputValue(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories,])
            setInputValue('')
        }else{
            console.error("ERROR: Must have more of two letters");
        }
    }
    
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                placeholder= "Add category"
                onChange = { handleInputChange }
             />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
