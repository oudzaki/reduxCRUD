
let data = [
    {
        id : 1 ,
        nom : "taha" ,
        email : "taha@ed.ee" ,
        age : 25 ,
    }
] ;


const tt = (state = data , action) => {

    if(action.type === "ADD"){

        return [...state , action.taha]
    }


    return state ;
}

export default tt ;