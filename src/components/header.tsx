"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../app/_components/upload-button";
import Logo from "~/components/assets/logo";
import { Button } from "~/components/ui/button";
import { GanttChart, Image as ImageIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="flex justify-between border-b py-2">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex md:gap-4">
        <SignedOut>
          <SignInButton>
            <Button
              variant="ghost"
              className="flex gap-2 duration-300 animate-in fade-in"
            >
              <User className="w-4 md:w-6" />
              <span>Login</span>
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {isClient &&
            (isHome ? (
              <Link href="/gallery">
                <Button
                  variant="ghost"
                  className="flex gap-2 duration-300 animate-in fade-in"
                >
                  <ImageIcon className="w-4 md:w-6" />
                  <span>Gallery</span>
                </Button>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <UploadButton />
                <UserButton />
              </div>
            ))}
        </SignedIn>
        {isHome && (
          <Button variant="ghost">
            <Link
              href="https://github.com/huri3l/pie"
              target="_blank"
              className="flex items-center gap-2"
            >
              <GanttChart className="w-4 md:w-6" />
              <span>Learn more</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
}

// export function TopNav() {
//   return (
//     <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
//       <div>Gallery</div>

//       <div className="flex flex-row items-center gap-4">
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UploadButton />
//           <UserButton />
//         </SignedIn>
//       </div>
//     </nav>
//   );
// }
