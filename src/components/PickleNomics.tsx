export default function PickleNomics() {
  return (
    <div id="tokenomics" className="flex flex-col justify-center items-center w-full relative gap-6 xl:gap-20 py-32 bg-[#dffe71]">
      <img src="/parachot.png" className="w-[80px] lg:w-[298px] absolute left-8 sm:left-4 top-8" alt="Parachot" />
      <img src="/first-futility-token.png" className="w-[80px] lg::w-[320px] absolute right-8 sm:right-4 top-8" alt="First Futility Token" />

      <div className="flex flex-col justify-start gap-8 sm:gap-12 items-center w-full max-w-[800px]">
        <div className="flex flex-col justify-start items-center flex-grow relative gap-3">
          <p className="m-0 text-6xl lg:text-10xl px-6 sm:px-12 font-bold text-center text-black">Picklenomics</p>
        </div>

        <div className="flex flex-col justify-start items-center relative">
          <p className="m-0 text-lg lg:text-8xl text-center text-[#272727] px-6 sm:px-16">
            We shamelessly copied Pepe's tokenomics and made them even better by merging with some elements of Mong.
            With all the obscurity removed and a cool mechanism added, our project is designed to be a real dill for the community - crisp, refreshing, and always satisfying.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 xl:gap-6 justify-center w-full max-w-[800px]">
        <div className="flex items-center justify-center relative px-6 sm:px-20">
          <p className="text-[24px]  pt-2 lg:text-6xl xl:leading-[128px] m-0 xl:pt-14 font-bold text-center z-10 text-[#dffe71]">
            0% tax, no harm to your pockets
          </p>
          <img src="/no-harm.png" className="absolute top-0 left-0 right-0 bottom-0 w-full z-0" alt="No Harm" />
        </div>

        <div className="flex items-center justify-center relative px-6 sm:px-20">
          <img src="/420-trillion.png" className="absolute top-0 left-0 right-0 bottom-0 w-full -z-1" alt="420 Trillion Tokens" />
          <p className="text-[24px] pt-2 lg:text-6xl xl:leading-[100px] m-0 xl:pt-14 font-bold text-center z-10 text-[#dffe71]">
            420 Trillion Tokens
          </p>
        </div>
      </div>
    </div>
  );
}
