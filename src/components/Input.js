import React, { useState } from "react";
import useLocalStorage from "./useLocalStroge";

const Input = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
  );
};

export default Input;
