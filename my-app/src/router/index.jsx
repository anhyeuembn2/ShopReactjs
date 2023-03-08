import {Routes,Route,useNavigate} from 'react-router-dom';
import Product from '../components/Product';
import Search from '../components/Search';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import SearchProduct from '../pages/SearchProduct';
import Singin from '../pages/Singin';
import Singup from '../pages/Singup';
const Router=()=>{
  const navigate=useNavigate();
   const userId=JSON.parse(localStorage.getItem("user")).id;
   
   console.log(userId);
    return(
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/singin' element={<Singin/>}/>
          <Route path='/singup' element={<Singup/>}/>
          <Route path='/:cate/:id/products' element={<Product/>}/>
          <Route path='/search/:search' element={<SearchProduct/>}/>
          <Route path='/products/:id' element={<ProductDetail/>}/>
        </Routes>
    )
}
export default Router;