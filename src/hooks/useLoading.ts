import { useState, useEffect } from 'react';

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading;
}