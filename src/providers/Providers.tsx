"use client";

import React, { ReactNode, useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderContext from "../../context/ProvidersContext";

interface Props {
  children: ReactNode;
}

export interface SearchContextProps {
  searchTerm: string; // Updated to match the variable name
  setSearchTerm: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

function Providers({ children }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderContext>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        {children}
      </SearchContext.Provider>
      </ProviderContext>
      
    </QueryClientProvider>
  );
}

export default Providers;
