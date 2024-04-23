import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { getMyImages } from "~/server/queries";
import { DownloadButton } from "./_components/download-button";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative block drop-shadow-xl transition duration-300 hover:scale-105"
        >
          <Link href={`/gallery/img/${image.id}`}>
            <Image
              src={image.url}
              width={250}
              height={250}
              className="h-auto w-full rounded-2xl"
              alt={image.name}
            />
          </Link>
          <div className="fixed bottom-0 left-0 flex w-full items-center justify-between rounded-b-2xl bg-black/25 p-2.5 text-sm font-semibold text-white">
            <Link href={`/gallery/img/${image.id}`}>{image.name}</Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <DownloadButton url={image.url} name={image.name} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function GalleryPage() {
  return (
    <main>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div className="mt-12">
          <h1 className="mb-6 text-center font-serif text-4xl font-bold">
            Your gallery
          </h1>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
