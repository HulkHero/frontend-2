import React,{useEffect,useState} from 'react'
import { Grid } from '@mui/material'
import NavBar from './NavBar'
import Map from "./Map";
import Axios from "axios"
const Home = () => {

   const [data, setData] = useState()
   const [lat, setLat] = useState()
   const [lon, setLon] = useState()
  const getData = async () => {
    await Axios.get('https://geolocation-db.com/json/').then(res=>{
      console.log(res.data.latitude,"home");
      setData(res.data)
      setLat(res.data.latitude)
      setLon(res.data.longitude)
      // console.log(data.latitude,"home data")
      // console.log(ip,"ip")
      // ip2=res.data.IPv4
      // // if(ip)
      // // {

      // //   hellData() 
      // // }
        
    }).catch(err=>console.log(err))
  }
  // useEffect(() => {
  // getData()
  // }, [])

  

  return (
    <>
   
    <Grid container >
    <Grid item xs={12} sx={{minWidth:"90%",width:"100%"}}>
        <NavBar></NavBar>

    </Grid>
    <Grid item xs={12} >
       
        </Grid>

    </Grid>

   
    </>
  )
}

export default Home