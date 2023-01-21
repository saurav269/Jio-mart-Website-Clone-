import React, { useState } from 'react'
import { useEffect } from 'react'

const Products = () => {
    const [data, setData] = useState([])

    async function getData() {
        let res = await fetch("https://glosury-json-production.up.railway.app/products")
        let data = await res.json()
        // console.log(data)
        setData(data)
        localStorage.setItem("products", JSON.stringify(data))
    }


    const handleClick = (produc) => {
        let prod = JSON.parse(localStorage.getItem("products")) || []
        prod.push(produc)
        localStorage.setItem("products", JSON.stringify(prod))
        console.log(prod)
    }
    useEffect(() => {
        getData()

    }, [])

    return <div>
        {/* <h1>hello</h1> */}

        <div>
            {
                data && data.map((produc) => {
                    const { id, name, price } = produc
                    return (
                        <div key={produc}>
                            <p>{id}</p>
                            <p>{name}</p>
                            <p>{price}</p>
                            <button onClick={() => handleClick(produc)}>Add To Cart</button>
                        </div>

                    )
                })
            }
        </div>


    </div>

}

export { Products }