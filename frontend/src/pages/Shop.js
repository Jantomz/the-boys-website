import { useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  useEffect(() => {
    const load = async () => {
      await fetch("https://the-boys-server.onrender.com/", {
        method: "GET",
      });
    };
    load();
  }, []);
  const products = [
    {
      id: 1,
      tag: "New",
      name: "Pikachu",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/049846.png",
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 2,
      tag: "New",
      name: "uOttawa",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/nb0gc0.png",
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 3,
      tag: "New",
      name: "Husky",
      price: 5,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/6mbu83.png",
      description: "This is a patch for the University of Toronto.",
    },
    {
      id: 4,
      tag: "New",
      name: "Carleton",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/9vfxv8.png",
      description: "This is a patch for Carleton University.",
    },
    {
      id: 5,
      tag: "New",
      name: "Lakers",
      price: 5,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/3udjme.png",
      description: "This is a patch for the Los Angeles Lakers.",
    },
    {
      id: 6,
      tag: "New",
      name: "SHHS",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/9602gz.png",
      description: "This is a patch for Sacred Heart High School.",
    },
    {
      id: 7,
      tag: "New",
      name: "NHL",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/3dnw95.png",
      description: "This is a patch for the National Hockey League.",
    },
    {
      id: 8,
      tag: "New",
      name: "Relay",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/xfmwfc.png",
      description: "This is a patch for Relay for Life.",
    },
    {
      id: 9,
      tag: "New",
      name: "Spiderman",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/4uiu1x.png",
      description: "This is a patch for Spiderman fans.",
    },
    {
      id: 10,
      tag: "New",
      name: "Daffodil",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/syx9as.png",
      description: "This is a patch with a daffodil design.",
    },
    {
      id: 11,
      tag: "New",
      name: "Raptors",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/r87vs9.png",
      description: "This is a patch for the Toronto Raptors.",
    },
    {
      id: 12,
      tag: "New",
      name: "Pokeball",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/ctbkp8.png",
      description: "This is a patch with a pokeball design.",
    },
    {
      id: 13,
      tag: "New",
      name: "The Boys",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/esbh2c.png",
      description: "This is a patch for fans of The Boys TV show.",
    },
    {
      id: 14,
      tag: "New",
      name: "Custom Order!",
      price: 3,
      size: "3cm x 4xm",
      img: "https://files.catbox.moe/g9wsuq.png",
      description: `Write your desired patch design in the "customizations" field at checkout!`,
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
