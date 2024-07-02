import CategoryGrid from "@/appComponents/index/CategoryGrid";
import CategoryItemListView from "@/appComponents/index/CategoryItemListView";
import DiscountComingSoonListCard from "@/appComponents/index/DiscountComingSoonListCard";
import DiscountListCard from "@/appComponents/index/DiscountListCard";
import MainBanner from "@/appComponents/index/MainBanner";
import NewListCard from "@/appComponents/index/NewListCard";
import Space from "@/stories/Space/Space";
import Footer from "@/stories/common/Footer/Footer";
import NavigationBar from "@/stories/common/NavigationBar/NavigationBar";
import EventPopup from "@/stories/common/Popup/EventPopup";

export default async function Home() {
  return (
    <>
      <main className="flex flex-col w-full h-full">
        <NavigationBar />

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
