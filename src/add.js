import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const [nom , setnom] = useState('');
    const [email , setemail] = useState('');
    const [age , setage] = useState(0);
    const [err , seterr] = useState({});
    const navigate = useNavigate() ;

    const med = useDispatch();
    const data = useSelector(state => state);


    const handlersubmutt = (e) => {
        e.preventDefault() ;

        let errors  = {}

        if(nom.length < 3) {
           errors.nom = "dair 3 l7ourf"
        }

        if (!email.includes("@")){
            errors.email = "dair @"
        }

        if(+age < 18 || +age > 35){
            errors.age = "dezfzf eer"
        }

        seterr(errors)

        if(Object.keys(errors).length === 0){
            med({type : "ADD"  , taha : { id : data.length + 1  , nom , email , age}})
            navigate('/')
        }

    }


    return (
        <div>
            <form onSubmit={handlersubmutt}>
                <input onChange={(e) => setnom(e.target.value)} type="text" placeholder="nom" />
                <p style={{color : "red"}}>{ err.nom ? err.nom : ""}</p>
                <input onChange={(e) => setemail(e.target.value)} type="text" placeholder="email" />
                <p style={{color : "red"}}>{ err.email ? err.email : ""}</p>
                <input onChange={(e) => setage(e.target.value)} type="text" placeholder="age" />
                <p style={{color : "red"}}>{ err.age ? err.age : ""}</p>
                <button>add</button>
            </form>
        </div>
    )
};


export default Add ;