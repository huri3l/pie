import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/cacf7ae6-e1fc-448a-93dd-703e65570853-ja6c04.com_berserk-guts-drawing-22_1920x1080.jpg",
  "https://utfs.io/f/470b2572-b2f8-4c45-84d8-fd86c40b2809-4kj4dg.png",
  "https://utfs.io/f/c6ad6f33-0a55-4ff3-a69b-59040d76f91d-aowelu.jpeg",
  "https://utfs.io/f/a05ef311-ecdd-4a32-a9da-b608d9bbe58e-v3bk4i.png",
  "https://utfs.io/f/0ce796cf-c50f-4724-b650-e6dcbd91155a-xv5sev.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
