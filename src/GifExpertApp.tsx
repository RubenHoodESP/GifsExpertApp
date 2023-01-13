import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


function GifExpertApp() {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = ( newCategory: any ) => {
        if ( categories.includes(newCategory.toLowerCase()) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory }/>

            {/* Listado de Gif */}
            { categories.map( ( category ) => (

                <GifGrid
                    key={ category }
                    category={ category } />
                ))
            }
        </>
    )
}

export default GifExpertApp