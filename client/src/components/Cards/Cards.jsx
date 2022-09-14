import React from "react";  
import { useSelector } from "react-redux";
import Card from "../Card";

export default function Cards (){
    const {allProducts} = useSelector(state=>state)

    if(!allProducts?.length){
        return (
            <div><h3>Not found!</h3></div>
        )
    }
    return (
        <div>
            {allProducts?.map(p=>{
                return <Card
                name={p.name}
                image={p.image}
                title={p.title}
                price={p.price}
                />
            })}
            
        </div>
    ) 
}