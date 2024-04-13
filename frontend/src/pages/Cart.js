import { useEffect, useState } from "react";
import ContentContainer from "../components/ContentContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const [cart, setCart] = useState();
  const [email, setEmail] = useState();

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const totalPrice = cart?.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleDelete = (productId) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const handlePlaceOrder = () => {
    toast.success("Please Verify Order in Email", {
      position: "top-right",
      autoClose: false,
    });
    localStorage.setItem("cart", "[]");
    setCart([]);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <header className="z-400">
        <h1 className="text-9xl font-bold text-center text-white">Shop</h1>
      </header>
      <ContentContainer extraClass="w-[40%] translate-y-12">
        {cart?.length === 0 ? (
          <>
            <p>Your cart is empty</p>
            <a href="/shop">
              <button className="bg-celestial hover:bg-blue-700 text-white font-semibold py-2 px-4 transition-all w-full my-12">
                Explore Our Shop
              </button>
            </a>
          </>
        ) : (
          <>
            <p>Items in cart: {cart?.length}</p>

            {cart?.map((item, index) => (
              <div key={item.product.id} className="bg-celestial p-4 my-4">
                <div className="flex justify-between items-center">
                  <a className="flex gap-3" href={`/shop/${item.product.id}`}>
                    <img src={item.product.img} className="w-[50px]"></img>
                    <div>
                      <p className="text-2xl">{item.product.name}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </a>
                  <div className="text-wrap">
                    Customizations:{" "}
                    {item.customizations?.length > 0
                      ? item.customizations
                      : " None"}
                  </div>
                  <div className="flex items-end gap-8">
                    <p>
                      ${item.product.price} CAD x {item.quantity} = $
                      {item.quantity * item.product.price} CAD
                    </p>
                    <button onClick={() => handleDelete(item.product.id)}>
                      <i className="fa-solid fa-trash hover:text-red-200"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-right p-4">Total: ${totalPrice} CAD</p>
            <div>
              <h2>
                Contact and Receipt Email{" "}
                <span className="text-red-400">(required)</span>:
              </h2>
              <input
                type="email"
                className="p-4 w-[30%] text-black m-1"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <button
              className={`p-4 bg-saffron text-xl rounded-sm  transition-all my-4 ${
                isValidEmail(email)
                  ? "hover:bg-platinum hover:text-celestial"
                  : "opacity-50"
              }`}
              disabled={!isValidEmail(email)}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </>
        )}
      </ContentContainer>
      <ToastContainer />
    </div>
  );
}
