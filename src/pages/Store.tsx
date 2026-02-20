import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"


const Store = () =>{ 
    return (
        <>
            <h1>Store</h1>
            <div className="w-screen overflow-hidden justify-center flex flex-wrap gap-5 p-2 mt-5">
                {storeItems.map(item =>(
                    <ul key={item.id}>
                        <StoreItem {...item} />
                    </ul>
                ))}
            </div>
        </>
    )
}

export default Store