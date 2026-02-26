"use client";

import apiClient from "@/lib/api-client";
import { IProduct } from "@/types/product-types";
import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  return useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: () => apiClient.get("/products").then((res) => res.data.data),
  });
}
