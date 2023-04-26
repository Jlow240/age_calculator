import React from 'react'
import './styles/Birthdate.css'


const Birthdate = ({ handleSubmit }) => {
    return (
        <form className='birthdate' onSubmit={handleSubmit}>
            <div className='input__div'>
                <label htmlFor="">DAY</label><input required  className='birth__input' type='number' id='day' min='1' max='31' placeholder='DD'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">MONTH</label><input required className='birth__input' type='number' id='month' min='1' max='12' placeholder='MM'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">YEAR</label><input  required className='birth__input' type='number' id='year' placeholder='YYYY'></input>
            </div>

            <div className='age_arrow'>
                <button className='age_btn'><i className='bx bxs-down-arrow-circle'></i></button>
            </div>
        </form>
    )
}

export default Birthdate