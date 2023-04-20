import { createClient } from 'contentful';

import { useState, useEffect } from 'react';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const useFetchContents = () => {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);

  const getContents = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'contentfulApp',
      });
      const contents = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id };
      });
      setContents(contents);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getContents();
  }, []);

  return { loading, contents };
};

// client
//   .getEntries({
//     content_type: 'contentfulApp',
//   })
//   .then((response) => console.log(response.items))
//   .catch(console.error);
