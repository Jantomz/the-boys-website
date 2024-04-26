import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function Product() {
  const { productId } = useParams();
  const [customizations, setCustomizations] = useState("");

  // TODO: Make images into a carousel, add random assorted bundle and customization products, add email system

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
      description: "This is a patch for avocado lovers.",
    },
    {
      id: 2,
      tag: "New",
      name: "Banana",
      price: 3,
      size: "3cm x 4xm",
      img: bananaImg,
      description: "This is a patch for banana enthusiasts.",
    },
    {
      id: 3,
      tag: "New",
      name: "Beach",
      price: 5,
      size: "3cm x 4xm",
      img: beachImg,
      description: "This is a patch for beach lovers.",
    },
    {
      id: 4,
      tag: "New",
      name: "Breast Cancer Ribbon",
      price: 3,
      size: "3cm x 4xm",
      img: breastCancerImg,
      description: "This is a patch to support breast cancer awareness.",
    },
    {
      id: 5,
      tag: "New",
      name: "Canada",
      price: 3,
      size: "3cm x 4xm",
      img: canadaImg,
      description: "This is a patch for proud Canadians.",
    },
    {
      id: 6,
      tag: "New",
      name: "Daffodil",
      price: 3,
      size: "3cm x 4xm",
      img: daffodilImg,
      description: "This is a patch with a daffodil design.",
    },
    {
      id: 7,
      tag: "New",
      name: "Glasses",
      price: 5,
      size: "3cm x 4xm",
      img: glassesImg,
      description: "This is a patch for glasses wearers.",
    },
    {
      id: 8,
      tag: "New",
      name: "Husky",
      price: 3,
      size: "3cm x 4xm",
      img: huskyImg,
      description: "This is a patch for husky lovers.",
    },
    {
      id: 9,
      tag: "New",
      name: "Relay",
      price: 3,
      size: "3cm x 4xm",
      img: relayImg,
      description: "This is a patch for relay race participants.",
    },
    {
      id: 10,
      tag: "New",
      name: "Sacred Huskies",
      price: 3,
      size: "3cm x 4xm",
      img: sacredHuskiesImg,
      description: "This is a patch for fans of Sacred Heart High School.",
    },
    {
      id: 11,
      tag: "New",
      name: "SHHS 2024 Grads",
      price: 3,
      size: "3cm x 4xm",
      img: shhs2024Img,
      description:
        "This is a patch for the graduating class of 2024 at Sacred Heart High School.",
    },
    {
      id: 12,
      tag: "New",
      name: "SHHS 2025 Grads",
      price: 3,
      size: "3cm x 4xm",
      img: shhs2025Img,
      description:
        "This is a patch for the graduating class of 2025 at Sacred Heart High School.",
    },
    {
      id: 13,
      tag: "New",
      name: "Smiley",
      price: 5,
      size: "3cm x 4xm",
      img: smileyImg,
      description: "This is a patch with a smiley face design.",
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
      description: `We'll send you a surprise package of 10 assorted patches!`,
    },
  ];

  const product = products[productId - 1];

  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ||
      localStorage.setItem("cart", "[]")
  );

  const handleAddCart = () => {
    toast.success(
      "Successfully Added to Cart: " + product.name + " x " + quantity,
      {
        position: "top-right",
        onClick: () => {
          window.location.href = "/cart";
        },
      }
    );

    if (cart.find((item) => item.product.id === product.id)) {
      cart[cart.findIndex((item) => item.product.id === product.id)].quantity =
        quantity;
      if (customizations.length > 0) {
        cart[
          cart.findIndex((item) => item.product.id === product.id)
        ].customizations = customizations;
      }
      localStorage.setItem("cart", JSON.stringify([...cart]));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { product, quantity, customizations }])
      );
    }

    setCart(
      JSON.parse(localStorage.getItem("cart")) ||
        localStorage.setItem("cart", "[]")
    );
  };

  return (
    <ContentContainer extraClass="flex max-md:block">
      <button className="mr-16" onClick={() => window.history.back()}>
        <i class="fa-solid fa-arrow-left fa-2x"></i>
      </button>
      <img
        src={product.img}
        className="w-[50%] max-md:m-4 max-md:w-[90%] rounded-md h-[50%]"
      ></img>
      <div className="mx-12 flex flex-col justify-between max-md:gap-6 gap-2">
        <h3>The Boys</h3>
        <h1 className="text-6xl">{product.name}</h1>
        <h2 className="text-lg">{product.description}</h2>
        <h2 className="text-xl">${product.price} CAD</h2>
        <div className="h-[2px] bg-white"></div>
        <div className="flex items-center gap-2">
          <h2>Quantity:</h2>
          <input
            type="number"
            value={quantity}
            onChange={(event) => {
              const value = Math.max(1, event.target.value);
              setQuantity(value);
            }}
            className="text-black p-2 w-[20%]"
            min="1"
          />
        </div>
        <div>
          <h2>Customizations:</h2>
          <textarea
            className="text-black p-2 w-full h-18"
            onChange={(e) => setCustomizations(e.target.value)}
          ></textarea>
        </div>
        <button
          className=" p-4 bg-saffron text-xl rounded-sm hover:bg-platinum hover:text-celestial transition-all"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </ContentContainer>
  );
}
