import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const productLink = "/shop/" + product.id;
  return (
    <Link to={productLink}>
      <div className="rounded-md shadow-lg hover:shadow-2xl p-4 m-4 transition-all cursor-pointer">
        <img src={product.img} className="w-[20vw] rounded-md"></img>
        <h3 className="text-2xl font-medium my-3">{product.name}</h3>
        <p>${product.price} CAD</p>
      </div>
    </Link>
  );
}
