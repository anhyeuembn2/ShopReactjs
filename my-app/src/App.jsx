import Layout from "./Layout/Layout"
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="w-full h-[100%] fixed top-0 right-0 overflow-y-scroll">
        <div className="w-full bg-orange-600">
          <div className="w-[1260px] h-[119px] mx-auto ">
            {pathname === '/singin' || pathname === '/singup' ? "" : <div><Header /></div>}
            <Layout />
            {pathname === '/singin' || pathname === '/singup' ? "" : <div><Footer /></div>}
          </div>
        </div>
      </div>

    </>



  )
}

export default App
