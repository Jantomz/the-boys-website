import { useParams } from "react-router-dom";
import ContentContainer from "../components/ContentContainer";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { productId } = useParams();
  const [customizations, setCustomizations] = useState("");

  // TODO: Make images into a carousel, add random assorted bundle and customization products, add email system

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
    <ContentContainer extraClass="flex">
      <button className="mr-16" onClick={() => window.history.back()}>
        <i class="fa-solid fa-arrow-left fa-2x"></i>
      </button>
      <img src={product.img} className="w-[50%]"></img>
      <div className="mx-12 flex flex-col justify-between">
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