function Item ({item, onSelect}){
    return ( 
        <main class="font-mono text-sm p-2 m-4 bg-sky-400 max-w-sm border-x-8 border-y-8 text-white hover:bg-blue-500 cursor-pointer" onClick={() => onSelect(item)}>

            <h2 class="text-xl font-bold uppercase">{item.name}</h2>
            <li class="text-xm">Buy {item.quantity} in {item.category}</li>
                
        </main>
    )
}
export default Item;