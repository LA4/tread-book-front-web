"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Modal from "@/components/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/provider/reduxProvider";
import { avatar, logout } from "@/store/userReducer";
import { useRouter } from "next/navigation";
import Icons from "@/components/svg/Icons";
import { Span } from "next/dist/trace";
const API_THREADBOOK = process.env.API_THREADBOOK;

export default function Profil() {
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const pictureRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleImageClick = () => {
    setOpenModal(!openModal);
  };
  const previewImage = () => {
    let imageToPreview = pictureRef.current?.files?.[0];
    if (imageToPreview) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageToPreview);
    }
  };
  const fetchProfilePicture = async () => {
    const imageTosend = pictureRef.current?.files?.[0];
    const formData = new FormData();
    if (imageTosend) {
      formData.append("profilePicture", imageTosend);
    }
    try {
      const response = await fetch(
        `thread-book-api.vercel.app/files/upload/${user.user_id}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const res2 = await fetch(
        `thread-book-api.vercel.app/files/${data.result}`
      );
      dispatch(avatar(res2.url));
      setOpenModal(!openModal);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-full my-[80px] items-center m-auto max-w-screen-sm ">
      {openModal && (
        <Modal>
          <form
            action={fetchProfilePicture}
            className="flex absolute w-screen bg-charcol left-0 top-[150px] flex-col items-center"
          >
            <span
              className="flex w-full p-1 my-4  justify-center"
              onClick={() => {
                setImagePreview(null);
                setOpenModal(!openModal);
              }}
            >
              <Icons name="cross"></Icons>
            </span>

            <input
              ref={pictureRef}
              onChange={previewImage}
              type="file"
              id="profile-picture"
              name="profile-picture"
              accept="image/jpg, image/png"
              className="flex bg-olive-light rounded-full"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt={pictureRef.current?.value}
                width={200}
                height={200}
                className="flex m-4"
              ></img>
            )}
            <button
              type="submit"
              className="flex rounded-full bg-olive-dark p-2 m-4"
            >
              add
            </button>
          </form>
        </Modal>
      )}
      <div className="flex flex-col items-center w-full p-8 ">
        <div className="flex w-full items-center bg-charcol h-[100px] drop-shadow-lg shadow-charcol rounded-full">
          <span className="flex w-1/2 justify-center m-2 uppercase font-bold  text-beige-light">
            {user.username}
          </span>
          <span className=" flex gap-2 items-center text-beige-light text-[.9rem]">
            Pages :
            <span className="text-gold font-bold text-[1.5rem]">
              {user.pages}
            </span>
          </span>
        </div>
        {user.avatar ? (
          <img
            onClick={() => {
              handleImageClick();
            }}
            className="flex w-[150px] h-[150px] border-4 bg-charcol justify-center border-olive-dark rounded-full  items-center m-4 shadow-md object-cover"
            src={user.avatar}
            alt="Profil Picture"
          />
        ) : (
          <span
            onClick={() => {
              handleImageClick();
            }}
            className="flex w-[150px] h-[150px] border-4 bg-white justify-center border-olive-dark rounded-full  items-center m-4 shadow-md object-cover"
          ></span>
        )}
      </div>
      <span>Livre lus : 0</span>
      <div className="flex justify-center flex-col items-center">
        <span className="flex w-screen border-2 border-charcol h-[2px] my-4"></span>
        <span
          className="flex p-2 my-4 bg-olive-dark rounded-full text-beige-light justify-center"
          onClick={() => {
            router.replace("/");
            document.cookie = `access_token=; path=/; expires=${new Date()}`;
            dispatch(logout());
          }}
        >
          Logout
        </span>
      </div>
    </div>
  );
}
