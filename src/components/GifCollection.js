import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

const GifCollection = ({category}) => {

    const [images, setImages] = useState([])  

    useEffect(() => {
        getGifs()
    }, [])
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Bart&limit=3&api_key=Jnbm6h5JwN4oL3d1SI4UKp0Pv6QuuSYa'
        const resp = await fetch(url)
        const { data } = await resp.json()

        const gifs = data.map( img => { 
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }})
        setImages( gifs )
    }

    return (
        <div>
            <h3>{ category }</h3>
            <ul>
                {
                    images.map(img => <GifGridItem key={ img.id } { ...img } /> )
                }
            </ul>
        </div>
    )
}

export default GifCollection
