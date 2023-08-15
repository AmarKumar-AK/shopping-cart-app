import {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../../redux/slice/AuthSlice';
import router from '../../../config/route';

const RequireAuth = ({children}) => {
    // const navigate = useNavigate();

    const isLoggedIn = useSelector(getIsLoggedIn);

    useEffect(() => {
        if(isLoggedIn === true) {
            router.navigate("/products")
        } else {
            router.navigate("/signin")
            alert("You need to login to view products");
        }
    })

  return (
    <div>
        {children}  
    </div>
  )
}

export default RequireAuth
