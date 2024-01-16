import { createContext, useState } from "react";

export const AkunContext = createContext();

const AkunProvider = ({ children }) => {
  const [user, setUser] = useState("Ahmad Satria Iswahyudi");

  function loginUser(newName) {
    setUser(newName);
  }
  return (
    <AkunContext.Provider value={{ user, loginUser }}>
      {children}
    </AkunContext.Provider>
  );
};

export default AkunProvider;
