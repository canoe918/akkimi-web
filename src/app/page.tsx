import NavigationBar from "@/appComponents/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full gap-y-40">
      <NavigationBar />

      <div className="px-20">
        <div className="flex flex-col p-20 bg-gray-200 gap-y-12">
          <h1 className="heading3-b">
            모이면
            <br />
            싸진다!
          </h1>

          <p className="body3-r">
            아끼미의 강의는 수강생이 많아질수록 할인을 받을 수 있어요. 함께 들을
            친구들에게 공유하고 더 합리적인 가격으로 수강하세요!
          </p>
        </div>
      </div>

      <div className="px-20">
        <section className="grid grid-cols-2 gap-12">
          {["어학", "자격증", "창업", "어떤 강의가 필요하세요?"].map(
            (item, index) => {
              return (
                <div className="w-full px-20 py-32 bg-gray-200" key={index}>
                  <span className="flex justify-between">
                    {item}

                    <button>share</button>
                  </span>
                </div>
              );
            },
          )}
        </section>
      </div>

      <section className="flex flex-col gap-y-12">
        <h3 className="px-20">새로 올라왔어요!</h3>

        <div className="px-20 pb-10 overflow-x-auto gap-x-12">
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
        <h3 className="px-20">할인이 시작된 강의</h3>

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

        <span className="flex justify-end w-full px-20">
          <button className="w-fit">자세히보기</button>
        </span>
      </section>
    </main>
  );
}
