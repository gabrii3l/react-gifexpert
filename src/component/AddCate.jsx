import { useState } from "react";

export const AddCate = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('One Punch');

  const onInputChange = ({target}) =>{
    // console.log(target.value);
      setinputValue(target.value);
  
  }
  
  const onSubmit = (event) =>{
    event.preventDefault();
    
    if(inputValue.trim().length<=1)return;

    // setcategories(categories =>[inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue('');
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}  
        onChange={ onInputChange}           
      />
    </form>
   
  )
}
