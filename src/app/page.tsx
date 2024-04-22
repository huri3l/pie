import { Button } from "~/components/ui/button";
import { Sparkle } from "lucide-react";
import Image from "next/image";

export default async function HomePage() {
  return (
    <div>
      <h1>A Place For Your Art</h1>
      <div className="flex">
        <p>Personal Images Easier. A safe place for you to save your images.</p>
        <div>
          <Image
            src="/statue.png"
            width={191}
            height={308}
            alt="Michelangelo statue"
          />
          <Button>
            <Sparkle />
            <span>Start now</span>
          </Button>
        </div>
        <p>
          A family photo, a drawing - any image you want to store, you can use
          Pie.
        </p>
      </div>
      <footer>
        <p>
          Developed with love by
          <a href="https://huriel.com.br/en-us">Huriel</a>
        </p>
      </footer>
    </div>
  );
}
