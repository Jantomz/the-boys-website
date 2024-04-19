import ContentContainer from "../components/ContentContainer";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const products = [
    {
      id: 1,
      tag: "New",
      name: "Pikachu",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/ietrkw.png",
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 2,
      tag: "New",
      name: "uOttawa Patch",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/l4juh9.png",
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 3,
      tag: "New",
      name: "Husky",
      price: 5,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/0slvmj.png",
      description: "This is a patch for the University of Toronto.",
    },
    {
      id: 4,
      tag: "New",
      name: "Carleton",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/64ce1p.png",
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 5,
      tag: "New",
      name: "Lakers",
      price: 5,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/mpna7x.png",
      description: "This is a patch for the University of Ottawa.",
    },
  ];

  return (
    <div>
      <header className="z-400">
        <h1 className="text-9xl font-bold text-center text-white max-md:text-4xl">
          Shop
        </h1>
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
