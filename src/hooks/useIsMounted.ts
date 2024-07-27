import { useEffect, useState } from "react";

export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  return { isMounted };
}
