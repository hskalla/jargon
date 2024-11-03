import React, { useState, useEffect } from "react";
import './Rules.css';
import {Button} from 'react-native';

function Rules({ruleText, setRuleText}:any) {
  const [pressed, setPressed] = useState(false);

  return (
    <div className='rules-box'>
        <label form='rules'>Generator Rules</label>
        <textarea 
          id='rules' 
          cols={1} 
          value={ruleText}
          onChange={e => (setRuleText(e.target.value))}
        />
        <div className='buttons'>
            <div className='button-box'>
                <Button
                  onPress={() => setPressed(true)}
                  title="Clear"
                  color="#A846A0"
                />
            </div>
            <div className='button-box'>
                <Button
                  onPress={() => setPressed(true)}
                  title="Save"
                  color="#A846A0"
                />
            </div>
            <div className='button-box'>
                <Button
                  onPress={() => setPressed(true)}
                  title="Upload"
                  color="#A846A0"
                />
            </div>
        </div>
    </div>
  )
}

export default Rules