import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "../app/_components/upload-button";
import Logo from "~/components/assets/logo";
import { Button } from "~/components/ui/button";
import { GanttChart, User } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between border-b py-2">
      <Logo />
      <div className="flex md:gap-4">
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
        <SignedOut>
          <SignInButton>
            <Button variant="ghost" className="flex gap-2 ">
              <User className="w-4 md:w-6" />
              <span>Login</span>
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
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
//           <SimpleUploadButton />
//           <UserButton />
//         </SignedIn>
//       </div>
//     </nav>
//   );
// }
