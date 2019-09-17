import { useState, useEffect } from 'react';

function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function fetchUrl(url) {
    setLoading(true);

    return await new Promise(async (resolve, reject) => {      
      await fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(typeof Number(res.cod), Number(res.cod));
          
          if (Number(res.cod) > 400) {
            setError(res.message);
            reject(res.message);
          }
          
          resolve(res)
          setData(res);
        })
        .catch(err => {
          console.log('error from catch:', err.message);
          setError('Cannot connect to server to get your data. Please try again it later.')
          reject(err);
        });

      setLoading(false);
    })
  };

  function clear() {
    setError('');
    setData('');
  }

  return { data, loading, error, fetchUrl, clear, setLoading };
}

export default useFetch;