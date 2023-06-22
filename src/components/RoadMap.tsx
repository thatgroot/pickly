export function RoadMap() {
  return (
    <div
      id="roadmap"
      className="flex px-3 py-12  xl:py-[96px] xl:px-[144px]  flex-col justify-center items-center  relative overflow-hidden gap-2.5  bg-[#dffe71]"
    >
      <img src="/compass.png" alt="" className="absolute top-20 -right-10" />

      <div className="flex flex-col justify-start items-center  relative gap-[130px] text-[30px]">
        <p className=" m-0 text-[56px] sm:text-[72px] lg:text-[96px] xl:text-[108px] 2xl:text-[150px]  font-bold text-left text-black">
          Roadmap
        </p>
        <div className="grid gird-cols-1 xl:grid-cols-3 justify-between w-max items-start">
          <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-start items-center  w-full gap-12">
              <img src={"/phase1.png"} />
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-8">
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Pickly.vip Site
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Tickle My Pickle NFTs
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Social Media Channels
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Pickly’s Tastebuds Official Telegram
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Pickly’s Pickalicious Meme Gallery
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Pickly’s Dilly Mail Newsletter
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Bespoke Partnerships (Profiles / Channels)
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Token Smart Contracts (ERC-20 / BSC-20)
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  CoinGecko / Coinmarketcap Listings
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  NFT Rewards Claiming Tool
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Token Stealth Launch (ERC-20 - Uniswap)
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  Entry Tier CEX Listings
                </p>
                <p className="leading-[32px] p-0  m-0 text-3xl font-bold text-black text-center">
                  1,000+ Holders
                </p>
              </div>
            </div>
            <img src="/vertical-divider.png" className="hidden md:block" />
          </div>
          <div className="flex justify-between w-full h-full">
            <div className="flex flex-col justify-start items-center  w-full  gap-12">
              <img src={"/phase2.png"} />
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-8">
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  Pickly Palooza Meme Battles
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  The Art Of The Dill eBook
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  Pickly Pong Minigame
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  Celebrity Partnership
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  New Futility Announced
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  Pickly Merch Store
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  10,000+holders
                </p>
                <p className="leading-[32px] m-0 p-0 text-3xl font-bold text-left text-black">
                  Mid Tier CEX Listings
                </p>
              </div>
            </div>
            <img src="/vertical-divider.png" className="hidden md:block" />
          </div>

          <div className="flex flex-col justify-start items-center  relative gap-12 w-full h-full">
            <img src="/phase3.png" />
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-8">
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                BSC Token Launch
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                Pick-a-link BSC Bridge
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                BSC NFTs
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                New Celebrity Partnership
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                New Futility Deployed (TBA Phase 2)
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                Top Tier Exchange Listings
              </p>
              <p className="leading-[42px] m-0 p-0 text-3xl font-bold text-left text-black">
                50,000+ holders
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="/log.png" className="absolute -left-20 bottom-20" />
    </div>
  );
}
