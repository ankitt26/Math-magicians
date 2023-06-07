import { useEffect, useState } from 'react';
import styles from '../Styles/Quotes.module.css';

const Quotes = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterror] = useState(false);

  useEffect(() => {
    const quotesData = async () => {
      const category = 'success';
      const apiKey = process.env.REACT_APP_SECRET_KEY;
      setloading(true);
      try {
        await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        )
          .then((response) => response.json())
          .then((json) => setdata(json));
      } catch (error) {
        seterror(true);
      }
      setloading(false);
    };
    quotesData();
  }, []);

  if (err === true) {
    return <p className={styles.quote}>⚠️ An error occurs during the API request</p>;
  }

  if (loading === true) {
    return <p className={styles.quote}> 🔃 Loading....... </p>;
  }

  return (
    <p className={styles.quote}>
      🎉
      {data[0]?.quote}
      <span className={styles.author}>
        {' '}
        –
        {data[0]?.author}
        {' '}
        .
      </span>
    </p>
  );
};
export default Quotes;
