"use client";

import React, {useState} from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

const Items = [...itemsData]

export default function Week6() {
    const [items, setItems] = useState(Items);

    function handleSubmit (item){
        alert(`Adding ${item.name}, quantity ${item.quantity}, category ${item.category} to list`)
        setItems([...items, item])
    }

    return (
        <main class="font-mono text-sm bg-sky-200 text-blue-900">
            <h1 class="text-4xl font-bold">Shopping List</h1>

            <NewItem onAddItem={(item) => handleSubmit(item)} />
            <ItemList items = {items} />

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold">
                <Link href="../">&lt;- Home</Link>
            </div>
        </main>
    )
}