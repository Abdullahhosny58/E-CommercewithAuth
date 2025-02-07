"use client";

import { useGetProductsByCategory } from "@/query/categories/useGetProductsByCategory";
import { useParams } from "next/navigation";

const Categories = () => {
    const { categoriesId } = useParams(); // 🔹 جلب ID من الـ URL
    const { data, isLoading, error } = useGetProductsByCategory(categoriesId); // 🔹 تمريره إلى `useGetProductsByCategory`

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Category: {categoriesId}</h1>
            <ul>
                {data?.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} width="100" />
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
