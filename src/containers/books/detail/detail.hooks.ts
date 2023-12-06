import { useState, useEffect } from 'react';
import axios from 'axios';
import { IBooks } from '../books.types';

const useDetail = (id:number | string) => {
  const [bookData, setBookData] = useState<IBooks | any>();
  const [loading, setLoading] = useState(true);

  const loadBookDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/api/books/${id}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });

      setBookData(response.data.data);
    } catch (error) {
      console.error('Error fetching book detail:', error);
      setBookData({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookDetail();
  }, [id]);

  return { bookData, loading, loadBookDetail };
};

export default useDetail;
