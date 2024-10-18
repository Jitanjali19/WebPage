import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

function App() {
  const orange="yellow";
  const [bg, setBg] = useState(orange);
  const[name,setName]=useState("click me");

  const bgChange=()=>{
    console.log("clicked");
    const purple="red";
    setBg(purple);
    setName("Ooch!!!!");

  };

  const bgBack=()=>{
    setBg(orange)
    setName("Ayyyo!!");
    }


  return (
    <>
      <div style={ {backgroundColor: bg} }>
      {/* javascript me hum onclick krne pe function call and then paranthesis lgate hai jbki react me nhi */}
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
      </div>
    </>
  )
}

export default App
