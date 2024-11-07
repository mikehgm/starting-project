import { useState } from 'react'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js'

export default function Examples() {
    let [ clickedTopic, setClickedTopic ] = useState();

    function handleCLick(clickedButton) {
        setClickedTopic(clickedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (clickedTopic) {
        tabContent = (
        <div id='tab-content'>
        <h3>{EXAMPLES[clickedTopic].title}</h3>
        <p>{EXAMPLES[clickedTopic].description}</p>
        <pre>
            <code>
            {EXAMPLES[clickedTopic].code}
            </code>
        </pre>
        </div>
        );
    }

    return (
        <Section id='examples' title="Examples">
          <menu>
            <TabButton 
              isClicked={clickedTopic === 'components'} 
              onClick={() => handleCLick('components')}>Components
            </TabButton>
            <TabButton 
              isClicked={clickedTopic === 'jsx'}
              onClick={() => handleCLick('jsx')}>JSX
            </TabButton>
            <TabButton 
              isClicked={clickedTopic === 'props'}
              onClick={() => handleCLick('props')}>Props
            </TabButton>
            <TabButton 
              isClicked={clickedTopic === 'state'}
              onClick={() => handleCLick('state')}>State
            </TabButton>
          </menu>
          {tabContent}
        </Section>
    )
}