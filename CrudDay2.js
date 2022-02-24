// TEST DATA

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP-------------------------------------------------------------Finished

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)
// const about = (foods)=>{
//   return foods.map((mexicanFood) => {
//       return `${mexicanFood.name} is $${mexicanFood.price}, Kinda pricy`
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




//MAP-----------------------------------------------------------------

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given
//change the price of the given id
const updateFood1=(foods, id, price)=>{

 // Update - Map

}

//---------------------------------------------------------------------Finished

//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given
//put in a whole new food OBJECT
//
// const updateFood2=(foods, id, food)=>{



//  }

//  const updateFood2 = mexican.map((p) => (p.id === 1 ? { ...p, name:'cheesecake' , price:100} : p));

// console.log("Original: ", mexican);

// console.log("New price: ", updateFood2);

// updateFood2(mexican, 1, {id:1 ,name:'cheesecake' , price:100}) //changes name and price
//------------------------------------------------------------------

// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

const deleteFood1 = (foods,id)=>{




}
deleteFood1(mexican , 1) //removes mexican food
//------------------------------------------------------------------

// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

const deleteFood2 = (foods,price)=>{



}
// deleteFood2(mexican , >=10) //grab foods Greater or Less than the number