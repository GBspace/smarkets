import { useEffect, useState, useRef } from "react";
  const useFetch = (url, ref, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    useEffect(() => {
      if(ref.current){
        fetch(cors_api_url + url, {
          method: 'GET',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(res => {
          if(res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(json => { 
          setData(json)
        })
        .catch(err => {
          setError(err.message);
        }).finally(()=>setLoading(false));
      }
      return () => {
        ref.current = false;
      }
    }, [url,ref]);
    return {data,error,loading};
  }

export {useFetch};