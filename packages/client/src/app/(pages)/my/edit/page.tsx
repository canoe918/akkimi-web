import ProfileEdit from "@/appComponents/my/ProfileEdit";
import Footer from "@/stories/common/Footer/Footer";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main>
      <Menu
        showBackButton
        title={{
          text: "내 정보 수정",
          center: true,
        }}
      />

      <ProfileEdit />

      <Footer className="mt-36" />
    </main>
  );
}
