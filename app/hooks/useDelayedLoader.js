import { useEffect, useState } from "react";

export function useDelayedLoader(isReady, delay = 500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isReady) return;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isReady, delay]);

  return isLoading;
}
