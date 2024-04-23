import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 [&>a:not(:first-child)]:mt-5 lg:[&>a:not(:first-child)]:mt-8">
      {images.map((image) => (
        <Link
          href={`/gallery/img/${image.id}`}
          key={image.id}
          className="relative block drop-shadow-xl transition duration-300 hover:scale-105"
        >
          <Image
            src={image.url}
            width={250}
            height={250}
            className="h-auto w-full rounded-2xl"
            alt={image.name}
          />
          <div className="fixed bottom-0 left-0 w-full rounded-b-2xl bg-black/25 p-2.5 text-sm font-semibold text-white">
            {image.name}
          </div>
        </Link>
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
          <h1 className="mb-6 text-center font-serif text-4xl">Your gallery</h1>
          <Images />
        </div>
      </SignedIn>
    </main>
  );
}
