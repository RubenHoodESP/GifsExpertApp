import axios from 'axios';


export const getGifs = async ( category: any ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=w05JohCRogi0ad1X8TOcj5WlnTGybJzG&q=${ category }&limit=10`;
    const resp = await axios.get(url).then();
    const { data } = await resp.data;

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
