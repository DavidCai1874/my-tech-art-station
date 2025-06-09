import treeImg from './01_home_main_tree.jpg';

export default function Banner() {
  return (
    <div className="relative w-screen h-[70vh] overflow-hidden">
      <img src={treeImg} alt="Welcome" className="block w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-7xl font-bold text-white translate-y-[-25px]">
          Welcome!
        </div>
      </div>
    </div>
  );
}