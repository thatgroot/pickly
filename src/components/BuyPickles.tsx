export function BuyPickles() {
  return (
    <div
      id="buy"
      className="flex flex-col justify-center items-center h-full  py-16 xl:py-28 w-full gap-4 xl:gap-16  bg-[#212121]"
    >
      <div className="flex flex-col justify-start items-center  gap-3 xl:gap-[62px]">
        <div className="flex flex-col justify-start items-center  relative gap-2  text-xl xl:text-[100px]">
          <p className="m-0 xl:leading-[72px] font-bold text-left text-[#d4fa57]">
            Chop The Chatter,
          </p>
          <p className="m-0 xl:leading-[72px] font-bold text-left text-[#d4fa57]">
            How Do I Buy Pickly?
          </p>
        </div>
        <div className="flex flex-col justify-start items-center  relative  text-lg xl:text-[40px]">
          <p className="m-0 xl:leading-[44px] text-left text-[#f2f2f2]">
            Embrace the pickalicious journey with $PICKLY
          </p>
          <p className="m-0 xl:leading-[44px] text-left text-[#f2f2f2]">
            token and follow these flavorful steps:
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center xl:gap-28 md:gap-6">
        <div className="flex justify-start items-start  xl:gap-28 flex-col xl:flex-row">
          <div className="flex justify-start flex-col items-center md:items-start md:flex-row gap-12">
            <div className="flex justify-center items-center  p-3 xl:p-0 xl:w-[118px]  xl:h-[109px] relative rounded-[7px] bg-[#d2ff43]">
              <p className="m-0  xl:text-[50px] font-bold text-left text-[#313131]">
                01
              </p>
            </div>
            <div className="flex flex-col justify-start items-start  relative gap-2 px-6 lg:px-0">
              <p className="m-0 text-lg xl:text-[35px] font-bold text-left text-[#dffe71]">
                Create a Wallet
              </p>
              <div className="flex flex-col justify-start items-start  relative gap-4  xl:w-[425px] text-lg xl:text-[30px]">
                <p className="m-0 xl:leading-[42px] text-left text-[#f2f2f2]">
                  Get ready by downloading Metamask or your preferred wallet
                  from the app store or Google Play Store. If you’re on desktop,
                  simply grab the Google Chrome extension from metamask.io.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start flex-col items-center md:items-start md:flex-row gap-12">
            <div className="flex justify-center items-center  p-3 xl:p-0 xl:w-[118px]  xl:h-[109px] relative rounded-[7px] bg-[#d2ff43]">
              <p className="m-0 xl:text-[50px] font-bold text-left text-[#313131]">
                02
              </p>
            </div>
            <div className="flex flex-col justify-start items-start  relative gap-2 px-6 lg:px-0">
              <p className="m-0 text-lg xl:text-[35px] font-bold text-left text-[#dffe71]">
                Gather Some ETH
              </p>
              <div className="flex flex-col justify-start items-start  relative gap-4  xl:w-[425px] text-lg xl:text-[30px]">
                <p className="m-0 xl:leading-[42px] text-left text-[#f2f2f2]">
                  To indulge in $PICKLY, make sure you have some ETH in your
                  wallet. You can acquire ETH directly on Metamask, transfer
                  from another wallet, or purchase it on another exchange and
                  send it to your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start  md:gap-28 flex-col xl:flex-row">
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row  gap-12">
          <div className="flex justify-center items-center p-3 xl:p-0   xl:w-[118px] xl:h-[109px] relative rounded-[7px] bg-[#d2ff43]">
              <p className="m-0 xl:text-[50px] font-bold text-left text-[#313131]">
                03
              </p>
            </div>
            <div className="flex flex-col justify-start items-start  relative gap-2 px-6 lg:px-0">
              <p className="m-0  text-lg xl:text-[35px] font-bold text-center text-left text-[#dffe71]">
                Visit Uniswap
              </p>
              <div className="flex flex-col justify-start items-start  relative gap-4  xl:w-[425px] text-lg xl:text-[30px]">
                <p className="m-0 text-lg xl:leading-[42px] text-left text-[#f2f2f2]">
                  Connect with the Uniswap platform, the hub of pickalicious
                  possibilities. Open app.uniswap.org in Google Chrome or
                  through the browser within your Metamask app. Connect your
                  wallet and get ready for the pickle party. Alternatively, use
                  the embedded.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:items-start flex-col md:flex-row w-full  md:w-[556px] gap-12">
          <div className="flex justify-center items-center p-3 xl:p-0   xl:w-[118px] xl:h-[109px] relative rounded-[7px] bg-[#d2ff43]">
              <p className="m-0 xl:text-[50px] font-bold text-left text-[#313131]">
                04
              </p>
            </div>
            <div className="flex flex-col justify-start items-start  relative gap-2 px-6 lg:px-0">
              <p className="m-0 xl:text-[35px] font-bold text-start md:text-left text-[#dffe71]">
                Swap ETH for $PICKLY
              </p>
              <div className="flex flex-col justify-start items-start  relative gap-4  xl:w-[425px] text-lg xl:text-[30px]">
                <p className="m-0 xl:leading-[44px] text-left text-[#f2f2f2]">
                  It’s time to savor the flavor! Swap your ETH for $PICKLY. As
                  we proudly announce, we have ZERO taxes, so you can enjoy the
                  transaction without fretting over specific slippage
                  requirements. However, during moments of market volatility,
                  you may need to adjust the slippage settings accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
