// eslint-disable-next-line import/no-anonymous-default-export
export default (operation, index)=> {
    console.log(operation, index);
    return {
        type: "updateFrozen",
        payload: {
            operation,
            index
        }
    }
}