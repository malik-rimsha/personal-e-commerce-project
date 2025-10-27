import Categories from "@/components/Categories";
import Hero from "@/components/hero";
import HotProduct from "@/components/hotProducts";
import OurProduct from "@/components/ourProduct";
import SinglePagePromotion from "@/components/SinglePagePromotion";


export default function Home() {
  return (
<div>
  <Hero/>
 
  <SinglePagePromotion/>
  <Categories/>
  <HotProduct/>
  <OurProduct/>
</div>  );
}
