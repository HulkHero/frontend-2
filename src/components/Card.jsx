import { Typography } from '@mui/material';
import React from 'react'
import "./nav.css"
const Card = (props) => {
  console.log(props,"props")
  console.log(props.props.size,"propssize")
  //  if(!props.props){
  //   return (
  //     <h1>Loading</h1>
  //   )
  //  }
   
  return (
  
   
    <div className='card-wrapper' style={{display:"flex"}}>
       
        
        <div>
        <Typography variant="h6"  style={{opacity:"0.6"}}>IP Address</Typography> 
        <Typography variant="h5">{props.props.ip?props.props.ip:""}</Typography> 
        </div>
        <div>
        
        <Typography variant="h6" style={{opacity:"0.6"}}>Location</Typography> 
        <Typography variant="h5">{props.props.location.region? props.props.location.region:""}
        <br />
        {props.props.location.country? props.props.location.country:""}</Typography> 
            
        </div>
        <div>
        <Typography variant="h6" style={{opacity:"0.6"}}>Time zone</Typography> 
        <Typography variant="h5">{"GMT:"+ props.props.location.timezone?props.props.location.timezone:"" }</Typography> 
            
        </div>
        <div>
        
        <Typography variant="h6" style={{opacity:"0.6"}}>ISP</Typography> 
        <Typography variant="h5">{props.props.isp?props.props.isp:""}</Typography> 
 
            
        </div>
       
    </div>

    
        
  )
}

export default Card;