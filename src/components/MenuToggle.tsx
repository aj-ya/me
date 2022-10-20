import { Dispatch, SetStateAction, useState } from "react";
import { HiX, HiMenu, HiHome, HiUser } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { MdTextSnippet } from "react-icons/md";
const MenuToggle = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      className="aspect-square grid place-items-center w-[30px] h-[30px] shadow-lg md:hidden rounded-md border"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
    </button>
  );
};
export default MenuToggle;
