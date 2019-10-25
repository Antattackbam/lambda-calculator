import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators);
  return (
        <div>
        {ops.map((key) => (
        <OperatorButton operator={key.char} changeData={props.changeData} />
       ))}
       </div>
    );

  }
export default Operators;