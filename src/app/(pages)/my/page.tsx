import MyHistory from "@/appComponents/my/MyHistory";
import MyProfile from "@/appComponents/my/MyProfile";
import MySettings from "@/appComponents/my/MySettings";
import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main>
      <Menu
        showBackButton
        title={{
          text: "내 정보",
          center: true,
        }}
      />

      <MyProfile />

      <MyHistory />

      <MySettings />

      <Footer className="mt-36" />
    </main>
  );
}
