import React from "react";

export default function MenuCategories ({categories, setSelectedCategory}) {
    return (
        <div>
          {categories.map((category) => (
            <button 
            key={category._id} 
            onClick={() => setSelectedCategory(category.categoryName)}
            >
            {category.categoryName}
            </button>
          ))}
        </div>
      );
}
   