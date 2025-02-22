import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";


const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getNewGifs = async () => {

        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setisLoading(false);
    }

    useEffect(() => {
        getNewGifs();
    }, [])

    return {
        gifs,
        isLoading
    }

}

export default useFetchGifs
