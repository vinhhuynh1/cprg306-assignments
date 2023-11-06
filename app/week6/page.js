"use client";

import React, {useState} from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const allItems = [...itemsData]

export default function Week6() {
    const [items, setItems] = useState(allItems);

    function handleSubmit (item){
        alert(`Adding ${item.name}, Quantity: ${item.quantity}, Category: ${item.category} to list`)
        setItems([...items, item])
    }

    return (
        <main class="font-mono text-sm bg-sky-200 text-blue-900">
            <h1 class="text-4xl font-bold text-center">Shopping List</h1>
            
            <div class="flex justify-center">
                <NewItem onAddItem={(item) => handleSubmit(item)} />
            </div>

            <div class="flex justify-center">
                <ItemList items = {items} />
            </div>

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold">
                <Link href="../">&lt;- Home</Link>
            </div>
        </main>
    )
}