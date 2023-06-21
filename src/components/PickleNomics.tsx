export default function PickleNomics() {
  return (
    <div
      id="tokenomics"
      className="flex flex-col justify-center items-center w-full relative gap-20 py-32 bg-[#dffe71]"
    >
      <img
        src={"/parachot.png"}
        className="w-[144px] lg:w-[240px] xl:w-[324px] 2xl:w-[392px] absolute left-10 lg:left-16 top-8"
      />
      <img
        src="/first-futility-token.png"
        className="w-[196px] lg:w-[240px] xl:w-[324px] 2xl:w-[392px] absolute right-8 lg:right-16 top-8"
      />

      <div className="flex flex-col justify-start gap-12 items-center w-min">
        <div className="flex flex-col justify-start items-center flex-grow relative gap-3">
          <p className="m-0 text-[48px] md:text-[72px] xl:text-[96px] 2xl:text-[150px] px-12 font-bold text-left text-black">
            Picklenomics
          </p>
        </div>

        <div className="flex flex-col justify-start items-center  relative">
          <p className="m-0 text-[40px] text-center text-[#272727]">
            We shamelessly copied Pepe’s tokenomics and made them even better by
            merging with some elements of Mong. With all the obscurity removed
            and a cool mechanism added, our project is designed to be a real
            dill for the community - crisp, refreshing, and always satisfying.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 justify-center">
        <div className="flex items-center justify-center relative px-20">
          <img src={"/noharm.png"} className="max-w-[80%]" />
        </div>

        <div className="flex items-center justify-center relative px-20">
          <img src={"/trillion.png"} className="max-w-[80%]" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <img src={"/lp.png"} className="max-w-[80%]" />
        <img src={"/nftholders.png"} className="max-w-[80%]" />
        <img src={"/cexlp.png"} className="max-w-[80%]" />
        <img src={"/promotion.png"} className="max-w-[80%]" />
      </div>
    </div>
  );
}
