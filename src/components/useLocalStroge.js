import { useEffect, useState } from "react";

function getSave(key, initialValue) {
  const saveValue = JSON.parse(localStorage.getItem(key));
  if (saveValue) return saveValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    console.log("yes");
    return getSave(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return [value, setValue];
}
