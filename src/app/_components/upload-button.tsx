"use client";
import { ImageUp, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { useUploadThing } from "~/utils/uploadthing";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    await $ut.startUpload(selectedFiles);
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

export const UploadButton = () => {
  const router = useRouter();
  const posthog = usePostHog();

  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      posthog.capture("upload_begin");
      toast(
        <div className="flex items-center gap-2">
          <LoaderCircle className="animate-spin" /> Uploading...
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
    onUploadError(error) {
      posthog.capture("upload_error", { error });
      toast.error("Upload failed");
    },
  });

  return (
    <Button variant="ghost" className="duration-300 animate-in fade-in">
      <label
        htmlFor="upload-button"
        className="flex cursor-pointer items-center gap-2"
      >
        <ImageUp className="w-4 md:w-6" />
        <span>Upload</span>
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </Button>
  );
};
