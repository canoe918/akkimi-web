export function Skeleton() {
  return (
    <div className="flex flex-col w-full min-w-full gap-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="flex w-full gap-x-4">
          <div className="w-full bg-gray-300 aspect-square animate-pulse" />
          <div className="w-full bg-gray-300 aspect-square animate-pulse" />
        </div>
      ))}
    </div>
  );
}
