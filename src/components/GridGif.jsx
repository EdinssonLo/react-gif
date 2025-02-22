
import {GifItem} from "../components";
import useFetchGifs from "../hooks/useFetchGifs";

export const GridGif = ({ category }) => {

  const { gifs, isLoading } = useFetchGifs(category);

  
  return (
    <>
    
      <h1>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</h1>
      {
        isLoading && <h1>Cargando ....</h1>
      }

      <div className="card-grid" >
        {
          gifs.map((image) => (

            <GifItem key={image.id} {...image} />

          ))}
      </div>

    </>
  )
}

