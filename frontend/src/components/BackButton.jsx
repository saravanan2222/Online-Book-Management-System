import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import './BackButton.css'

const BackButton = ({ destination = '/'}) => {
  return(
    <div className='divback'>
        <Link to={destination} className='linkclass-back'>
            <BsArrowLeft className='arrow' />
        </Link>
    </div>
  )
}
export default BackButton