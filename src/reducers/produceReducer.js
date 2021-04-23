const seeData = [
    { 
        food: "lettuce",
        quantity: 14
    },
    {
        food: "turnips",
        quantity:11
    },
    { 
        food: "apples",
        quantity: 35
    },
    {
        food: "cilantro",
        quantity: 135
    }
]

export default (state = seeData, action)=>{

    console.log("Produce Reducer is running!")
    console.log(action)

    return state;
}