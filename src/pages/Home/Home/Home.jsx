import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import FlashSale from "../FlashSale/FlashSale";
import Gallery from "../Gallery/Gallery";
import Category from "../ShopByCategory/Category";

export default function Home() {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Gallery />
      <Category />
      <Contract />
    </div>
  );
}
