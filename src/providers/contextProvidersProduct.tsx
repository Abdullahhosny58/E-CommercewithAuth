import React, { createContext, useContext, ReactNode } from "react";
import { TGetAllProducts } from "@/services/Products/fatctServerProduct";
import { useGetAllProducts } from "@/query/products/getAllProduct/getAllProduct";

interface ProductsContextType {
  products: TGetAllProducts | undefined;
  isLoading: boolean;
  isError: boolean;
  loadMoreProducts: () => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [page, setPage] = React.useState(5);
  const { data, isLoading, isError, refetch } = useGetAllProducts(page);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
    refetch();
  };

  return (
    <ProductsContext.Provider value={{ products: data, isLoading, isError, loadMoreProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};