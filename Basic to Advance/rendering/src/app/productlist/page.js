//Client Side par data render krna 
'use client'
import { useState, useEffect } from "react";
export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                console.log(data.products);
                setProducts(data.products)
            } catch(e){
                console.error(e);
            }
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Products List</h1>
            {products.map((product) => {
                const {id, title, description, category, price, rating, stock } = product
                return (
                    <div key={id}>
                        <h4>Title: {title}</h4>
                        <p>Description: {description}</p>
                        <p>Category: {category}</p>
                        <p>Price: {price}</p>
                        <p>Rating: {rating}</p>
                        <p>Stock: {stock}</p>
                    </div>
                )
            })}


        </div>
    );
}