import React from 'react'
import './styles/Birthdate.css'


const Birthdate = ({ handleSubmit }) => {
    return (
        <form className='birthdate' onSubmit={handleSubmit}>
            <div className='input__div'>
                <label htmlFor="">DAY</label><input className='birth__input' type='number' id='day' placeholder='DD'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">MONTH</label><input className='birth__input' type='number' id='month' placeholder='MM'></input>
            </div>

            <div className='input__div'>
                <label htmlFor="">YEAR</label><input className='birth__input' type='number' id='year' placeholder='YYYY'></input>
            </div>

            <div className='age_arrow'>
                <button className='age_btn'><i className='bx bxs-down-arrow-circle'></i></button>
                <hr />
            </div>
        </form>
    )
}

export default Birthdate