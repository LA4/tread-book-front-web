import React, { useState } from 'react'
import Icons from '../svg/Icons'
import { BookProps } from '@/app/addBook/page'


type ModalProps = {
    children: any
}

export default function Modal({ children }: ModalProps) {

    return (<>
        {children}
    </>
    )
}
