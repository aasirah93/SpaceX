import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const fetchData = () => {fetch("https://api.spacexdata.com/v3/rockets")
  .then(res => res.json())
  .then(
    (result) => {
      
      setItems(result);
     
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
     <div>
       Hello World!
       <ul>
       {items && items.map(item => <li key = {item.id}>{item.rocket_name}: {item.description}</li>)}
       </ul>
       
     </div>
     )
}
export default App;

