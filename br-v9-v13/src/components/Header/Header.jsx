import Navbar from "../Navbar/Navbar";
function Header() {
  return (
    <header className="w-full h-28 flex flex-row bg-blue-600 items-center justify-around">
      <h1 className="text-5xl text-white">Header</h1>
      <Navbar />
    </header>
  );
}
export default Header;
