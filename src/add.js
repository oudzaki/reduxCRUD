import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = () => {
    
    const [nom , setnom] = useState('');
    const [email , setemail] = useState('');
    const [age , setage] = useState(0);
    const [err , seterr] = useState({})
    const navigate = useNavigate() ;

    const med = useDispatch();
    const data = useSelector(state => state);


    const handlersubmutt = (e) => {
        e.preventDefault() ;

        if(nom.length < 3) {
           return seterr({...err , nom : "khas ldine mok ykoune smaytk kbira 3la 3 ya wjah l kalb"})
        }else{
            console.log(1);
            seterr({...err , nom : "drgregeg"})
        }

        if (!email.includes("@")){
            return seterr({...err , email : "khas ldine mok ykoune niichaaaane ya wjah l kalb"})
        }
        else{
            const updatestatee = {...err} ;
             updatestatee.email = null
            seterr(updatestatee)
        }


        if(+age < 18 || +age > 35){
            return seterr({...err , age : "khas ldine mok ykoune niichaaaane ya wjah l kalb"})
        }
        else{
            const updatestatee = {...err} ;
             updatestatee.age = null
            seterr(updatestatee)
        }

       

        if(Object.keys(err).length == 0){
            med({type : "ADD"  , taha : { id : data.length + 1  , nom , email , age}})
            navigate('/')
        }

        
        






    }

    

    useEffect(() => {
        console.log(err);
    }, [err]);

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