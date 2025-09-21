import React, { useEffect, useState } from "react";
import  GetProducts  from '../service'

export default function StoreItems() {
    const [myData,setMyData] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            const products = await GetProducts();
            setMyData(products);
        };


        fetchData();
    },[])
    console.log(myData);
    return (
        <></>
       
    )
}