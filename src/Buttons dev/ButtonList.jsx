import React from 'react'
import Button from './Button'
import './styles/styles.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ShareOutlined } from '@mui/icons-material';


export default function ButtonList() {
  return (
    <div className='container'>
        <div className="button_item">
            <p>Button - default </p>
            <Button 
             title = "Default"
             variance = "default"
            />

        </div>

        
        <div className="button_item">
            <p>Button - outline </p>
            <Button  
            title = "Default"
            variance = "outline"
            />

        </div>

        <div className="button_item">
            <p>Button - DiableShadow </p>
            <Button  
            title = "Default"
            variance = "shadow"
            />

        </div>

        <div className="button_item">
            <p>Button - text </p>
            <Button  
            title = "Default"
            variance = "text"
            />

        </div>

        
        
        <div style={{display:"flex"}}>
            <div className="button_item">
                    <p>Button - Disabled </p>
                    <Button  
                    title = "Disabled"
                    // variance = "disabled"
                    isDisabled
                    />

                </div>
                <div className="button_item">
                    <p>Button - Disable / text </p>
                    <Button  
                    title = "Disabled"
                    variance = "text"
                    isDisabled
                    
                    />

                </div>
      </div>

        <div style={{display:"flex"}}>
            
            <div className="button_item">
                    <p>Button - cart icon start </p>
                    <Button  
                    title = "Default"
                    variance = "shadow"
                    startIcon={<ShoppingCartOutlinedIcon/>}
                 
                    />

                </div>
                
            <div className="button_item">
                    <p>Button - cart icon end </p>
                    <Button  
                    title = "Default"
                    variance = "shadow"
                    endIcon={<ShoppingCartOutlinedIcon/>}
                    />

                </div>
        </div>
        <div style={{display:"flex"}}>
            
            <div className="button_item">
                    <p>Button - sm </p>
                    <Button  
                    title = "Default"
                    variance = "shadow"
                    size = {`sm`}
                    />

                </div>
                
            <div className="button_item">
                    <p>Button - md </p>
                    <Button  
                    title = "Default"
                    variance = "shadow"
                    size = 'md'
                    />

                </div>

                <div className="button_item">
                    <p>Button - lg </p>
                    <Button  
                    title = "Default"
                    variance = "shadow"
                    size = 'lg'
                    />

                </div>
        </div>


        <div style={{display:"flex"}}>
            
            <div className="button_item">
                    <p>Button - Default </p>
                    <Button  
                    title = "Default"
                    color="default"
                    />

                </div>
                
            <div className="button_item">
                    <p>Button - Primary </p>
                    <Button  
                    title = "Default"
                    color= "primary"
                    />

                </div>

                <div className="button_item">
                    <p>Button - Seconday </p>
                    <Button  
                    title = "Secondary"
                    color =" secondary"
                    />

                </div>

                <div className="button_item">
                    <p>Button - Danger </p>
                    <Button  
                    title = "Danger"
                    color ="danger"
                    />

                </div>
        </div>
        
      
    </div>
  )
}
