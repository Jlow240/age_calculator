import React from 'react'
import './styles/Birthdate.css'


const Birthdate = ({ handleSubmit }) => {

    var input = document.getElementById('day');
    input.addEventListener('input', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
    var input2 = document.getElementById('month');
    input2.addEventListener('input2', function () {
        if (this.value.length > 2)
            this.value = this.value.slice(0, 2);
    })
    var input3 = document.getElementById('year');
    input3.addEventListener('input3', function () {
        if (this.value.length > 4)
            this.value = this.value.slice(0, 4);
    })

    return (
        <form className='birthdate' onSubmit={handleSubmit}>
            <div className='input__div'>
                <label htmlFor="">DAY</label><input className='birth__input' type='number' id='day' min='1' max='31' placeholder='DD'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">MONTH</label><input className='birth__input' type='number' id='month' min='1' max='12' placeholder='MM'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">YEAR</label><input className='birth__input' type='number' id='year' placeholder='YYYY'></input>
            </div>

            <div className='age_arrow'>
                <button className='age_btn'><i className='bx bxs-down-arrow-circle'></i></button>
            </div>
        </form>
    )
}

export default Birthdate