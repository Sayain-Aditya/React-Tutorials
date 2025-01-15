import React, { useState } from 'react'

const car = () => {
    function Showroom(){
        const [car, setCar] = useState({
            model: "mustang",
            year: "1994",
            brand: "Ford",
            color: "red"
        })
    }
  return (
    <>
    <h1>My {car.brand}</h1>
    <p>
        It is a {car.color} {car.model} from {car.year}
    </p>
    </>
  )
}

export default car