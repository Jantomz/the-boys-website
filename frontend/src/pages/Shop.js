import { useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import ProductCard from "../components/ProductCard";

import avocadoImg from "../images/Avocado.png";
import bananaImg from "../images/Banana.png";
import beachImg from "../images/Beach.png";
import breastCancerImg from "../images/BreastCancer.png";
import canadaImg from "../images/Canada.png";
import daffodilImg from "../images/Daffodil.png";
import glassesImg from "../images/Glasses.png";
import huskyImg from "../images/Husky.png";
import relayImg from "../images/Relay.png";
import sacredHuskiesImg from "../images/SacredHuskies.png";
import shhs2024Img from "../images/SHHS2024.png";
import shhs2025Img from "../images/SHHS2025.png";
import smileyImg from "../images/Smiley.png";
import specialImg from "../images/Special.png";

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
      name: "Avocado",
      price: 3,
      size: "3cm x 4xm",
      img: avocadoImg,
      description: "This is a patch for the University of Waterloo.",
    },
    {
      id: 2,
      tag: "New",
      name: "Banana",
      price: 3,
      size: "3cm x 4xm",
      img: bananaImg,
      description: "This is a patch for the University of Ottawa.",
    },
    {
      id: 3,
      tag: "New",
      name: "Beach",
      price: 5,
      size: "3cm x 4xm",
      img: beachImg,
      description: "This is a patch for the University of Toronto.",
    },
    {
      id: 4,
      tag: "New",
      name: "Breast Cancer Ribbon",
      price: 3,
      size: "3cm x 4xm",
      img: breastCancerImg,
      description: "This is a patch for Carleton University.",
    },
    {
      id: 5,
      tag: "New",
      name: "Canada",
      price: 5,
      size: "3cm x 4xm",
      img: canadaImg,
      description: "This is a patch for the Los Angeles Lakers.",
    },
    {
      id: 6,
      tag: "New",
      name: "Daffodil",
      price: 3,
      size: "3cm x 4xm",
      img: daffodilImg,
      description: "This is a patch for Sacred Heart High School.",
    },
    {
      id: 7,
      tag: "New",
      name: "Glasses",
      price: 3,
      size: "3cm x 4xm",
      img: glassesImg,
      description: "This is a patch for the National Hockey League.",
    },
    {
      id: 8,
      tag: "New",
      name: "Husky",
      price: 3,
      size: "3cm x 4xm",
      img: huskyImg,
      description: "This is a patch for Relay for Life.",
    },
    {
      id: 9,
      tag: "New",
      name: "Relay",
      price: 3,
      size: "3cm x 4xm",
      img: relayImg,
      description: "This is a patch for Spiderman fans.",
    },
    {
      id: 10,
      tag: "New",
      name: "Sacred Huskies",
      price: 3,
      size: "3cm x 4xm",
      img: sacredHuskiesImg,
      description: "This is a patch with a daffodil design.",
    },
    {
      id: 11,
      tag: "New",
      name: "SHHS 2024 Grads",
      price: 3,
      size: "3cm x 4xm",
      img: shhs2024Img,
      description: "This is a patch for the Toronto Raptors.",
    },
    {
      id: 12,
      tag: "New",
      name: "SHHS 2025 Grads",
      price: 3,
      size: "3cm x 4xm",
      img: shhs2025Img,
      description: "This is a patch with a pokeball design.",
    },
    {
      id: 13,
      tag: "New",
      name: "Smiley",
      price: 3,
      size: "3cm x 4xm",
      img: smileyImg,
      description: "This is a patch for fans of The Boys TV show.",
    },
    {
      id: 14,
      tag: "New",
      name: "Custom Order!",
      price: 5,
      size: "Max: 4in x 4in",
      img: "https://files.catbox.moe/g9wsuq.png",
      description: `Write your desired patch design in the "customizations" field at checkout! We'll email you about more information soon!`,
    },
    {
      id: 15,
      tag: "New",
      name: "Shop Bundle of 4",
      price: 7,
      size: "4 of 3cm x 4cm",
      img: specialImg,
      description: `Write the four patch designs you would like from our website in the "customizations" field at checkout! We'll email you about more information soon!`,
    },
    {
      id: 16,
      tag: "New",
      name: "Mystery Package of 10",
      price: 15,
      size: "10 of 3cm x 4cm",
      img: specialImg,
      description: `We'll send you an assorted package of 10 patches!`,
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
