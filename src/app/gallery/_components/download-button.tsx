"use client";

import { ImageDown } from "lucide-react";
import { Button } from "~/components/ui/button";

interface DownloadButtonProps {
  url: string;
  name: string;
  iconOnly?: boolean;
}

export function DownloadButton({
  url,
  name,
  iconOnly = false,
}: DownloadButtonProps) {
  const downloadImage = async () => {
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        link.click();
      });
  };

  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 duration-300 animate-in fade-in"
      onClick={downloadImage}
    >
      <ImageDown />
      <span className={iconOnly ? "sr-only" : ""}>Download</span>
    </Button>
  );
}
