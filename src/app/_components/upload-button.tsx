"use client";

import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <style>{"@keyframes spinner_AtaB{to{transform:rotate(360deg)}}"}</style>
      <path
        d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 19a8 8 0 118-8 8 8 0 01-8 8z"
        opacity={0.25}
      />
      <path
        d="M10.14 1.16a11 11 0 00-9 8.92A1.59 1.59 0 002.46 12a1.52 1.52 0 001.65-1.3 8 8 0 016.66-6.61A1.42 1.42 0 0012 2.69a1.57 1.57 0 00-1.86-1.53z"
        style={{
          transformOrigin: "center",
          animation: "spinner_AtaB .75s infinite linear",
        }}
      />
    </svg>
  );
}

export function SimpleUploadButton() {
  const router = useRouter();
  const posthog = usePostHog();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      posthog.capture("upload_begin");
      toast(
        <div className="flex items-center gap-2 text-white">
          <LoadingSpinner /> Uploading...
        </div>,
        {
          duration: 100000,
          id: "upload-begin",
        },
      );
    },
    onClientUploadComplete() {
      toast.dismiss("upload-begin");
      toast("Upload complete!");
      router.refresh();
    },
  });

  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer">
        <UploadIcon />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
}
