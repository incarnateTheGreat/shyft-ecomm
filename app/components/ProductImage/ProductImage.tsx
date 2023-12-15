import Image from "next/image";

type ProductImageProps = {
  title: string;
  src: string;
};

const ProductImage = ({ title, src }: ProductImageProps) => {
  return (
    <figure className="productImage">
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
        width="0"
        height="0"
        alt={title}
        src={src}
      />
    </figure>
  );
};

export default ProductImage;
