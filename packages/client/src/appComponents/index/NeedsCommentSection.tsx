import Button from "@/stories/common/Button/Button";
import ShowMoreButton from "./ShowMoreButton";

const COMMENT_LIST = ["일본어 회화 강의도 필요해요~", "ISO 자격증이요"];

export default function NeedsCommentSection() {
  const showCommentList = COMMENT_LIST.length > 0;

  return (
    <div className="mt-60">
      <section className="text-white bg-geekblue-6 py-60 px-24">
        <div className="flex flex-col justify-center items-center">
          <h2 className="heading6-b">필요한 강의가 없나요?</h2>

          <h4 className="mt-8 body2-r text-center whitespace-pre-line">
            {
              "원하는 강의를 댓글로 남겨주시면\n아끼미가 합리적인 가격으로 가져올게요!"
            }
          </h4>
        </div>

        <div className="mt-60 flex flex-col gap-y-8">
          <p className="caption-r text-center w-full">
            다른 분들께서 남겨주신 필요한 강의 목록이예요.
          </p>

          {showCommentList ? (
            COMMENT_LIST.map((comment, index) => {
              return (
                <Button
                  key={index}
                  className="min-w-full bg-white-20 text-white"
                  theme="tertiary-white"
                  size="xl"
                >
                  {comment}
                </Button>
              );
            })
          ) : (
            <Button
              className="min-w-full bg-white-20 text-white"
              theme="tertiary-white"
              size="xl"
            >
              {"첫 댓글을 작성해보세요"}
            </Button>
          )}

          <Button className="min-w-full" theme="tertiary-white" size="xl">
            저는 다른 강의가 필요해요!
          </Button>
        </div>
      </section>

      <ShowMoreButton href="/votes" />
    </div>
  );
}
