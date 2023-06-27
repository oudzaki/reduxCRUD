import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const List = () => {

    const taha =  useSelector(state => state ) ;

    const dispatch = useDispatch() ;

    return(
        <div>
            <Link to="/add" >Add</Link>

            <table border={1}>
                <thead>
                    <th>id</th>
                    <th>nom</th>
                    <th>email</th>
                    <th>age</th>
                    <th>action</th>
                </thead>

                <tbody>
                    {
                        taha.map((item) => {
                            return (
                                <tr key="">
                                    <td>{item.id}</td>
                                    <td>{item.nom}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>
                                            <button onClick={() => dispatch({type:"DELETE" , idDELETE : item.id})}>delete</button>
                                            <Link to={'/update/'+item.id}><button >update</button></Link> 
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default List ;