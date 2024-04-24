"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../app/_components/upload-button";
import Logo from "~/components/assets/logo";
import { Button } from "~/components/ui/button";
import { GanttChart, Image as ImageIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const isGallery = pathname === "/gallery";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="mb-12 flex justify-between border-b py-2">
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
            (!isGallery ? (
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
        {!isGallery && (
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
};
