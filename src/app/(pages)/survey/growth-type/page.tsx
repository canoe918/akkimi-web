import GrowthTypeSurveySection from "@/appComponents/survey/GrowthTypeSurveySection";
import { BASIC_MENU_ITEMS } from "@/ilbs/const/menu.const";
import Menu from "@/stories/common/Menu/Menu";

export default function Page() {
  return (
    <main className="flex flex-col w-full h-[100vh]">
      <Menu title={{ text: "아끼미", center: true }} items={BASIC_MENU_ITEMS} />

      <GrowthTypeSurveySection />
    </main>
  );
}
