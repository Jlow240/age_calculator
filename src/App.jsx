import { useState } from 'react'
import './App.css'
import Birthdate from './components/Birthdate'

function App() {

const [timeAlive, setTimeAlive] = useState()

const handleDate = () => {

}



  return (
    <main className="App">
      <section className='ageCounter'>

        <div className='birthdate'>
          <form className='birthdate_form' action="">
            <input className='birthdate_input' type='date'></input>
          </form>
        </div>
        <div className='age_arrow'>
          <button onClick={handleDate} className='age_btn'><i class='bx bxs-down-arrow-circle'></i></button>
          <hr />
        </div>
        <div className='age_counter'>
          <ul className='age_list'>
            <li><span>38</span> years</li>
            <li><span>3</span> months</li>
            <li><span>26</span> days</li>
          </ul>
        </div>

      </section>
    </main>
  )
}

export default App
