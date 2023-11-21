function Item ({item, onSelect}) {
    const handleClick = () => {
        onSelect(item);
    };

    return ( 
        <main class="font-mono text-sm p-2 m-2 bg-sky-400 max-w-sm border-x-8 border-y-8 text-white hover:bg-blue-500 cursor-pointer" onClick={handleClick}>

            <h2 class="text-xl font-bold uppercase">{item.data.name}</h2>
            <li class="text-xm">Buy {item.data.quantity} in {item.data.category}</li>
                
        </main>
    )
}
export default Item;