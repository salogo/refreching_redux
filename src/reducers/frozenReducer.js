const seeData = [
    { 
        food: "TV dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity:21
    },
    { 
        food: "Frozen Pizzas",
        quantity: 25
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = seeData, action)=>{
    console.log("Frozen Reducer is running!");
    console.log(action);
    if (action.type === "updateFrozen") {
         console.log("FROZEN  I care about this action!!!")
         const newState = [...state];
         if(action.payload.operation === "+") {
             newState[action.payload.index].quantity++
         } else if (action.payload.operation === "-") {
            newState[action.payload.index].quantity--
         }
         return newState;
    } else {
        return state;
    }
    
}