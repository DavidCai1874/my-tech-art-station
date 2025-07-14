import treeImg from './01_home_main_tree.jpg';

export default function Banner() {
  return (
    <div className="relative w-screen h-[70vh] overflow-hidden">
      <img src={treeImg} alt="Welcome" className="block w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center translate-y-[-25px]">
          <div className="text-9xl font-bold text-white mb-4">Welcome!</div>
          <div className="text-6xl font-semibold text-gray-100"> I'm David, a tech art!</div>
        </div>
      </div>
    </div>
  );
}