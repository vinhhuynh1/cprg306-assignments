"use client";

import React from "react";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    
    let theItems = items.map((item => ({...item.data})));

    const sortItem = () => {
        if (sortBy === 'name') {
            return items.sort((a, b) => (a.data.name || '').localeCompare(b.data.name || ''));
        }
        if (sortBy === 'category') {
            return items.sort((a, b) => (a.data.category || '').localeCompare(b.data.category || ''));
        }
        return items;
    };

    const sortedItems = sortItem(theItems);

    return (
        <main>
            <div>
                <label class="text-blue-900 font-bold pl-3"> Sort by: 
                    <button class={`${sortBy === "name" ? "bg-orange-500" : "bg-red-600"} p-1 m-2 w-28 rounded-md text-white`} onClick = {() => setSortBy("name")}>
                        Name
                    </button>

                    <button class={`${sortBy === "category" ? "bg-orange-500" : "bg-red-600"} p-1 m-2 w-28 rounded-md text-white`} onClick = {() => setSortBy("category")}>
                        Category
                    </button>
                </label>
            </div>

            <div>
                {sortedItems.map((item) => (<Item item={item} key={item.id} onSelect = {() => onItemSelect(item)} /> ))}
            </div>
        </main>
    );
}
  