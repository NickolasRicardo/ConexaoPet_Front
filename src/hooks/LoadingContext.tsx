import React, { createContext, useCallback, useState, useContext } from "react";
import { Spin } from "antd";

interface LoadingContextData {
  setValues(loading: boolean, titleLoading?: string): void;
  removeLoading(): void;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

export const LoadingProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [titleLoading, setTitleLoading] = useState<string>("");

  const setValues = useCallback((loading: boolean, titleLoading: string) => {
    setLoading(loading);
    setTitleLoading(titleLoading);
  }, []);

  const removeLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ setValues, removeLoading }}>
      <Spin
        size="large"
        spinning={loading}
        indicator={
          <img
            src={
              "https://img.freepik.com/vetores-premium/design-de-logotipo-de-cuidados-com-animais-de-estimacao_646665-51.jpg"
            }
            height={200}
            width={200}
            alt="loading"
          />
        }
        tip={titleLoading || "Carregando..."}
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          maxHeight: "none",
        }}
      >
        {children}
      </Spin>
    </LoadingContext.Provider>
  );
};

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return context;
}
