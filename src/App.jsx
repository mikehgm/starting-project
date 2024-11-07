import { useState } from 'react'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'
import './App.css'

function App() {
  let [ clickedTopic, setClickedTopic ] = useState('components');

  function handleCLick(clickedButton) {
    setClickedTopic(clickedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleCLick('components')}>Components</TabButton>
            <TabButton onClick={() => handleCLick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleCLick('props')}>Props</TabButton>
            <TabButton onClick={() => handleCLick('state')}>State</TabButton>
          </menu>
        </section>
        <div id='tab-content'>
          <h3>{EXAMPLES[clickedTopic].title}</h3>
          <p>{EXAMPLES[clickedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[clickedTopic].code}
            </code>
          </pre>
        </div>
      </main>
    </>
  )
}

export default App
