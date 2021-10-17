import React, { useState, useEffect } from 'react'

function HomePage() {
    const [products, setProducts] = useState([]);
    const numbers = [1, 2, 3, 4, 5];
    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-products");
            const jsonResponse = await response.json();
            const responseProducts = jsonResponse.data;
            const listProducts = responseProducts.map((product) =>
                <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                </tr>
            );
            setProducts(listProducts)

            console.log(jsonResponse.data);
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
        </div>
    )
}

export default HomePage
