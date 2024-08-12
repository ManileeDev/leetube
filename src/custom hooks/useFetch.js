import { useEffect, useState } from 'react';
 
function useFetch(url, options = {}) {
    const [data,setData] = useState()

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);  
        const result = await response.json();
        setData(result)
      } catch (err) {
        console.log(err);
      } 
    };
 
    fetchData();
  }, [url]);
 return data;
}
 
export default useFetch;