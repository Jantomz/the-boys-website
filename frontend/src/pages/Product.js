import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
