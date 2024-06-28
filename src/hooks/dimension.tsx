import React, { useState } from 'react'

export default function useDimension() {
    const [height, setHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0)
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

    return { height, width }
}
