"use client";

import { ImageDown } from "lucide-react";
import { Button } from "~/components/ui/button";

interface DownloadButtonProps {
  url: string;
  name: string;
}

export function DownloadButton({ url, name }: DownloadButtonProps) {
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
      className="duration-300 animate-in fade-in"
      onClick={downloadImage}
    >
      <ImageDown />
      <span className="sr-only">Download</span>
    </Button>
  );
}
