import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {fetch("https://api.spacexdata.com/v3/rockets")
  .then(res => res.json())
  .then(
    (result) => {
      
      setItems(result);
      setIsLoading(false);
     
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    
  )}

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetchData()
  }, [])
  console.log(items)
  
   return (

     isLoading?  (<h1>Loading...</h1>)  :
     
     <div>
       <ul className = 'cards'>
       {items && items.map(item => (
       <li key = {item.id}>
       <h1> {item.rocket_name}</h1>
       <p>
       <a href={item.id}> 
       &nbsp;&nbsp;
       {item.wikipedia}</a>
       </p>
       <p>{item.description}</p>
       <img src={item.flickr_images} alt="Rockets" width="500" height="600"/>
       </li>
       ))}
       </ul>
       </div>
     )
}
export default App;

