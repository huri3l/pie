import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-8 font-serif">
      <h1 className="text-9xl font-bold">404</h1>

      <div className="flex flex-col items-center gap-4">
        <strong className="text-3xl">This page does not exist</strong>

        <Link href="/gallery">
          <Button variant="outline" className="flex items-center gap-2">
            <Home />
            <span>Home page</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
