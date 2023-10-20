import React from "react";

export default function MenuItems ({foodItem, selectedCategory}) {
    if (!foodItem || foodItem.length === 0) {
        return <div>No menu items available for the selected category.</div>;
      }
    
      const filteredItems = foodItem[0].items.filter((item) => item.name === selectedCategory);

return (
  <div>
    {filteredItems.map((item) => (
      <div key={item.name}>
        <h3>{item.name}</h3>
        {/* Render item sizes and prices here */}
      </div>
    ))}
  </div>
);

}
   