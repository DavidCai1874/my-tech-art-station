import treeImg from './01_home_main_tree.jpg';

export default function Banner() {
  return (
    <div className="relative w-screen h-[70vh] overflow-hidden">
      <img src={treeImg} alt="Welcome" className="block w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Welcome!</h1>
      </div>
    </div>
  );
}