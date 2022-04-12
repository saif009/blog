import { useEffect, useState } from 'react'; 

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

      setTimeout(() => { 
          fetch(url, { signal: abortCont.signal })
            .then((response) => {
              if (!response.ok) {
                throw Error("Unable to fetch data");
              }
              return response.json();
            })
            .then((data) => {
              setData(data);
              setLoading(false);
              setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                } else {
                  setLoading(false);
                  setError(err.message);
                }
            });
    }, 200);

        return () => abortCont.abort();
    }, []);

    return {data, isLoading, error};
}

export default useFetch;