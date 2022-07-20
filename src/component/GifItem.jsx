import React from 'react'

export const GifItem = ({image, url, tittle}) => {

  return (
    <div className='Card'>
        <img src={url} alt={tittle} />
        <p>{tittle}</p>
    </div>
  )
}
