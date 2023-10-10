"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName ] = useState("");
    const [quantity, setQuantity ] = useState(1);
    const [category, setCategory ] = useState("produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {
            name, quantity, category
        };

        console.log(item)
        alert(`Name: ${name} Quantity: ${quantity} Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main class = "flex justify-center w-full">
            <div>
                <form class = "p-2 m-4 bg-slate-700 text-black max-w-sm w-full" onSubmit={handleSubmit}>
                    <label class = "mb-2">
                        <input type = "text" placeholder = "Item name" value = {name} onChange = {handleNameChange} required = "" class = "w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"/>
                    </label>

                    <label class = "flex justify-between">
                        <input type = "number" id = "quantity" min = "1" max = "99" value = {quantity} onChange = {handleQuantityChange} required = "" class = "w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"/>
                    </label>

                    <label class = "flex justify-between">
                        <select id = "category" value = {category} onChange = {handleCategoryChange} required = "" class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                            <option value = "produce">Produce</option>
                            <option value = "dairy">Dairy</option>
                            <option value = "bakery">Bakery</option>
                            <option value = "meat">Meat</option>
                            <option value = "frozen">Frozen Foods</option>
                            <option value = "Canned">Canned Goods</option>
                            <option value = "dry">Dry Goods</option>
                            <option value = "beverages">Beverages</option>
                            <option value = "snacks">Snacks</option>  
                            <option value = "Household">Household</option>
                            <option value = "other">Other</option>
                        </select>
                    </label>

                    <button type = "submit" class="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Submit</button>

                </form>
            </div>
        </main>
    );
}