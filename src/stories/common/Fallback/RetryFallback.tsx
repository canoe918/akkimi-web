function RetryFallback({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-4 my-4 gap-y-2">
      네트워크 에러가 발생하였습니다.
      <br />
      <button
        className="w-full px-4 py-2 border"
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        재시도
      </button>
    </div>
  );
}

export default RetryFallback;
