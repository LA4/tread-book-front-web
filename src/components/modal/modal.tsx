import React, { useState } from 'react'


type ModalProps = {
    children: any
}

export default function Modal({ children }: ModalProps) {

    return (<>
        {children}
    </>
    )
}
