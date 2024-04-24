import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import anaylitcsServerClient from "./analytics";

export const getMyImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
};

export const getImage = async (id: number) => {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });
  if (!image) {
    redirect("/gallery/not-found");
  }

  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
};

export const deleteImage = async (id: number) => {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  anaylitcsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });

  redirect("/gallery");
};
