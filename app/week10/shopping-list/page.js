"use client";

import { useState, useEffect} from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Week7() {
    const { user } = useUserAuth();

    if (!user) {
        return <p>Log in to access the shopping list.</p>;
    }

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        const itemsData = await getItems(user.uid);
        setItems(itemsData);
    };

    useEffect(() => {
        loadItems();
    }, [user.uid]);

    async function handleAddItem(item) {
        try {
            const newItemId = await addItem(user.uid, item);
            setItems((prevItems) => [...prevItems, { id: newItemId, data: item }]);
        } 
        
        catch (error) {
            console.error("Error adding item:", error.message);
        }
      }

    const handleSubmit = (item) => {
        alert(`Adding ${item.data.name}, Quantity: ${item.data.quantity}, Category: ${item.data.category} to list`)
        handleAddItem(item);
    }

    function handleItemSelect (item) {
        if (typeof item.data.name == "string") {
            const cleanName = item.data.name
                .split(',')[0]
                .replace(/[^A-Za-z\s]/g, '')
                .trim();
            setSelectedItemName(cleanName);
        }

        else {
            console.error("Invalid item name: ", item.data.name);
            setSelectedItemName("");
        }
    }

    return (
        <main>
            <div class="font-mono text-sm bg-sky-200 text-blue-900 justify-center flex"> 
                <h1 class="text-4xl font-bold">{user.email}'s Shopping List</h1>
                    <ItemList items = {items} onItemSelect = {handleItemSelect} />
                    <MealIdeas ingredient={selectedItemName} />

                <div class="flex-1">
                    <NewItem onAddItem={(item) => handleSubmit(item)} />
                </div>
            </div>

            <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold font-mono bg-sky-200 text-blue-900">
                <Link href="../">&lt;- Home</Link>
            </div>
        </main>
    )
}