export default function Item({ name, quantity, category }) {
    return (
        <main class="font-mono text-sm p-2 m-4 bg-sky-400 max-w-sm border-x-8 border-y-8">

            <h2 class="text-xl font-bold uppercase">{name}</h2>
            <li>Buy {quantity} in {category}</li>

        </main>
    )
}