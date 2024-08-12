import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

    // Definir useState en el nivel superior del componente
    const [categories, setCategories] = useState(['Samurai X'])

    //console.log(categories)

    // Función para agregar una categoría
    const onAddCategory = ( newCategory ) => {
        // Agregar categorias
        //...categories: es el operador spread, que nos permite obtener todas las categorias que ya teniamos
        //setCategories(cat => [...cat, 'Dragon Ball'])
        if (categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories]);
        console.log(newCategory);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />


        { 
        categories.map( ( category ) => (
            <GifGrid 
                key={ category } 
                category={ category }
            />
        ))
        }

    </>
  )
}
