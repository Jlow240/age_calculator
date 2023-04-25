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
    e.target.reset()
  }

  const birth =  new Date(`${ birthyear}, ${birthmonth}, ${birthday} `)
  
  let dateDiference = (actualDate - birth)
  let diferenciaEnDias = Math.floor(dateDiference / (1000 * 60 * 60 * 24));
  let years = Math.floor(diferenciaEnDias / 365);
  let months = Math.floor((diferenciaEnDias % 365) / 30); 
  let days = Math.floor((diferenciaEnDias % 365) % 30);

  return (
    <main className="App">
      <article className='ageCounter'>
        <Birthdate handleSubmit={handleSubmit}/>
        <div className='line'><div className='line2'></div></div>
        
        <div className='age_counter'>
          <ul className='age_list'>
            <li><span>{years ===  years  ? "--" : years}</span> years</li>
            <li><span>{months}</span> months</li>
            <li><span>{days}</span> days</li>
          </ul>
        </div>

      </article>
    </main>
  )
}

export default App
