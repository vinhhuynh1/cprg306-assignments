"use client";

import React, {useState} from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

const allItems = [...itemsData]

export default function Week7() {
    const [items, setItems] = useState(allItems);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleSubmit (item) {
        alert(`Adding ${item.name}, Quantity: ${item.quantity}, Category: ${item.category} to list`)
        setItems([...items, item])
    }

    function handleItemSelect (item) {
        if (typeof item.name == "string") {
            const cleanName = item.name
                .split(',')[0]
                .replace(/[^A-Za-z\s]/g, '')
                .trim();
            setSelectedItemName(cleanName);
        }

        else {
            console.error("Invalid item name: ", item.name);
            setSelectedItemName("");
        }
    }

    return (
        <main>
            <div class="font-mono text-sm bg-sky-200 text-blue-900 justify-center flex"> 
                <h1 class="text-4xl font-bold">Shopping List</h1>

                    <ItemList items = {items} onItemSelect = {handleItemSelect} />
                    <MealIdeas ingredient={selectedItemName} />
                    <NewItem onAddItem={(item) => handleSubmit(item)} />

            </div>

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold font-mono bg-sky-200 text-blue-900">
                <Link href="../">&lt;- Home</Link>
            </div>
        </main>
    )
}