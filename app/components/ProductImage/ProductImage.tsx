import { Suspense } from "react";
import Image from "next/image";

type ProductImageProps = {
  title: string;
  src: string;
  idx: number;
};

const ProductImage = ({ title, src, idx }: ProductImageProps) => {
  return (
    <Suspense fallback={<h2>Loading image...</h2>}>
      <figure className="productImage">
        <Image
          priority={idx <= 4}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          width="0"
          height="0"
          alt={title}
          src={src}
        />
      </figure>
    </Suspense>
  );
};

export default ProductImage;
