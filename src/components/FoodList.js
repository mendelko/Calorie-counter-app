import React, {useEffect, useState} from 'react';
import FoodItem from './FoodItem';


function Foodlist({formData}) {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8001/meals")
        .then(res => res.json())
        .then(data => setFoodList(data))
    }, [formData])


    const handleDelete = (id) => {
        const newFood = foodList.filter((food) => food.id !== id);
        setFoodList(newFood);
      }

      function getTotalCalories(){
          const arr = [];
          foodList.map(food => {
              const int = parseInt(food.calories)
              arr.push(int)
          })
          const sumOfCalories = arr.reduce((total, num) => {
              return total + num
          }, 0)
          return sumOfCalories
      }

    const displayFood = foodList.map(food => {
        return <FoodItem key={food.id} 
                         foodId={food.id} 
                         food={food.food} 
                         calories={food.calories} 
                         onDelete={handleDelete} 
                         />
    })
    
    return (
        <div className="foodlist">
            <span className="total_calories" >Total Calories You Ate: {getTotalCalories()}</span>
            <div className="food_list_header">
                {/* <Delete onClick={() => setDltBtn(!DltBtn)} className="dltbtn"></Delete> */}
                <h3 id="food_header">Food</h3>
                <h3 id="calorie_header">Calories</h3>
            </div>
            <div>
                {displayFood}
            </div>
        </div>
    )
}

export default Foodlist
