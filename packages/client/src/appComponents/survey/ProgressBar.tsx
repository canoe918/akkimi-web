interface ProgressBarProps {
  current: number;
  start?: number;
  end?: number;
}

export default function ProgressBar({
  current,
  start = 0,
  end = 100,
}: ProgressBarProps) {
  const currentWidthPercent = (current / (end - start)) * 100;

  return (
    <div className="relative w-full h-6 bg-blue-gray-200">
      <div
        className="absolute top-0 left-0 h-full transition-all bg-geekblue-6"
        style={{ width: `${currentWidthPercent}%` }}
      />
    </div>
  );
}
