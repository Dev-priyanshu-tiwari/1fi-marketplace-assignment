import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Generic async-data hook: runs `fetcher`, tracks loading/error/data,
 * and exposes `retry`. `deps` controls when it re-fetches (e.g. a
 * category filter or a product id changing).
 */
export function useAsync(fetcher, deps = []) {
  const [state, setState] = useState({ status: "loading", data: null, error: null });
  const attemptRef = useRef(0);

  const run = useCallback(() => {
    const attempt = ++attemptRef.current;
    setState({ status: "loading", data: null, error: null });
    fetcher()
      .then((data) => {
        if (attemptRef.current === attempt) {
          setState({ status: "success", data, error: null });
        }
      })
      .catch((error) => {
        if (attemptRef.current === attempt) {
          setState({ status: "error", data: null, error });
        }
      });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
  }, [run]);

  return { ...state, retry: run };
}
