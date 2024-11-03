import React, { useState, useEffect } from 'react';
import './GenLayout.css';
import Rules from './Rules';
import {Button} from 'react-native';

function GenLayout() {
  const [ruleText, setRuleText] = useState('');
  const [outputText, setOutputText] = useState('initialize');
  const [gen, setGen] = useState(false);

  return (
    <div className='row'>
        <div className='column'>
            <Rules ruleText={ruleText} setRuleText={setRuleText}/>
        </div>
        <div className='column'>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 5 }}>
              <div className='settings-box'>
                <span>Settings</span>
                <div className='settings'>
                  here are the settings
                </div>
              </div>
              <div className='gen-box'>
                <br/>
                <Button
                  onPress={() => setOutputText(ruleText)}
                  title="Generate"
                  color="#A846A0"
                />
              </div>
            </div>
            <div className="output-box">
            <label form='output'>Output</label>
              <textarea id='output' cols={1} value={outputText}/>
            </div>
        </div>
    </div>
  )
}

export default GenLayout