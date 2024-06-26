import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/Store'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
          {food_list.map((item, index) => {
            if (category === 'All' || category === item.category)
          
            return <FoodItem key={index} id={item._id} description={item.description} image={item.image} name={item.name} price={item.price} />
          })}
        </div>
    </div>
  )
}

export default FoodDisplay