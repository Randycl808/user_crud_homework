// TEST DATA

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP-------------------------------------------------------------Finished

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)
// const about = (foods)=>{
//   return foods.map((mexicanFood) => {
//       return `${mexicanFood.name} is $${mexicanFood.price} and id is ${mexicanFood.id}, Kinda pricy`
//     }
//   )}


// console.log('String:', about(mexican))


// ---------------------------------------------------------------Finished
// [...]

// foods:[{id:number,name:string, price:number},...]

// food: {id:number,name:string, price:number}

/// returns new array with food add

// const addFood1=(foods, food)=>{
//   return[...foods, food]
  
// }
// const newFood = addFood1(mexican, {id:3 ,name:'cheesecake', price:100})
// console.log(newFood)

//-----------------------------------------------------------------Finished
// [...]

// foods:[{id:number,name:string, price:number},...]

// id:number,

// name:string, 

// price:number}

/// returns new array with food add

// const addFood2 = (foods, id,name,price)=>{
//   return[...foods,{id, name, price}]
  
//   }
//   const newFood1 = addFood2(mexican, 3, 'cheesecake', 100)

//   console.log(newFood1)




//MAP-----------------------------------------------------------------Finished

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

// / returns new array with the price updated with the id given
// change the price of the given id
// updateFoodPrice = (food, id, price) => {
//   if (food.id === id) {
//     return {...food, price:price}
//   }
//   return food
// }
// console.log(updateFoodPrice({id:1, name:'fish', price:10}, 1, 1000))

// const updateFood1=(foods, id, price)=>{
//   return foods.map((x)=>updateFoodPrice(x,id,price))
// }
//  // Update - Map
// console.log('update Food1:', updateFood1(mexican, 1, 2000))
//---------------------------------------------------------------------Finished

//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given
//put in a whole new food OBJECT
//
// const updateFood2=(foods, id, food)=>{
//   foods.map((foodElement)=>{
//     if (foodElement.id === id){
//       return food
//     }
//     return foodElement
//   })
//  }

//  console.log('updateFood2', updateFood2(mexican, 1, {id:12, name:'Changed', price:1000}))



//  const updateFood2 = mexican.map((p) => (p.id === 1 ? { ...p, name:'cheesecake' , price:100} : p));

// console.log("Original: ", mexican);

// console.log("New price: ", updateFood2);

// updateFood2(mexican, 1, {id:1 ,name:'cheesecake' , price:100}) //changes name and price
//------------------------------------------------------------------ Finished

// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id



// const deleteFood1 = (foods,id)=>{
//   // foods.filter((food)=>idMatch(food, id))
//     return foods.filter ((t)=> t.id !== id)
// }
// console.log('delete FOOD 1',deleteFood1(mexican , 1)) //removes mexican food
//------------------------------------------------------------------

// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFoodPrice = (foods, price) => {
  let newPrice = foods.filter((food) => food.price <= price)
  return newPrice;
};
console.log('Original: ', american)
console.log('Removed prices: ', deleteFoodPrice(american, 10));
// deleteFood2(mexican , >=10) //grab foods Greater or Less than the number