function Item ({item}){
    return ( 
        
        <div class="font-mono text-sm p-2 m-4 bg-sky-400 max-w-sm border-x-8 border-y-8">

                <h2 class="text-xl font-bold uppercase">{item.name}</h2>
                <li class="text-xm">Buy {item.quantity} in {item.category}</li>

        </div>
    )
}
export default Item;