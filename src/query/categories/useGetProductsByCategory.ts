import { fetchProductsByCategory } from "@/services/categories/fetchProductsByCategory";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsByCategory = (category?: string) => {
    return useQuery({
        queryKey: ["getProductsByCategory", category], // 🔹 تخزين البيانات بناءً على الفئة
        queryFn: () => fetchProductsByCategory(category), // 🔹 جلب البيانات
        enabled: !!category // 🔹 عدم تنفيذ الاستعلام بدون `category`
    });
};
