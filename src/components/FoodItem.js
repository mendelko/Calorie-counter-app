import React from 'react'


function FoodItem({food, calories, foodId, onDelete}) {

    function handleDelete(){
        console.log(foodId)
        fetch(`http://localhost:8001/meals/${foodId}`, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
         onDelete(foodId)
      }

    
    return (
        <div className="fooditems">
            <h3 id="food">{food}</h3>
            <p id="calories">{calories}</p>
            <button onClick={handleDelete} className="del-btn">🗑️</button>
        </div>
    )
}

export default FoodItem
