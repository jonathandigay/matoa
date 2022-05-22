import { useContext, createContext, useState } from "react";

const LoaderContext = createContext<any>({});

export const useLoader = () => {
  return useContext(LoaderContext);
};

export const LoaderProvider = ({ children }: any) => {
  const [isLoader, setIsLoader] = useState("");

  return (
    <LoaderContext.Provider value={{ isLoader, setIsLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
