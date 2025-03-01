import React, { useEffect, useState } from 'react'

function Products() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    async () =>{
      const response = await axios.get("http://localhost:4001/products");
      setProducts(response.dat)
    }

  })
  return (
  <div  className="main">
                <h1 >Admin Dashboard</h1>
                <h2>Products</h2>
                <ul style={styles.list}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name} </span>
                            <button 
                                onClick={() => deleteProduct(product.id)}
                            >
                                <FaDeleteLeft />
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
  )
  }

export default Products
