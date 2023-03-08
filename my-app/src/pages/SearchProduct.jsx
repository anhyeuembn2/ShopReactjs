import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { SearchProducts } from '../api/SearchProduct';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getCategories } from '../api/Categories';
import Sorting from '../components/Sorting';
const SearchProduct = () => {
  const { search } = useParams();
  const [product, setProduct] = useState([]);


  const [cate, setCate] = useState([]);
  const [id, setId] = useState(0);
  const [sorts, setSorts] = useState();


  useEffect(() => {
    const idx = new URLSearchParams(location.search).get("sort");
    if (idx) {
      setSorts(idx);
    }
  }, [location.search])

  useEffect(() => {
    const Search = async () => {
      if (id && typeof sorts === 'undefined') {
        const { data } = await SearchProducts(search, id);
        setProduct(data);
      } else if (sorts) {
        if (sorts === "-sortPriceAsc" || sorts === "-sortNameAsc") {
          const { data } = await SearchProducts(search, id, sorts);
          setProduct(data);
        } else if (sorts === "-sortPriceDsc" || sorts === "-sortNameDsc") {
          const { data } = await SearchProducts(search, id, sorts);
          setProduct(data);
        }

      } else if (!id && typeof sorts === 'undefined') {

        const { data } = await SearchProducts(search);
        setProduct(data);

      }
    }
    Search();
  }, [search, id, sorts])



  useEffect(() => {
    const getData = async () => {
      const { data } = await getCategories();
      setCate(data);
    }
    getData();
  }, []);


  return (
    <div className='w-full flex justify-center'>
      <div className='w-[20%]'>
        <h2>Bộ lọc tìm kiếm</h2>
        {cate && cate.map((item) => (
          <Link onClick={() => setId(item.id)} to={`?keyword=${item.name}_${item.id}`} key={item.id} className="flex flex-col py-3 font-bold">{item.name}</Link>
        ))}
        <Sorting />
      </div>
      <div className='grid grid-cols-4 gap w-[80%]'>

        {product?.map((product) => (
          <div key={product.id} className="border border-gray-200 h-[350px]">
            <Link to={`/products/${product.id}`} className="text-center font-bold flex items-center justify-center">{product.name}</Link>
            <Link to={`/products/${product.id}`}> <img src={product.image} alt="" className='w-[118px] h-[200px] mx-auto' /></Link>
            <p className='font-bold text-center'>{product.price}</p>
            <p className='font-bold text-center'>{product.description.substring(0, 20)}</p>
            <button className='w-[100px] h-[40px] bg-red-600 my-4 text-white  flex justify-center items-center  mx-auto'><Link to={'/cart'}>Add To Cart</Link></button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SearchProduct
