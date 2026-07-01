import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsShowcaseClient from "@/components/products/ProductsShowcaseClient";

export const metadata: Metadata = {
  title: "NOVEXIO | VENTURES & PRODUCTS MATRIX",
  description: "Explore Novexio Digital Foundry's active ventures: OOKUBB, LYNIQ, QUIZZY, and STUDYSPACE.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center font-label-mono-bold text-sm text-primary">INITIALIZING_PORTFOLIO_MATRIX...</div>}>
      <ProductsShowcaseClient />
    </Suspense>
  );
}
