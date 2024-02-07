import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center min-h-16 py-2 px-8 justify-between z-50 bg-gray-50/5 border-b-[0.5px] backdrop-blur border-black/40 text-gray-400">
      <Link className="uppercase font-bold text-md items-center" href="/">
        Sushi Store
      </Link>

      <div className="flex flex-center items-center justify-center gap-10">
        <Link className="uppercase font-bold text-md " href="/">
          Cart
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="uppercase rounded-md border-2 border-gray-500 px-3 py-2 ">
              Fazer Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
