import React from 'react'
import './styles/styles.css'

export default function Button({variance, title, isDisabled, startIcon, endIcon, size, color}) {
    
    const  disableButton = isDisabled ? 'btn-disabled' : '';
    const displayFlex = !startIcon ? endIcon ? "flex-box btn-resize end" : "" : "flex-box btn-resize start"
  return (
    <div className=''>
        <button className={` btn
         ${variance}  ${disableButton} ${displayFlex} ${size} ${color}`}>
         {title}
         {isDisabled} 
         {startIcon}
         {endIcon}
        
        </button>


      
    </div>
  )
}
