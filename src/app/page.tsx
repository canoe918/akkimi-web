import Image from "next/image";

import CategoryGrid from "@/appComponents/index/CategoryGrid";
import MainBanner from "@/appComponents/index/MainBanner";
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

        <section className="flex flex-col gap-y-12">
          <h3 className="px-24">새로 올라왔어요!</h3>

          <div className="flex px-20 pb-10 overflow-x-auto gap-x-12">
            {[
              {
                id: 1,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 2,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 3,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 4,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 5,
                title: "어학",
                description: "비즈니스 영어",
              },
            ].map(({ id, title, description }) => {
              return (
                <div
                  key={id}
                  className="inline-block bg-gray-300 min-w-[24rem] w-[24rem]"
                >
                  <Image src="" className="aspect-[2/1]" alt={title} />

                  <div className="p-12">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <span className="flex justify-end w-full px-20">
            <button className="w-fit">자세히보기</button>
          </span>
        </section>

        <section className="flex flex-col gap-y-12">
          <h3 className="px-24">할인이 시작된 강의</h3>

          <div className="flex flex-col px-20 pb-10 gap-y-12">
            {[
              {
                id: 1,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 2,
                title: "어학",
                description: "비즈니스 영어",
              },
              {
                id: 3,
                title: "어학",
                description: "비즈니스 영어",
              },
            ].map(({ id, title, description }) => {
              return (
                <div key={id} className="flex w-full bg-blue-200 gap-x-16">
                  <Image
                    src=""
                    className="max-w-[12rem] w-full aspect-square"
                    alt={title}
                  />

                  <div className="flex flex-col justify-between w-full p-12">
                    <div className="flex flex-col gap-y-6">
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>

                    <div>
                      <div>이미지 N명 모임</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <span className="flex justify-end w-full px-24">
            <button className="w-fit">자세히보기</button>
          </span>
        </section>

        <Footer />
      </main>

      <EventPopup />
    </>
  );
}
