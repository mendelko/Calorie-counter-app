# Project-2-Calorie-Counter-app

## Description

User is able to login to his own account, and keep track of his calorie intake. It is then saved and he can view total calories eaten that day.

## How to use the app

Click login on the top of the page. Once you're logged in, the button to track the calories then appears on top of the page. Click that button and it redirects the user to the page where he/she can then type into the form the food item and calories for that food. It is then saved onto the right side of the page wher the user can view the food and total calories eaten. User also has the option to delete a preexisting food that was saved to the log.

## Code Goals

Using firebase, the user can log in to his own account. We set state for the mealForm.js file where the user is able to type into the search bar and then submit the food. We do that by creating a submit function using fetch to post onto the JSON server and set the current state. In the foodList.js file we use 'useEffect' to fetch the existing food and calories saved onto the JSON server and display it on the page. In foodItem.js we also created a function using fetch in case the user wants to delete a piece of food that was saved on the JSON server.

## Conclusion

We used fetch 3 times. One to get the pre existing food, one to submit a new one and another to delete one. We set state for the input values and to display the food on the page. We now have a great working app with these very valuable react tools.
