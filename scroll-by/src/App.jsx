import './App.css'
import Intro from './components/Intro'
import ImageContainer from './components/ImageContainer';
import { useEffect } from 'react';

function App() {

    const onScreen = () => {
      const containers = document.querySelectorAll(".ImageContainer");

      // console.log(array);

      const observer = new IntersectionObserver((entries) => {
        const entries = Array.from(containers);
        entries.forEach(entry => {
          console.log("Entry: ", entry);
        });
      })

      // const observer = new IntersectionObserver((entries) => {
      //   console.log(entries)
      // })

      observer.observe(containers);
  }

  useEffect(() => {
    onScreen()
  }, [<ImageContainer/>])

  return (
    <div className="App">
      <Intro />
      <ImageContainer />
    </div>
  )
}

export default App
