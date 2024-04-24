import { redirect } from "next/navigation";
import ImageView from "~/components/image-view";

const ImgPage = ({ params: { id: photoId } }: { params: { id: string } }) => {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) redirect("/gallery/not-found");

  return <ImageView id={idAsNumber} />;
};

export default ImgPage;
