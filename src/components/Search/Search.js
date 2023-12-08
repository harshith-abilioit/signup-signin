import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Search.css'

const Search = () => {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

    const filteredArr = data.filter(eachProduct =>(
        eachProduct.title.toLowerCase().includes(search.toLowerCase())
    ))

  return (
    <div className='container'>
        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}  className='search' placeholder='search products...' />
    <div className='main-cont'>
        {filteredArr.map(eachProduct => (
            <div key={eachProduct.id}>
                <div className="each-card" style={{"width": "18rem"}}>
                    <img src={eachProduct.image} alt="not found" />
                    <div className="card-body">
                        <h1 className="card-title">{eachProduct.title}</h1>
                        <p className="card-text">{eachProduct.description}</p>
                        <p>{eachProduct.category}</p>
                        <p>{eachProduct.price}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Search