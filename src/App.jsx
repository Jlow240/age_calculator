import { useState } from 'react'
import './App.css'
import Birthdate from './components/Birthdate'

function App() {
  const [birthday, setBirthday] = useState('--')
  const [birthmonth, setBirthmonth] = useState('--')
  const [birthyear, setBirthyear] = useState('--')

  const actualDate = new Date();

  const handleSubmit = (e) => {
    e.preventDefault()
    setBirthday(e.target.day.value )
    setBirthmonth(e.target.month.value )
    setBirthyear(e.target.year.value )
  }

  const birth =  new Date(`${birthyear}, ${birthmonth}, ${birthday}`)
  
  let dateDifference = (actualDate - birth)
  let differenceInDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let years = Math.floor(differenceInDays / 365);
  let months = Math.floor((differenceInDays % 365) / 30); 
  let days = Math.floor((differenceInDays % 365) % 30);

  return (
    <main className="App">
      <article className='ageCounter'>
        <Birthdate handleSubmit={handleSubmit}/>
        <div className='line'></div>
        
        <div className='age_display'>
          <ul className='age_list'>
            <li><span>{years ? years : '--'}</span> years</li>
            <li><span>{months ? months : '--'}</span> months</li>
            <li><span>{days ? days : '--'}</span> days</li>
          </ul>
        </div>

      </article>
    </main>
  )
}

export default App
