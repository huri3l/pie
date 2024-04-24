import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { DownloadButton } from "~/app/gallery/_components/download-button";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) redirect("/gallery/not-found");

  const image = await getImage(idAsNumber);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center">
        <div>
          <strong>{image.name}</strong>
        </div>
        <div className="flex items-center gap-4 p-2">
          <DownloadButton url={image.url} name={image.name} />
          <form
            action={async () => {
              "use server";
              await deleteImage(idAsNumber);
            }}
          >
            <Button
              type="submit"
              variant="destructive"
              className="flex items-center gap-2"
            >
              <Trash2 />
              <span>Delete</span>
            </Button>
          </form>
        </div>
      </div>
      <div className="mx-auto flex flex-shrink items-center justify-center">
        {/* eslint-disable-next-line */}
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
    </div>
  );
}
