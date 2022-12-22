import './App.css';
import { useState } from 'react';
import { ParallaxCard } from './components/ParallaxCard';

function App() {

  const [pageX, setPageX] = useState(0)
  const [pageY, setPageY] = useState(0)

  const mouseMoveContainerStyles = {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,168,96,1) 0%, rgba(0,212,255,1) 100%)"
  }

  const appPosition = (e) => {
    setPageX(e.pageX);
    setPageY(e.pageY);
  }

  return (
    <div className="App" onMouseMove={(e) => { appPosition(e) }}>
      <div className='mouse-move-container' style={mouseMoveContainerStyles}>
        <ParallaxCard pageX={pageX} pageY={pageY} speed={5} />
        <ParallaxCard pageX={pageX} pageY={pageY} speed={-5} />
      </div>

    </div>
  );
}

export default App;
