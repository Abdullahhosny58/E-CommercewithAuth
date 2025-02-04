"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderContext from "../../context/ProvidersContext";
import { ProductsProvider } from "./contextProvidersProduct";
import { store } from "@/rtk/store";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
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
      <Provider store={store}>
        <ProviderContext>
          <ProductsProvider>{children}</ProductsProvider>
        </ProviderContext>
      </Provider>
    </QueryClientProvider>
  );
}

export default Providers;
