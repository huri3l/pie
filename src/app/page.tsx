import { Button } from "~/components/ui/button";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import DecorativeBorder from "~/components/assets/decorative-border";
import Link from "next/link";
import DecorativeCircles from "~/components/assets/decorative-circles";
import DecorativeBlob from "~/components/assets/decorative-blob";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { type ComponentProps } from "react";

const HomePage = () => {
  return (
    <div className="space-y-8 font-serif">
      <div className="space-y-4">
        <h1 className="mx-auto text-center text-3xl font-bold sm:w-[33rem] sm:text-6xl">
          A Place For Your Art
        </h1>
        <Description className="text-center sm:hidden" />
      </div>
      <Content />
      <Cta />
      <Footer />
    </div>
  );
};

export default HomePage;

const Content = () => {
  return (
    <div className="flex flex-row-reverse gap-4 sm:flex-row sm:gap-8">
      <Description className="mt-32 hidden flex-1 text-right text-xl sm:flex" />
      <div className="flex flex-1 flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <DecorativeBorder className="hidden h-[400px] duration-1000 animate-in fade-in sm:flex sm:h-[500px] md:h-[582px]" />
          <Image
            src="/statue.png"
            alt="Michelangelo statue"
            width={320}
            height={320}
            className="aspect-auto rounded-full duration-1000 animate-in fade-in sm:absolute sm:w-[280px] md:w-[320px]"
          />
          <DecorativeBlob className="absolute bottom-0 left-0 -z-20 blur-3xl" />
        </div>
      </div>
      <div className="items-around flex flex-1 flex-col-reverse justify-around sm:flex-col">
        <DecorativeCircles className="ml-auto sm:ml-0 sm:mt-32" />
        <p className="mt-8 text-right sm:mb-48 sm:mt-auto sm:text-left sm:text-xl">
          A family photo, a drawing - any image you want to store, you can use
          Pie.
        </p>
      </div>
    </div>
  );
};

const Description = ({ className, ...props }: ComponentProps<"p">) => {
  return (
    <p className={className} {...props}>
      Personal Images Easier. A safe place for you to save your images.
    </p>
  );
};

const Cta = () => {
  return (
    <div className="mx-auto w-fit">
      <SignedOut>
        <SignInButton>
          <Button className="mx-auto w-fit gap-2 bg-green-800 font-sans duration-300 animate-in fade-in hover:bg-green-800/80">
            <Sparkle />
            <span>Start now</span>
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/gallery">
          <Button className="mx-auto w-fit gap-2 bg-green-800 font-sans duration-300 animate-in fade-in hover:bg-green-800/80">
            <Sparkle />
            <span>Start now</span>
          </Button>
        </Link>
      </SignedIn>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-1 right-2 text-neutral-500">
      <p>
        Developed with love by
        <Link href="https://huriel.com.br/en-us" target="_blank">
          {" "}
          Huriel
        </Link>
      </p>
    </footer>
  );
};
