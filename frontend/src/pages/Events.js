import ContentContainer from "../components/ContentContainer";
import sample from "../components/sample.mp4";

export default function Events() {
  return (
    <div>
      <header className="">
        <h1 className="text-9xl font-bold text-center ">Events</h1>
        <p className="text-center text-xl">Who are we?</p>
        <video
          className="absolute top-0 h-[50%] w-full object-cover"
          autoPlay
          loop
          muted
          style={{ zIndex: -1, filter: "brightness(40%)" }}
        >
          <source src={sample} type="video/mp4" />
        </video>
      </header>
      <div className="h-44"></div>
      <ContentContainer>
        <p className="">
          We are a dedicated team at Relay for Life, committed to supporting
          cancer research, raising awareness, and honoring those affected by
          cancer. Through fundraising events, community outreach, and
          participation in Relay for Life events, we strive to contribute to
          cancer research efforts and provide support to cancer patients and
          survivors. Our team members come from diverse backgrounds and are
          driven by a shared determination to make a positive impact in the
          fight against cancer. Join us as we continue our journey to fight
          against cancer, celebrate survivorship, and honor the memory of those
          we've lost. Together, we can make a difference and bring hope to those
          affected by cancer.
        </p>
      </ContentContainer>
    </div>
  );
}
