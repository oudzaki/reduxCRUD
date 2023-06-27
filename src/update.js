import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";


const Update = () => {
	const {id} = useParams() ;
	const data = useSelector(state => state) ;
	const [nom , setnom] = useState('');
	const [email , setemail] = useState('');
	const [age , setage] = useState(0);

	const med = useDispatch();
	const navigate = useNavigate() ;

	useEffect(() => {
		let item = data.find((item) => item.id === +id) ;
		setage(item.age)
		setemail(item.email)
		setnom(item.nom)
	} , [id])

	const handlersubmutt = (e) => {
		e.preventDefault();

		med({type : "UPDATE" , taha : {id , nom , email , age}})

		navigate('/')

	}



	return (
		<div>
			<div>
            <form onSubmit={handlersubmutt}>
                <input onChange={(e) => setnom(e.target.value)} value={nom} type="text" placeholder="nom" />

                <input onChange={(e) => setemail(e.target.value)}value={email} type="text" placeholder="email" />

                <input onChange={(e) => setage(e.target.value)}value={age} type="text" placeholder="age" />

                <button>add</button>
            </form>
        </div>
		</div>
	)
}



export default Update ;