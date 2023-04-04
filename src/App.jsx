import './App.css'

function App() {


  return (
    <div className="App">
      <section className='age_conteiner'>
        <div className='age_input'>
          <input type='date'></input>
        </div>
        <div className='age_arrow'>
          <button className='age_btn'><i class='bx bxs-down-arrow-circle'></i></button>
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
    </div>
  )
}

export default App
