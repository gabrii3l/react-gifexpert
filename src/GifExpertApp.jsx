import { useState } from "react";
import { AddCate,GifGrid } from "./component";


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    //categories.push(newCategory);
    // setcategories(['Valorant',...categories]);
    if (categories.includes(newCategory)) return;
    setcategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCate onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
