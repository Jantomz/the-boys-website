import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <section className="flex justify-center pt-24 gap-12 max-sm:flex-col max-sm:items-center">
        <a
          href="https://support.cancer.ca/site/SPageServer/?pagename=RFLY_NW_AboutRelayForLife"
          target="_blank"
        >
          <button className="bg-celestial hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">
            What is Relay for Life?
          </button>
        </a>
        <a href="/shop">
          <button className="bg-celestial hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">
            Explore Our Shop
          </button>
        </a>
      </section>
      <section className="flex justify-center pt-24">
        <h1 className="text-xl font-medium underline-offset-8 underline">
          Upcoming Events
        </h1>
      </section>
      {/* <section className="flex justify-center pt-24">
        <h1 className="text-xl font-medium underline-offset-8 underline">
          Sponsors
        </h1>
      </section> */}
    </div>
  );
}
