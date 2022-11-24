
import { TextField ,styled, Typography, Button} from '@mui/material'
import React,{useState,useCallback,useEffect} from 'react'
import "./nav.css"
import Map from './Map';
import Card from './Card';
import SelectInput from '@mui/material/Select/SelectInput'
import Axios from "axios"
const CssTextField = styled(TextField)({
    maxWidth:"600px",
   
    marginTop:"20px",
    backgroundColor:"white",
   borderRadius: "25px 0px 0px 25px",
     ".MuiFormLabel-root":{
      textColor:"white",
      color:"white",
     borderRadius: "25px 0px 0px 25px",
     },
  
     "& .MuiInputBase-input":{
      color:"black",
    
      minWidth:"250px",
     borderRadius: "25px 0px 0px 25px",
  
     },
  
    '& label.Mui-focused': {
    //   color: '#0097a7',
   borderRadius: "25px 0px 0px 25px",
     
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        
        borderRadius: "25px 0px 0px 25px",
        // borderColor: '#0097a7',
      },
      '&:hover fieldset': {
        // borderColor: '#0097a7',
      },
      '&.Mui-focused fieldset': {
        // borderColor: '#0097a7',
  
       
      },
    },
  });
const NavBar = () => {
  const [ip, setIp] = useState(undefined)
  const [data, setData] = useState({})
  const [data2, setData2] = useState({})

  const [pak, setPak] = useState(false)
  var ip2;
  const getData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/').then(res=>{
      console.log(res.data.IPv4);
      setIp(res.data.IPv4)
      setData2(res.data)
      console.log(res.data,"data2")
      ip2=res.data.IPv4
      if(ip)
      {

        hellData() 
      }
        
      
    

    })
    // console.log(res.data);
    // setIp(res.data.IPv4)
    // console.log(ip,"ip")
  }
  useEffect(() => {
    getData()
    if(ip){

    
      
    }
    
  }, [])
  useEffect(() => {
     Axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_pzojfxFvQHAmdFRHEdx5GKVabP0MD&ipAddress=${ip}`).then(res=>{
        setData(res.data,"res daa")
        console.log(res.data,"res daa")
       }).catch(err=>{console.log(err)});
    
    
  }, [ip])

  const hellData = useCallback(
    async() => {
      console.log("hello")
      console.log(ip,"hello")
      await Axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_pzojfxFvQHAmdFRHEdx5GKVabP0MD&ipAddress=${ip}`).then(res=>{
        setData(res.data,"res daa")
          setPak(true)
        console.log(res.data,"res daa")

       }).catch(err=>{console.log(err)});
    
    },
    [ip]
  )
  
  
  return (
    <div>

   
    <div className='wrapper'>
 
     <Typography sx={{display:"block",color:"white"}} variant="h5"  >IP Address Tracker</Typography>    
     <div>
    <CssTextField size="small" sx={{minWidth:{xs:"240px",md:"400px"}}} name="ip" onChange={(event)=>setIp(event.target.value)} hiddenLabel placeholder={"Search for any IP address or domainB"}></CssTextField>
    <Button type="submit" onClick={()=>console.log(ip)} sx={{borderRadius: "0px 25px 25px 0px",height:"40px",mt:"20px",backgroundColor:"black",color:"white",":hover":{backgroundColor:"white",color:"black" }}} variant="contained">{">"}</Button>
        </div>
    {Object.keys(data).length>0 && <Card props={data}></Card>} 
    

    {/* <input type="text" className='search'></input> */}
    </div>

     {Object.keys(data2).length>0  && <Map props={data2}></Map>}
    </div>


  )
}

export default NavBar