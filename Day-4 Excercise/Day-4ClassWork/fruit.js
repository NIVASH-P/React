import BasicTextFields from "./textfield";
import ComboBox from './AutoComplete'
import React from "react";

export default function SelectingFruit() {
  const [data,setData] = React.useState({name:null,fruit:null});
  function handleSubmit(event)
  {
    event.preventDefault();
    const name = (event.target[0].value);
    const fruit = (event.target[1].value);
    console.log(name);
    setData({name,fruit});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Enter your Name favourite fruit:</h1>
        <BasicTextFields />
        <ComboBox />
        <button type="submit" color="primary">Submit</button>
        <h1>Hello, {data.name}!</h1>
        <h1>Your favourite fruit : {data.fruit}</h1>
      </form>
    </div>
  );
}