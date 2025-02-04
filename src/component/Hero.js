import styled from "styled-components";
const Hero = () => {
  return (
    <Section className="small-container lg:container lg:flex lg:justify-between text-white mt-28 lg:mt-44">
      <div className=" text-center lg:w-[40rem]">
        <h3 className="text-2xl pb-10 lg:pb-2 tracking-wider top-wording">
          So, you want to travel to{" "}
        </h3>
        <h1 className="text-9xl text-home ">SPACE</h1>
        <p className="pt-10 px-[20%] text-sm md:pt-9 leading-loose">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="pt-44 lg:pt-14 lg:hover:bg-[#d0d6f976] flex justify-center lg:block lg:px-14 lg:py-10 rounded-full ease-in-out duration-300">
        <p className="text-home bg-white text-black w-fit px-32 py-40 lg:py-20 lg:px-12 rounded-full text-3xl">
          EXPLORE
        </p>
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  .element {
  }
`;
