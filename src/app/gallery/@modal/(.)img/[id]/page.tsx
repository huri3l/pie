import { redirect } from "next/navigation";
import { Modal } from "./modal";
import ImageView from "~/components/image-view";

const ImgModal = ({ params: { id: photoId } }: { params: { id: string } }) => {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) redirect("/gallery/not-found");

  return (
    <Modal>
      <ImageView id={idAsNumber} />
    </Modal>
  );
};

export default ImgModal;
