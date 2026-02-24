import { useEffect, useState } from "react"
import StoreItem from "../components/StoreItem"
import { useShoppingCart } from "../context/ShoppingCartContext"

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
}

const Store = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { setStoreProducts } = useShoppingCart()

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => {
        setProducts(data.products)
        setStoreProducts(data.products)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-medium tracking-wide">Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 bg-slate-950">
        <p className="text-xl">Something went wrong. Please try again later.</p>
      </div>
    )
  }

  return (
     <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <StoreItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            imgUrl={product.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default Store