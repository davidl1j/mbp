import { useState, useEffect } from 'react';
import { Stage } from '@inlet/react-pixi';

function App() {

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
  

  return (
    <>
      <Stage width={dimensions.width} height={dimensions.height} >
        
      </Stage>
    </>
  )
}

export default App;
