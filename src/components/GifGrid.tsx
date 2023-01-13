import { GifItem } from './GifItem.js';
import { useFetchGifs } from '../hooks/useFetchGifs.js';


export const GifGrid = ({ category }: any) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            
            <div className='card-grid'>
                {
                    images.map( (image: any) => 
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    )
                }
            </div>
        </>
    )
}
