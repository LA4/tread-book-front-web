'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import importPicture from '@/hooks/importPicture'
import Modal from '@/components/modal/modal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/components/provider/reduxProvider'
import { avatar, logout } from '@/store/userReducer'
import { useRouter } from 'next/navigation'
const API_THREADBOOK = process.env.API_THREADBOOK

export default function Profil() {
    const user = useSelector((state: RootState) => state.user.value)
    const dispatch = useDispatch()
    const router = useRouter()
    const pictureRef = useRef<HTMLInputElement>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const [openModal, setOpenModal] = useState<boolean>(false)
    const handleImageClick = () => {
        setOpenModal(!openModal)
        importPicture()
    }
    const previewImage = () => {
        let imageToPreview = pictureRef.current?.files?.[0]
        if (imageToPreview) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(imageToPreview)
        }
    }
    const fetchProfilePicture = async () => {
        const imageTosend = pictureRef.current?.files?.[0]
        const formData = new FormData()
        if (imageTosend) {
            formData.append('profilePicture', imageTosend)
        }
        const response = await fetch(`${API_THREADBOOK}files/upload/${user.user_id}`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        const res2 = await fetch(`${API_THREADBOOK}files/${data.result}`)
        dispatch(avatar(res2.url))
        setOpenModal(!openModal)
    }

    return (
        <div className='flex flex-col h-screen my-[80px] items-center'>

            {openModal && <Modal >
                <form action={fetchProfilePicture} className="flex absolute w-screen bg-olive-light h-screen left-0 top-0 flex-col items-center">
                    <span className='flex rounded-full border-2 p-1 my-2' onClick={() => setOpenModal(!openModal)}>close</span>
                    <input ref={pictureRef} onChange={previewImage} type="file" id="profile-picture" name="profile-picture" accept="image/jpg, image/png" />
                    {imagePreview && <img src={imagePreview} alt={pictureRef.current?.value} width={200} height={200}></img>}
                    <button type="submit">add</button>
                </form>
            </Modal>}
            <div >
                <img
                    onClick={() => { handleImageClick() }}
                    className='flex w-[200px] h-[200px] border-2 border-olive-dark rounded-full items-center m-4 shadow-md object-cover'
                    src={user.avatar}
                    alt="Profil Picture" />

                <span>{user.username}</span>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <span>Reading Pages :</span>
                <span>{user.pages}</span>
            </div>
            <span className='flex w-screen border-2 border-charcol h-[2px] my-4'></span>
            <div>
                <span onClick={() => {
                    router.replace("/")
                    document.cookie = `access_token=; path=/; expires=${new Date()}`
                    dispatch(logout())
                }}>Logout</span>
            </div>


        </div>
    )
}
