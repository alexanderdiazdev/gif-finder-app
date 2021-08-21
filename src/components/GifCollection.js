import React from 'react'

const GifCollection = ({category}) => {
    
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
        console.log(gifs);
    }

    getGifs()
    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}

export default GifCollection