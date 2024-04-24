"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "~/components/ui/dialog";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
