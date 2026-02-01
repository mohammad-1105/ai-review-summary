import type { Product } from "@/lib/types";
import { Review } from "./review";
import { Separator } from "./ui/separator";

export function Reviews({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Our Customer Reviews</h2>

      <div className="space-y-6">
        {product.reviews.map((review, i) => (
          <div key={review.date}>
            <Review review={review} />
            {i < product.reviews.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
    </div>
  );
}
