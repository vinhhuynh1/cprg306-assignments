export default function Item({ name, quantity, category }) {
    return (
        <main class="font-mono text-sm p-2 m-2 bg-sky-400 max-w-sm border-x-8 border-y-8 text-white">

            <h2 class="text-xl font-bold uppercase">{name}</h2>
            <li class="text-sm">Buy {quantity} in {category}</li>

        </main>
    )
}