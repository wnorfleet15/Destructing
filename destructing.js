const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

//Destructure the person object to extract the name and age properties into variables.

const {name,age}= person 
console.log (name)
console.log (age)

//Use array destructuring to get the second and fourth items from the fruits array.





//Extract the city and country properties from the address object nested within the person object using nested destructuring.
const {city,country} = person.address
console.log city
console.log country