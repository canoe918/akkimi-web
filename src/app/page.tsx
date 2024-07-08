import CategoryGrid from "@/appComponents/index/CategoryGrid";
import CategoryItemListView from "@/appComponents/index/CategoryItemListView";
import DiscountComingSoonListCard from "@/appComponents/index/DiscountComingSoonListCard";
import DiscountListCard from "@/appComponents/index/DiscountListCard";
import MainBanner from "@/appComponents/index/MainBanner";
import NewListCard from "@/appComponents/index/NewListCard";
import { BASIC_MENU_ITEMS } from "@/ilbs/config/menu.config";
import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";
import EventPopup from "@/stories/common/Popup/EventPopup";
import Space from "@/stories/common/Space/Space";

export default async function Home() {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <Menu items={BASIC_MENU_ITEMS} />

        <MainBanner />

        <CategoryGrid />

        <NewListCard />

        <DiscountListCard />

        <DiscountComingSoonListCard />

        <CategoryItemListView />

        <Space className="h-60" />

        <Footer />
      </main>

      <EventPopup />
    </>
  );
}
