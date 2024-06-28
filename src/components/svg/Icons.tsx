import React from 'react'

type props = {
    name: string
}
type UseSvg = {
    arrowDonw: string,
    arrowUp: string
}


export default function Icons({ name }: props) {
    const useSvg: UseSvg = {
        arrowDonw: "arrowDown",
        arrowUp: "arrowUp",
    }
    return (
        <>
            {
                name === useSvg.arrowDonw &&
                <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 1.5C3.67157 0.671575 2.32843 0.671575 1.5 1.5C0.671573 2.32843 0.671572 3.67157 1.5 4.5L11.3137 14.3137C12.8758 15.8758 15.4085 15.8758 16.9706 14.3137L26.7843 4.5C27.6127 3.67157 27.6127 2.32843 26.7843 1.5C25.9558 0.671573 24.6127 0.671573 23.7843 1.5L16.9706 8.31371C15.4085 9.87581 12.8758 9.87581 11.3137 8.31371L4.5 1.5Z" fill="#E0E0D1" />
                </svg>
            }
            {
                name === useSvg.arrowUp &&
                <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.7843 15.6421C24.6127 16.4706 25.9558 16.4706 26.7843 15.6421C27.6127 14.8137 27.6127 13.4706 26.7843 12.6422L16.9706 2.82844C15.4085 1.26634 12.8758 1.26634 11.3137 2.82844L1.5 12.6421C0.671572 13.4706 0.671574 14.8137 1.5 15.6421C2.32843 16.4706 3.67157 16.4706 4.5 15.6421L11.3137 8.82844C12.8758 7.26634 15.4085 7.26634 16.9706 8.82844L23.7843 15.6421Z" fill="#E0E0D1" />
                </svg>

            }

        </>
    )
}
