import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specButton] = useState(specials);

  return (
    <div> 
      {specButton.map((special) => (
      <SpecialButton special={special} changeData={props.changeData} />
      ))}
    </div>
    );
  }

export default Specials;