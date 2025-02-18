import { useState } from "react";
const Number =()=>{
    const [randomNumber, setRandomNumber] = useState(null);
  function showRandomNumber() {
    let randomNumber = Math.random();
    setRandomNumber(randomNumber);}
    return(
        <div className="numbers">
        <button className='getButton' onClick={showRandomNumber}> Get a number </button>
      <div className='number'>{randomNumber}</div></div>
    )
    
}
export default Number;