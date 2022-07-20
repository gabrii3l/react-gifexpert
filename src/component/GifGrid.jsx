import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

const {Images, isLoading} = useFetchGifs(category);

//console.log({Images, isLoading});

//   const [Images, setImages] = useState([]);

//   const getImages = async () => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
//   };

//   useEffect(() => {
//     getImages();
//     //.then(newImages => setImages(newImages));
//   }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (   <h2>Cargando...</h2>)
      }
   
      <div className="card-grid">
        {Images.map((image) => (
         // <li key={id}>{tittle}</li>
         <GifItem 
         key={image.id}
            {...image}
         />
        ))}
      </div>
    </>
  );
};
