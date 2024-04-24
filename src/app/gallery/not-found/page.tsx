import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const NotFoundImagePage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-center font-serif text-4xl font-bold">
        This image does not exist
      </h1>
      <Link href="/gallery">
        <Button variant="outline" className="flex items-center gap-2">
          <ImageIcon />
          <span>Go to gallery</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundImagePage;
