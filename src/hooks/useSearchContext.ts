"use c";
import { useContext } from "react";
import { SearchContext } from "@/providers/Providers"; // Adjust the import path as necessary

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a Providers");
  }
  return context;
};
