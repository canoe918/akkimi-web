type MyMenuBlock = {
  title: string;
  content?: string;
  icon?: JSX.Element;
};

export function MyMenuBlock({ title, content, icon }: MyMenuBlock) {
  return (
    <div className="w-full px-24 py-20 flex justify-between text-blue-gray-700 rounded-lg bg-blue-gray-50 subhead2-m">
      <span>{title}</span>

      <span className="flex gap-x-12">
        <span className="text-blue-gray-900">{content}</span>
        <span>{icon}</span>
      </span>
    </div>
  );
}
