import React from 'react';
import axios from 'axios'
import './App.css';


function App() {
  const [spacexData, setSpacexData] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [currentPageUrl, setCurrentPageUrl] = 'https://api.spacexdata.com/v3/rockets'

  useEffect(() =>  {
    axios.get(currentPageUrl).then(res => {
      setSpacexData(res.data.results.map(p => p.name))
    })
    }, [])

   return (
    <div>
    </div>
  );
}

export default App;

