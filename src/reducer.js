
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

    if(action.type === "DELETE"){
        return [...state.filter((item) => item.id  !== action.idDELETE )]
    }

    if(action.type === "UPDATE"){
        let item = state.find(item => item.id === +action.taha.id);

        item.nom = action.taha.nom
        item.email = action.taha.email
        item.age = action.taha.age

        return state
    }


    return state ;
}

export default tt ;