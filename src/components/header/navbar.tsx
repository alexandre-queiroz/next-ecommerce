import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center min-h-16 py-2 px-8 justify-between z-50 bg-gray-50/5 border-b-[0.5px] backdrop-blur border-black/40 text-gray-400">
      <Link className="uppercase font-bold text-md items-center" href="/">
        Sushi Store
      </Link>
    </nav>
  );
}
