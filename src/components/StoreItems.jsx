import React, { useEffect, useState } from "react";
import  GetProducts  from '../service'

export default function StoreItems() {
    const [myData,setMyData] = useState([]);
    useEffect(() => {
        setMyData(GetProducts());
    },[])
    console.log(myData);
    return (
        <></>
       
    )
}