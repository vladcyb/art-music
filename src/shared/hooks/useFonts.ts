import { useEffect, useState } from 'react';
import { fontApiService } from '../../services/api/fontApiService';

// for tests
// const slowPromise = () => new Promise(((resolve) => {
//   setTimeout(() => {
//     resolve(0);
//   }, 1000000);
// }));

export const useFonts = (url: string) => {
  const [finished, setFinished] = useState(false);

  const loadFonts = async () => {
    try {
      const result = (await fontApiService.load(url)).data;
      // await slowPromise();
      const el = document.getElementById('fonts-root');
      if (el) {
        el.innerHTML = result;
      }
      setFinished(true);
    } catch (e) {
      setFinished(true);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return finished;
};
