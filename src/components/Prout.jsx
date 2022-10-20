import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';


const Prout = ({children, log=false}) => {

    const {user} = useUserAuth();
    const navigate = useNavigate();

    if(!log){
        if(user){
            return children;
        }else{
            navigate('/');
        }
    }else{
        if(user){
            navigate('/home');
        }else{
            return children;
        }
    }

}

export default Prout