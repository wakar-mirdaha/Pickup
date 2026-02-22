import { Link } from "react-router-dom"

const Home = () => {
  return (
   <div className="min-h-screen bg-linear-to-br from-digital-blue-950 via-digital-blue-900 to-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">

        {/* Glow Background Effect */}
        <div className="absolute w-96 h-96 bg-purple-700/20 blur-3xl rounded-full -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full bottom-0 right-0"></div>

        <h1 className="
text-5xl font-extrabold
text-digital-blue-300
mb-6
">
Next-Level Digital Shopping
</h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Premium products. Smooth experience. Designed with precision and speed.
        </p>

        <div className="flex gap-6">
          <Link
            to="/store"
            className="px-8 py-3 rounded-full font-semibold 
            bg-linear-to-r from-blue-500 via-sky-500 to-indigo-500
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

      {/* Features Section */}
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

      {/* CTA Section */}
      <section className="py-20 text-center border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Upgrade Your Experience?
        </h2>

        <Link
          to="/store"
          className="px-8 py-3 rounded-full text-lg font-semibold 
          bg-linear-to-r from-blue-500 via-sky-500 to-indigo-500 
          hover:scale-100 transition duration-300 shadow-xl"
        >
          Shop Now
        </Link>
      </section>

    </div>
  )
}

export default Home