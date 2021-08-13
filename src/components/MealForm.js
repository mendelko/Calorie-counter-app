import React, {useState}  from 'react'


function MealForm({formData, setFormData}) {

    const [reset, setReset] = useState("")
    

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit() {
        fetch("http://localhost:8001/meals", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                food: formData.food,
                calories: formData.calories
            })
        })
        .then(res => res.json())
        .then(data => setFormData(data))
        setFormData("")
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className="mealform">
            <div>
                <h1>Add what you eat here...</h1>
                <input type="text" name="food" value={formData.food} placeholder="Add a food item..." onChange={handleChange}/>
                <input type="text" name="calories" value={formData.calories} placeholder="Add calories..." onChange={handleChange} />
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </form>
    )
}

export default MealForm
