interface ProductsListProps {
  products: string[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products.map((item: string, index: number) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};

export default ProductsList;
