import { redirect } from "next/navigation";
import FullPageImageView from "~/components/full-image-page";

export default function ImgPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) redirect("/gallery/not-found");

  return <FullPageImageView id={idAsNumber} />;
}
