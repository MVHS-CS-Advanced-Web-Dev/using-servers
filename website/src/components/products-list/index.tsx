interface ProductsListProps {
  products: string[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  // loop through products and show each one
  return (
    <>
      {products.map((item: string, index: number) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};

export default ProductsList;
