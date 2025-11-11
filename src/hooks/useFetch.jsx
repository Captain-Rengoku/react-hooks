// --- useFetch Custom Hook --- //
import { useCallback, useEffect, useRef, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  const optionsRef = useRef(options);

  const refetch = useCallback(() => {
    setReload((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!url) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url, optionsRef.current)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (isMounted) setData(json);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url, reload]); // only re-run when URL or reload changes

  return { data, error, loading, refetch, reload };
}

export default useFetch;