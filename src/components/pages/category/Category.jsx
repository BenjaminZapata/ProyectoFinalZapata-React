import './Category.scss';
import CategoryFeaturedItems from "./CategoryFeaturedItems";

const Category = ({gender}) => {

  const setGenderTitle = () => {
    switch(gender){
      case 'men': return 'Hombre';
      case 'women': return 'Mujer';
      case 'children': return 'Niños';
    }
  }

  let genderTitle = setGenderTitle({gender})
  
  return (
    <section className="category">
      <h1>{genderTitle}</h1>
      <CategoryFeaturedItems genderTitle={genderTitle}/>
    </section>
  )
}

export default Category;