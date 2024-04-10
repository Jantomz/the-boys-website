import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="flex font-medium text-xl p-20 items-center justify-between">
          <li>
            <Link to="/" className="text-3xl">
              The Boys
            </Link>
          </li>
          <ul className="flex gap-[3em] font-medium text-xl flex-row-reverse items-center">
            <li className="p-3 bg-saffron rounded-md">
              <Link to="/donate" rel="noopener noreferrer">
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                to="/impact"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                Our Impact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                About
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}
