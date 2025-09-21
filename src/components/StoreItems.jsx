import React, { useEffect, useState } from "react";
import  GetProducts  from '../service'

export default function StoreItems() {
    const [myData,setMyData] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try{
                const products = await GetProducts();
                setMyData(products);
            }
            catch(error){
                console.log(error, "שגיאה בשליפת הנתונים");
            }
        };

        fetchData();
    },[])
    console.log(myData);
    return (
        <></>
       
    )
}