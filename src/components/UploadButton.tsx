"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"

import UploadDropzone from "./UploadDropzone"

function UploadButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={(v) => {
        if(!v) {
          setIsOpen(v);
        }
      }}>
        <DialogTrigger onClick={() => setIsOpen(true)} asChild>
          <Button>Upload PDF</Button>
        </DialogTrigger>
        <DialogContent>
          <UploadDropzone />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UploadButton