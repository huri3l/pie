import { Button } from "~/components/ui/button";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import DecorativeBorder from "~/components/assets/decorative-border";
import Link from "next/link";
import DecorativeCircles from "~/components/assets/decorative-circles";
import DecorativeBlob from "~/components/assets/decorative-blob";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default async function HomePage() {
  return (
    <div className="mt-12 space-y-8 font-serif">
      <div className="space-y-4">
        <h1 className="mx-auto text-center text-3xl font-bold sm:w-[33rem] sm:text-6xl">
          A Place For Your Art
        </h1>
        <p className="text-center sm:hidden">
          Personal Images Easier. A safe place for you to save your images.
        </p>
      </div>
      <div className="flex flex-row-reverse gap-4 sm:flex-row sm:gap-8">
        <p className="mt-32 hidden text-right text-xl sm:flex">
          Personal Images Easier. A safe place for you to save your images.
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center">
            <DecorativeBorder className="hidden sm:flex sm:h-[582px]" />
            <Image
              src="/statue.png"
              alt="Michelangelo statue"
              width={320}
              height={320}
              className="w-[500px] rounded-full sm:absolute sm:w-[320px]"
            />
            <DecorativeBlob className="absolute bottom-0 left-0 -z-20 blur-3xl" />
          </div>
          <div className="hidden sm:flex">
            <SignedOut>
              <SignInButton>
                <Button className="w-fit gap-2 bg-green-800 font-sans hover:bg-green-800/80 sm:flex">
                  <Sparkle />
                  <span>Start now</span>
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/gallery">
                <Button className="w-fit gap-2 bg-green-800 font-sans hover:bg-green-800/80">
                  <Sparkle />
                  <span>Start now</span>
                </Button>
              </Link>
            </SignedIn>
          </div>
        </div>
        <div className="items-around flex flex-col-reverse justify-around sm:flex-col">
          <DecorativeCircles className="ml-auto sm:ml-0 sm:mt-32" />
          <p className="mt-8 text-right sm:mb-48 sm:mt-auto sm:text-left sm:text-xl">
            A family photo, a drawing - any image you want to store, you can use
            Pie.
          </p>
        </div>
      </div>
      <div className="mx-auto w-fit sm:hidden">
        <SignedOut>
          <SignInButton>
            <Button className="mx-auto w-fit gap-2 bg-green-800 font-sans hover:bg-green-800/80">
              <Sparkle />
              <span>Start now</span>
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/gallery">
            <Button className="mx-auto w-fit gap-2 bg-green-800 font-sans hover:bg-green-800/80">
              <Sparkle />
              <span>Start now</span>
            </Button>
          </Link>
        </SignedIn>
      </div>
      <footer className="fixed bottom-1 right-2 text-neutral-500">
        <p>
          Developed with love by
          <Link href="https://huriel.com.br/en-us" target="_blank">
            {" "}
            Huriel
          </Link>
        </p>
      </footer>
    </div>
  );
}
