"use client";

function GlobalFallback() {
  const handlePageReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-y-10">
      알 수 없는 에러가 발생하였습니다.
      <br />
      잠시 후 다시 시도해주세요.
      <button
        className="px-4 py-2 bg-gray-100 border"
        onClick={handlePageReload}
      >
        페이지 새로고침
      </button>
    </div>
  );
}

export default GlobalFallback;
