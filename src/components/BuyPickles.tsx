export function BuyPickles() {
  return (
    <div
      id="buy"
      className="flex flex-col justify-center items-center h-full md:px-[144px]   py-16 xl:py-28  gap-16  bg-[#212121]"
    >
      <div className="flex flex-col justify-start items-center  gap-[62px]">
        <div className="flex flex-col justify-start items-center  relative gap-2  text-[100px]">
          <p className="m-0 leading-[72px] font-bold text-left text-[#d4fa57]">
            Chop The Chatter,
          </p>
          <p className="m-0 leading-[72px] font-bold text-left text-[#d4fa57]">
            How Do I Buy Pickly?
          </p>
        </div>
        <div className="flex flex-col justify-start items-center  relative  text-[40px]">
          <p className="m-0 leading-[44px] text-left text-[#f2f2f2]">
            Embrace the pickalicious journey with $PICKLY
          </p>
          <p className="m-0 leading-[44px] text-left text-[#f2f2f2]">
            token and follow these flavorful steps:
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 items-center 2xl:grid-cols-2  gap-6 md:gap-6">
        <div className="w-fit mx-auto my-0 flex flex-col md:flex-row justify-start  items-center md:items-start  gap-12">
          <div className="flex justify-center items-center  w-[118px] h-[109px] relative rounded-[7px] bg-[#d2ff43]">
            <p className="m-0 text-[50px] font-bold text-left text-[#313131]">
              01
            </p>
          </div>
          <div className="flex flex-col justify-start items-start  relative gap-2">
            <p className="m-0 text-[35px] font-bold text-left text-[#dffe71]">
              Create a Wallet
            </p>
            <div className="flex flex-col justify-start items-start  relative gap-4  w-[425px] text-[30px]">
              <p className="m-0 leading-[42px] text-left text-[#f2f2f2]">
                Get ready by downloading Metamask or your preferred wallet from
                the app store or Google Play Store. If you’re on desktop, simply
                grab the Google Chrome extension from metamask.io.
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto my-0 flex flex-col md:flex-row justify-start  items-center md:items-start  gap-12">
          <div className="flex justify-center items-center  w-[118px] h-[109px] relative rounded-[7px] bg-[#d2ff43]">
            <p className="m-0 text-[50px] font-bold text-left text-[#313131]">
              02
            </p>
          </div>
          <div className="flex flex-col justify-start items-start  relative gap-2">
            <p className="m-0 text-[35px] font-bold text-left text-[#dffe71]">
              Gather Some ETH
            </p>
            <div className="flex flex-col justify-start items-start  relative gap-4  w-[425px] text-[30px]">
              <p className="m-0 leading-[42px] text-left text-[#f2f2f2]">
                To indulge in $PICKLY, make sure you have some ETH in your
                wallet. You can acquire ETH directly on Metamask, transfer from
                another wallet, or purchase it on another exchange and send it
                to your wallet.
              </p>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto my-0 flex flex-col md:flex-row justify-start  items-center md:items-start  gap-12">
          <div className="flex justify-center items-center  w-[118px] h-[109px] relative rounded-[7px] bg-[#d2ff43]">
            <p className="m-0 text-[50px] font-bold text-left text-[#313131]">
              03
            </p>
          </div>
          <div className="flex justify-start items-center md:items-start flex-col relative gap-2">
            <p className="m-0  text-[35px] font-bold text-center md:text-left text-[#dffe71]">
              Visit Uniswap
            </p>
            <div className="flex flex-col justify-start items-start  relative w-[400px] gap-4 text-[30px]">
              <p className="m-0 leading-[42px] text-left text-[#f2f2f2]">
                Connect with the Uniswap platform, the hub of pickalicious
                possibilities. Open app.uniswap.org in Google Chrome or through
                the browser within your Metamask app. Connect your wallet and
                get ready for the pickle party. Alternatively, use the embedded.
              </p>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto my-0 flex flex-col md:flex-row justify-start  items-center md:items-start  gap-12">
          <div className="flex justify-center items-center  w-[118px] h-[109px] relative rounded-[7px] bg-[#d2ff43]">
            <p className="m-0 text-[50px] font-bold text-left text-[#313131]">
              04
            </p>
          </div>
          <div className="flex flex-col justify-start items-start  relative gap-2">
            <p className="m-0 text-[35px] font-bold text-start md:text-left text-[#dffe71]">
              Swap ETH for $PICKLY
            </p>
            <div className="flex flex-col justify-start items-start  relative w-[400px] gap-4 text-[30px]">
              <p className="m-0 leading-[44px] text-left text-[#f2f2f2]">
                It’s time to savor the flavor! Swap your ETH for $PICKLY. As we
                proudly announce, we have ZERO taxes, so you can enjoy the
                transaction without fretting over specific slippage
                requirements. However, during moments of market volatility, you
                may need to adjust the slippage settings accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
