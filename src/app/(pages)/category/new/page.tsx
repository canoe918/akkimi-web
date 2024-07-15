import NewGoodsList from "@/appComponents/category/NewGoodsList";
import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main>
      <Menu
        title={{
          text: "새로 올라온 강의",
          center: true,
        }}
        showBackButton
      />

      <NewGoodsList />

      <Footer />
    </main>
  );
}
