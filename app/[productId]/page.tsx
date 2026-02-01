import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reviews } from "@/components/reviews";
import { getProduct, getProducts } from "@/lib/sample-data";
import type { Product } from "@/lib/types";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  let product: Product;
  try {
    product = getProduct(productId);
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* product header */}
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">
            {product.description}
          </p>
        </div>

        {/* Reviews card */}
        <Reviews product={product} />
      </div>
    </main>
  );
}

/**
 * Runs at build time.
 * Returns array of route parameters to pre-render.
 * Next.js generates HTML for each route.
 * Pages load instantly (no server rendering needed).
 */
export function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    productId: product.slug,
  }));
}

/**
 * Dynamic page titles (<title> Smart Thermo X - Customer Reviews</title>)
 * SEO-friendly descriptions
 * Falls back gracefully for 404s
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;

  let product: Product;

  try {
    product = getProduct(productId);
  } catch {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Customer Reviews`,
    description: product.description,
  };
}
