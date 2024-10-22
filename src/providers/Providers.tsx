"use client";

import React, { ReactNode, useState, createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

export interface SearchContextProps {
  // Export the interface
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
); // Export the context

function Providers({ children }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        {children}
      </SearchContext.Provider>
    </QueryClientProvider>
  );
}

export default Providers;
