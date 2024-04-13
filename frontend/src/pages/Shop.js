import ContentContainer from "../components/ContentContainer";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = [
    {
      id: 1,
      tag: "New",
      name: "uWaterloo Patch",
      price: 10,
      size: "3cm x 4xm",
      img: "https://redcanoebrands.com/wp-content/uploads/2013/03/U-PTC-RCAF-01_front.jpg",
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 2,
      tag: "New",
      name: "uOttawa Patch",
      price: 20,
      size: "3cm x 4xm",
      img: "https://m.media-amazon.com/images/I/81bf3IIQUyL._AC_UF1000,1000_QL80_.jpg",
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 3,
      tag: "New",
      name: "uToronto Patch",
      price: 30,
      size: "3cm x 4xm",
      img: "https://i.ebayimg.com/images/g/9icAAOSwKgZdAoAq/s-l1200.jpg",
      description: "This is a patch for the University of Toronto.",
    },
    {
      id: 4,
      tag: "New",
      name: "uWaterloo Patch",
      price: 10,
      size: "3cm x 4xm",
      img: "https://redcanoebrands.com/wp-content/uploads/2013/03/U-PTC-RCAF-01_front.jpg",
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 5,
      tag: "New",
      name: "uOttawa Patch",
      price: 20,
      size: "3cm x 4xm",
      img: "https://i.ebayimg.com/images/g/r6cAAOSwITZjRzKN/s-l1600.jpg",
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 6,
      tag: "New",
      name: "uToronto Patch",
      price: 30,
      size: "3cm x 4xm",
      img: "https://i.ebayimg.com/images/g/9icAAOSwKgZdAoAq/s-l1200.jpg",
      description: "This is a patch for the University of Toronto.",
    },
    {
      id: 7,
      tag: "New",
      name: "uOttawa Patch",
      price: 20,
      size: "3cm x 4xm",
      img: "https://i.ebayimg.com/images/g/r6cAAOSwITZjRzKN/s-l1600.jpg",
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 8,
      tag: "New",
      name: "uToronto Patch",
      price: 30,
      size: "3cm x 4xm",
      img: "https://i.ebayimg.com/images/g/9icAAOSwKgZdAoAq/s-l1200.jpg",
      description: "This is a patch for the University of Toronto.",
    },
  ];

  return (
    <div>
      <header className="z-400">
        <h1 className="text-9xl font-bold text-center text-white">Shop</h1>
      </header>
      <ContentContainer extraClass="translate-y-12">
        <section className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
        </section>
      </ContentContainer>
    </div>
  );
}
