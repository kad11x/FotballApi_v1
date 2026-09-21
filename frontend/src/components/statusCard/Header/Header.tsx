import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left side */}
        <h1 className="text-2xl font-bold">
          {" "}
          <Link to="/">Football API </Link>{" "}
        </h1>

        {/* Right side */}
        <div>
          {/* Put buttons / status / navigation here */}
          <Link to="/userpage">AccountInfo</Link>
        </div>
      </div>
    </header>
  );
}
