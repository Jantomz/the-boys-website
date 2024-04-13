import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul className="flex font-medium text-xl p-20 items-center justify-between">
          <li className=" hover:text-saffron transition-all hover:font-bold">
            <Link to="/" className="text-3xl">
              The Boys
            </Link>
          </li>
          <ul className="flex gap-[3em] font-medium text-xl flex-row-reverse items-center">
            <li className="p-3 bg-saffron rounded-md hover:bg-platinum hover:text-celestial transition-all">
              <Link
                to="https://support.cancer.ca/site/TR/RelayForLife/RFLY_NW_odd_?team_id=514205&pg=team&fr_id=29599"
                rel="noopener noreferrer"
                target="_blank"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                Cart
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

            {/* <li>
              <Link
                to="/impact"
                rel="noopener noreferrer"
                className=" hover:text-saffron hover:underline-offset-8 hover:underline transition-all"
              >
                Our Impact
              </Link>
            </li> */}
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
