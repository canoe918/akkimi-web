import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main>
      <Menu
        title={{
          text: "카테고리명",
          center: true,
        }}
        showBackButton
      />
      <Footer />
    </main>
  );
}
