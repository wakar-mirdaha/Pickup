const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-20">

    
      <div className="max-w-4xl mx-auto text-center my-16">
       <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white my-6
">
About <span className="text-blue-500">PICKUP</span>
</h1>

        <p className="text-gray-400 text-lg">
          We build experiences, not just products.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-pink-500 transform-border duration-300">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed text-xl">
            Our goal is simple — deliver premium quality products with a seamless,
            modern shopping experience. We focus on performance, design, and
            reliability.
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-8 shadow-lg hover:border-sky-500 transform-border duration-300">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400 ">
            What Makes Us Different?
          </h3>
          <ul className="space-y-3 text-gray-400 text-xl">
            <li>✔ Curated premium products</li>
            <li>✔ Secure checkout system</li>
            <li>✔ Fast and reliable delivery</li>
            <li>✔ Modern and minimal design philosophy</li>
          </ul>
        </div>

      </div>

      
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-400">
          Our Vision
        </h2>

        <p className="text-gray-400 leading-relaxed text-xl">
          We believe e-commerce should feel effortless and elegant.
          Our vision is to create a digital shopping experience that feels fast,
          intuitive, and visually refined.
        </p>
      </div>

    </div>
  )
}

export default About