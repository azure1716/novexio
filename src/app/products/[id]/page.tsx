import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsShowcaseClient from "@/components/products/ProductsShowcaseClient";
import { getProductById, PRODUCTS } from "@/data/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return {
      title: "NOVEXIO | VENTURE NOT FOUND",
    };
  }
  return {
    title: `NOVEXIO | ${product.name} - ${product.tagline}`,
    description: product.description,
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center font-label-mono-bold text-sm text-primary">LOADING_VENTURE_SPEC...</div>}>
      <ProductsShowcaseClient initialProductId={id} />
    </Suspense>
  );
}
