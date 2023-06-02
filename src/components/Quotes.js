import { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterror] = useState(false);

  useEffect(() => {
    const quotesData = async () => {
      const category = 'success';
      const apiKey = 'HmwhVCAVSZi+hxRoWnB1vg==pR9qljjXbuex4AcR';
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
        console.log(error.message);
      }
      setloading(false);
    };
    quotesData();
  }, []);

  return (
    <div>quotes</div>
  );
};
export default Quotes;
