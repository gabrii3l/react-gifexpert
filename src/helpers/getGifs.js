export const getGifs = async(category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=sAV89j0OjCXamhV4bAAcbU4EsTjAEKpu&q=${category}&limit=20`;

    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        tittle: img.title,
        url: img.images.downsized_medium.url,
    }));
    //console.log(gifs);
    return gifs;
};