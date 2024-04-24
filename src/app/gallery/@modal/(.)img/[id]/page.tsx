import { redirect } from "next/navigation";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function ImgModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) redirect("/gallery/not-found");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
