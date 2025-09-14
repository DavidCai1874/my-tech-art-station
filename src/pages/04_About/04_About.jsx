import orangeIcon from "./icon.png";

export default function About() {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      {/* pfp */}
      <img
        src={orangeIcon}
        alt="I'm an orange"
        className="w-32 h-32 rounded-full mb-4 shadow-lg"
      />
      {/* Self-introduction */}
      <div className="text-center text-lg">
        <p>Hi, I'm David. But more importantly...</p>
        <p className="font-bold text-orange-500 mt-2">I'm an orange.</p>
        <p className="mt-4 text-gray-600">
          I solve tech problems. If you need help, just dm me on discord! (for now)
        </p>
      </div>
    </div>
  );
}