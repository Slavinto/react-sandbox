import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(url, options);
        const res = await req.json();

        setData(res);
        setLoading(false);
      } catch (error) {
        setError(new Error(error));
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
