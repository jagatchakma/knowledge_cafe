import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/mainsection/Body/Body'
import Bookmarked from './components/mainsection/Bookmarked/Bookmarked'


function App() {
  const [count, setCount] = useState(0)

  const [sTime, setSTime] = useState(0)

  let pTime = 0;
  const timeCal = (time) => {
    pTime = pTime + time;
    
    // setSTime(pTime);

    console.log(pTime);
  }

  let bookMarked = false;

  const bookMarkedClick = ()=> {
    // console.log('clicked');
    if(bookMarked){
      bookMarked = false;
      console.log(bookMarked);
    }else{
      bookMarked = true;
      console.log(bookMarked);
    }

  }

  useEffect(()=> {
    setSTime(pTime);
  }, [pTime])

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-[75%_25%] gap-4 py-4'>
        <Body timeCal={timeCal} bookMarkedClick={bookMarkedClick}></Body>
        <Bookmarked spentTime = {pTime} ></Bookmarked>

      </main>
    </>
  )
}

export default App
