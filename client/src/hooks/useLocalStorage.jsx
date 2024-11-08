"use client";
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") return undefined;

    try {
      const item = localStorage.getItem(key)
      return item ? item : initialValue;
    } catch (error) {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {      
      const valueToStore =
        typeof storedValue instanceof Function
          ? storedValue(storedValue)
          : storedValue;
      typeof window !== "undefined" && localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
