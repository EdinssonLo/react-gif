import { useState } from "react"
import {AddCategory, GridGif} from "./components";

const GifExpertApp = () => {

  const [category, setCategory] = useState(['one piece']);

  const onAddCategory = (newCategory) => {

    const result = category.filter((category) => category.toLowerCase() == newCategory.toLowerCase());
    console.log('mas'+result)

    if (result?.length) return;

    setCategory([newCategory, ...category]);
    // setCategory(cat => [...cat,  'Demon Slayer'] );
  }


  return (
    <>
      {/* titulo */}
      <h1>Mis GIFs</h1>
      {/* input */}
      <AddCategory
        // setCategory={setCategory}
        onNewCategory={onAddCategory}
      />

      {/* listado gifs */}
      {
        category.map((category) => (
          <GridGif key={category} category={category} />
        )
        )
      }
    </>
  )
}

export default GifExpertApp
