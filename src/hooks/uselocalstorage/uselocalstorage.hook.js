import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initValue)
  );

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? localStorageValue : value;
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  function getLocalStorageValue(key, initValue) {
    const itemFromStorage = localStorage.getItem(key);
    return itemFromStorage ? JSON.parse(itemFromStorage) : initValue;
  }
  return [localStorageValue, setValue];
};

export default useLocalStorage;
