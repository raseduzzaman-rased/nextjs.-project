import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import ProductsPage from "./products/page";

export default function Home() {
  return (
  <div>
    <h1>
     <HeroSlider></HeroSlider>
     <ProductsPage></ProductsPage>
    </h1>
  </div>
  );
}
