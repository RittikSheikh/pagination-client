import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";


const Home = () => {

    const [products, setProducts] = useState([]);
    const [perPage, setPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);

    const totalPage = Math.ceil(count / perPage);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`http://localhost:5000/products?currentPage=${currentPage}&perPage=${perPage}`)
            const data = await response.json()
            setProducts(data.result)
            setCount(data.count)
        }
        fetchData()
    },[currentPage, perPage])

console.log(currentPage)
    return (
        <div>
            <div className="my-10 text-center">
            <h1 className="text-4xl font-bold  text-center my-10 text-violet-500">Welcome to Pagination</h1>
            {
                [...Array(totalPage).keys()].map(k => <button onClick={()=>setCurrentPage(k)} className="btn btn-primary mr-2" key={k}>{k+1}</button>)
            }
            <select onChange={(e)=>setPerPage(e.target.value)} className="select select-primary">
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {
                    products.map(product => <Cards key={product._id} product={product}></Cards>)
                }
            </div>
        </div>
    );
};

export default Home;