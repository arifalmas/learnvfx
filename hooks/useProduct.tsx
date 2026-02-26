"use client";

import apiClient from "@/lib/api-client";
import { IProduct } from "@/types/product-types";
import { useQuery } from "@tanstack/react-query";

export default function useProduct(slug: string) {
  return useQuery<IProduct>({
    queryKey: ["product", slug],
    queryFn: () =>
      apiClient.get(`/products/${slug}`).then((res) => res.data.data),
    enabled: !!slug,
  });
}
