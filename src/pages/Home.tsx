import { Link } from "react-router-dom"

const Home = () => {
  return (
   <div className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900  text-white">

     
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">

        
        <div className="absolute w-96 h-96 bg-purple-700/20 blur-3xl rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full bottom-0 right-0"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white my-6
">
Elevate Your <span className="text-blue-500">LifeStyle</span>.
</h1>

        <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
         Stop searching and start finding. Browse thousands of products with a seamless interface designed to make your checkout as fast as a single click.
        </p>

        <div className="flex gap-6">
          <Link
            to="/store"
            className="px-8 py-3 rounded-full font-semibold 
            bg-linear-to-r from-blue-600/80 to-sky-600/80
             text-xl"
          >
            Explore Store
          </Link>

          <Link
            to="/about"
            className="px-8 py-3 rounded-full border border-gray-600 
            hover:bg-gray-800 transition duration-300 text-xl"
          >
            Learn More
          </Link>
        </div>
      </section>

      
      <section className="py-24 px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-200">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-purple-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              Fast Delivery
            </h3>
            <p className="text-gray-400 text-lg">
              Optimized logistics system ensures lightning speed shipping.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-indigo-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Secure Payments
            </h3>
            <p className="text-gray-400 text-lg">
              End-to-end encrypted checkout for total peace of mind.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-pink-500 transition">
            <h3 className="text-xl font-semibold mb-3 text-pink-400">
              Premium Quality
            </h3>
            <p className="text-gray-400 text-lg">
              Only carefully curated high-quality products make it here.
            </p>
          </div>

        </div>
      </section>

     
      <section className="py-20 text-center border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Upgrade Your Experience?
        </h2>

        <Link
          to="/store"
          className="px-8 py-3 rounded-full text-lg font-semibold 
          bg-linear-to-r from-blue-600/80 to-sky-600/80
          hover:scale-100 transition duration-300 shadow-xl"
        >
          Shop Now
        </Link>
      </section>

    </div>
  )
}

export default Home