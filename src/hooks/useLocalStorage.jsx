// --- useLocalStorage Custom Hook --- //
import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Load from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;