import sample from "./sample.mp4";
import sample2 from "./sample2.mp4";

export default function Header() {
  return (
    <div>
      <header className="z-10">
        <h1 className="text-5xl font-black text-center p-5 max-sm:text-3xl">
          SUPPORT <span className="text-yellow-400">THE BOYS</span>
        </h1>
        <h4 className="text-2xl font-normal text-center w-[50%] m-auto p-5 max-sm:w-[75%]">
          Relay for Life Team
        </h4>
        <h4 className="text-2xl font-normal text-center w-[50%] m-auto max-sm:text-lg max-sm:w-[75%]">
          Together, we can{" "}
          <span className="text-yellow-400">
            give people with cancer the help and support they need to lead more
            fulfilling lives.
          </span>
        </h4>
      </header>
      <video
        className="absolute top-0 h-full w-full object-cover max-sm:hidden"
        autoPlay
        loop
        muted
        style={{ zIndex: -1, filter: "brightness(40%)" }}
      >
        <source src={sample2} type="video/mp4" />
      </video>
    </div>
  );
}
