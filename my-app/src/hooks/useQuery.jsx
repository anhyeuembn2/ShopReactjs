import axios from 'axios';
import { useState, useEffect } from 'react';

const useQuery = (url) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [cancelToken, setCancelToken] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const source = axios.CancelToken.source();
    setCancelToken(source.token);

    const getProduct = async () => {
      try {
        const { data } = await axios.get(url, { cancelToken: source.token });
        if (mounted) {
          setProduct(data);
          setLoading(false);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        } else {
          setError(error);
          setLoading(false);
        }
      }
    };

    getProduct();

    return () => {
      mounted = false;
      source.cancel();
    };
  }, [url]);

  return {
    loading,
    product,
    error,
    cancelToken
  };
};

export default useQuery;
