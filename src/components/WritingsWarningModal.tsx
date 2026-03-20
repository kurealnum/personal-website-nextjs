"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WRITINGS_WARNING_MODAL_STORAGE_KEY = "writingsWarningModalClosed";

export default function WritingsWarningModal() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasClosedModal =
      window.localStorage.getItem(WRITINGS_WARNING_MODAL_STORAGE_KEY) ===
      "true";

    if (!hasClosedModal) {
      setOpen(true);
    }

    setReady(true);
  }, []);

  const closeModal = () => {
    window.localStorage.setItem(WRITINGS_WARNING_MODAL_STORAGE_KEY, "true");
    setOpen(false);
  };

  if (!ready || !open) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          closeModal();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>hey you</DialogTitle>
          <DialogDescription>
            Nothing here is representative of my employers or colleagues
            opinions. All pieces of writing are likely written without thorough
            proofreading. So seriously, don't take anything I say as fact or my
            actual belief or opinion.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            onClick={closeModal}
            variant={"outline"}
            className="hover:cursor-pointer"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
