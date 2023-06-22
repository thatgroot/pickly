export default function PickleNomics() {
  return (
    <div
      id="tokenomics"
      className="flex px-[144px]  flex-col justify-center items-center relative gap-20 py-32 bg-[#dffe71]"
    >
      <img
        src={"/parachot.png"}
        className="w-[96px] sm:w-[124px] md:w-[144px] lg:w-[240px] xl:w-[324px] 2xl:w-[392px] absolute left-10 lg:left-16 top-8"
      />
      <img
        src="/first-futility-token.png"
        className="w-[108px] sm:w-[144px] md:w-[172px]  lg:w-[240px] xl:w-[324px] 2xl:w-[392px] absolute right-8 lg:right-16 top-8"
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
        <img
          src={"/noharm.png"}
          className="w-[375px] sm:w-full h-max max-w-[1510px]"
        />

        <img
          src={"/trillion.png"}
          className="w-[375px] sm:w-full  h-max max-w-5xl"
        />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3  2xl:flex justify-center w-full xl:flex gap-6">
        <img
          src={"/lp.png"}
          className="h-auto w-full sm:w-auto sm:h-[96px] md:h-[68px] xl:h-[64px] 2xl:h-[84px]"
        />
        <img
          src={"/nftholders.png"}
          className="h-auto w-full sm:w-auto sm:h-[96px] md:h-[68px] xl:h-[64px] 2xl:h-[84px]"
        />
        <img
          src={"/cexlp.png"}
          className="h-auto w-full sm:w-auto sm:h-[96px] md:h-[68px] xl:h-[64px] 2xl:h-[84px]"
        />
        <img
          src={"/promotion.png"}
          className="h-auto w-full sm:w-auto sm:h-[96px] md:h-[68px] xl:h-[64px] 2xl:h-[84px]"
        />
      </div>
    </div>
  );
}
