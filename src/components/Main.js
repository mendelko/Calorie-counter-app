import React, {useState} from 'react'
import Foodlist from './FoodList'
import MealForm from './MealForm'
import Header from "./Header";

function Main() {
    const [formData, setFormData] = useState({
        food: "", 
        calories: ""
    })
    
    return (
        <div className="main">
            <Header />
            <MealForm formData={formData} setFormData={setFormData}/>
            <Foodlist formData={formData} setFormData={setFormData}/>
        </div>
    )
}

export default Main
