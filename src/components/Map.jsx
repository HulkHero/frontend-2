
// import { MapContainer, TileLayer, useMap,MarkerF,Popup } from 'react-leaflet'
import React, { useEffect } from "react";
// import {GoogleMap,useLoadScript,MarkerF} from "@react-google-map/api"
const Map = (props) => {
//     const position = [141.505, -0.09]
    
//   return (
//   //   <div style={{width:"100%",height:"40vh", maxHeight:"40vh",maxWidth:"100%",}}>
//   //     Hello 
//   // </div>
  
  
   
//   )
// }

    useEffect(()=>{
        console.log(props.props,"props map")
        const ifameData=document.getElementById("iframeId")
        const lat=32.187691;
        const lon=74.194450;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    },[props])
    return(
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}

export default Map