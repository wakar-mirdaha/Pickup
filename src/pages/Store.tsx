import { useEffect, useState } from "react"
import StoreItem from "../components/StoreItem"

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

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-xl">Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        <p className="text-xl">Something went wrong.</p>
      </div>
    )
  }

  return (
     <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-20">

      <div className="max-w-7xl mx-auto grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      gap-10">

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