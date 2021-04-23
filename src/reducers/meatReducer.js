const seeData = [
    { 
        food: "chicken breast",
        quantity: 14
    },
    {
        food: "mouton",
        quantity:11
    },
    { 
        food: "mahi mahi ",
        quantity: 35
    }
]

export default (state = seeData, action)=>{
    console.log("Meat Reducer is running!")
    console.log(action)
    return state;
}