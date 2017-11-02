const action_setIndex = (type)=>{
    if(type){
        return {
            type: "RESETINDEX",
            payload: null
        };
    }
    return {
        type: "SETINDEX",
        payload: null
    };
}

module.exports = action_setIndex;