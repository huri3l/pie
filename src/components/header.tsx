import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "../app/_components/upload-button";
import Logo from "~/components/assets/logo";
import { Button } from "~/components/ui/button";
import { GanttChart, User } from "lucide-react";

export function Header() {
  return (
    <header>
      <Logo />
      <div>
        <Button>
          <GanttChart />
          <span>Learn more</span>
        </Button>
        <Button>
          <User />
          <span>Login</span>
        </Button>
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
