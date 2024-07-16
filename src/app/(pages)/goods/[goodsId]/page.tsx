import GoodsDetailInformation from "@/appComponents/goods/GoodsDetailInformation";
import GoodsDetailIntroduction from "@/appComponents/goods/GoodsDetailIntroduction";
import GoodsNeedsGoalCard from "@/appComponents/goods/GoodsNeedsGoalCard";
import GoodsRecommendGridByGrowthType from "@/appComponents/goods/GoodsRecommendGridByGrowthType";

import GrowthTypeRecommend from "@/appComponents/goods/GrowthTypeRecommend";
import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main>
      <Menu showBackButton existHeight={false} />

      <GoodsDetailIntroduction />

      <GoodsNeedsGoalCard />

      <GoodsDetailInformation />

      <GrowthTypeRecommend />

      <GoodsRecommendGridByGrowthType />

      <Footer />
    </main>
  );
}
