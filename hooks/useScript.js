import { useEffect } from 'react';

const useScript = (url, elementId, preferenceId) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.dataset.preferenceId = preferenceId;

    let el = document.getElementById(elementId);
    

    el.appendChild(script);

    return () => {
      el.removeChild(script);
    }
  }, [url]);
};

export default useScript;