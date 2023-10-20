import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
import MenuCategories from "./MenuCategories";

export default function Menu() {
    const [foodCat, setFoodCat] = useState([]); // Store menu categories
    const [foodItem, setFoodItem] = useState([]); // Store menu items
    const [selectedCategory, setSelectedCategory] = useState(null);

    const loadData = async () => {
        let response = await fetch("http://localhost:4000/api/fooddata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();

        setFoodCat(response[1]); // Assuming categories are in response[1]
        setFoodItem(response[0]); // Assuming items are in response[0]
        console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <MenuCategories
                categories={foodCat} // Pass menu categories as a prop to MenuCategories
                setSelectedCategory={setSelectedCategory}
            />
            <MenuItems
                foodItem={foodItem}
                selectedCategory={selectedCategory}
            />
        </div>
    );
}
