"use client";

import Modal from "@/app/components/Modal";
import useFolderModal from "@/app/hooks/useFolderModal";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { FieldValues ,SubmitHandler,useForm} from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FolderModal = () => {
  const folderModal = useFolderModal()
  const router = useRouter()


  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/folder", data)
    .then(() => {
      router.refresh()
      folderModal.onClose()
      toast.success("Created new folder!")
    })
    .catch(() => toast.error("Something went wrong"))
  }

  useEffect(() => {
    if(folderModal.isOpen === true) {
      setValue("name", "", {shouldValidate: true})
    }
  },[folderModal.isOpen, setValue])

  return (
    <Modal isOpen={folderModal.isOpen} onClose={folderModal.onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5 font-bold text-2xl">New Folder</h2>
        <Input
        id="name"
        register={register}
        errors={errors}
        required
        placeholder="Name Folder"
        />
        <div className="flex items-center justify-end mt-5 gap-x-3">
            <Button onClick={folderModal.onClose} type="button">CANCEL</Button>
            <Button type="submit">OK</Button>
        </div>
      </form>
    </Modal>
  );
};
export default FolderModal;
