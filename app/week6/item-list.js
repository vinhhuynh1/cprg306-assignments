"use client";

import Item from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");
    
    let Items = itemsData.map((item => ({...item})));

    const sortItem = () => {
        if (sortBy === "name"){
            return items.sort((a, b)=>a.name.localeCompare(b.name))
        }

        if (sortBy === "category"){
            return items.sort((a, b)=>a.category.localeCompare(b.category))
        }

        return items;
    }

    const sortedItems = sortItem(Items);

    return (
        <main>
            <div>
                <label class="text-blue-900 font-bold pl-5"> Sort by: 
                    <button class={`${sortBy === "name" ? "bg-orange-500" : "bg-red-600"} p-1 m-2 w-28 rounded-md text-white`} onClick = {() => setSortBy("name")}>
                        Name
                    </button>

                    <button class={`${sortBy === "category" ? "bg-orange-500" : "bg-red-600"} p-1 m-2 w-28 rounded-md text-white`} onClick = {() => setSortBy("category")}>
                        Category
                    </button>
                </label>
            </div>

            <div>

                {sortedItems.map((item)=>(<Item item={item} key={item.id}/>))}

            </div>
        </main>   
    )
}
  