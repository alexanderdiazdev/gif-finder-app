import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

const GifCollection = ({category}) => {

    const [images, setImages] = useState([])  

    useEffect(() => {
        getGifs( category )
            .then( setImages )
    }, [category])
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                <ul>
                    {
                        images.map(img => <GifGridItem key={ img.id } { ...img } /> )
                    }
                </ul>
            </div>
        </>
    )
}

export default GifCollection
