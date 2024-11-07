import { useState } from 'react'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'
import './App.css'

function App() {
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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept)=> (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
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
        </section>
      </main>
    </>
  )
}

export default App
