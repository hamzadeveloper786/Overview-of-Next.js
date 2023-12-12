
export default function Home() {
  return (
    <main>
      {/* pagetop */}
      <div id="top" className='flex flex-row justify-between bg-white p-4'>
        <div className='m-2 text-lg font-medium'><span className='text-blue-700'>EQUIP</span><em><span id='spa' className='border border-solid text-white border-orange-500 p-1 bg-orange-500'>MENTS</span></em></div>
        <div className='m-2'><span className='font-xs text-blue-700'>Call Now To Discover Your Perfect Playground</span> | <span className='text-orange-500 text-2xl'>+971 52 6144 452</span></div>
      </div>
      {/* lists */}
      <div>
        <nav>
          <ul className='flex p-2 justify-between bg-yellow-200'>
            <li className='p-2 m-2 '>Adventure Playground</li>
            <li className='p-2 m-2'>Shapes Equipments</li>
            <li className='p-2 m-2'>Sports Equipments</li>
            <li className='p-2 m-2'>Outdoor Furniture</li>
            <li className='p-2 m-2'>Kids Playground</li>
            <li className='p-2 m-2'>Water Splash</li>
          </ul>
        </nav>
      </div>
      {/* banner */}
      <div id='banner' className='opacity-50 h-3/4 text-white'>
        <div className='flex justify-around'>
          <div className='m-16'>
            <h1 className='text-4xl font-semibold'>
              We Make Your Custom Indoor Playground A Reality
            </h1>
            <br />
            <p className='font-semibold'>At Indoor Playgrounds International, we offer the highest safety and quality standards. Browse our comprehensive playgrounds solutions to learn more about our hands-on-services, from design to installation and after sales maintenances!</p>
            </div>
          <div className='border border-solid text-white border-orange-500 rounded-md bg-orange-500 m-16 p-3'>
            Start your Indoor Playground by Accessing our Full Product Catalog <br /><br />
            <input className='m-2 h-6 p-4 w-64 text-blue-700' type="text" placeholder='Full Name' />
            <input className='m-2 h-6 p-4 w-64 text-blue-700' type="email" placeholder='Your Email' />
            <input className='m-2 h-6 p-4 w-64 text-blue-700' type="number" placeholder='Your Phone' />
            <br />
            <br />
            <button className='m-2 h-14 p-4 w-64 rounded-md bg-blue-700 text-white' type="submit">Get Free Estimate</button>
            <br /><br /><br />
          </div>
        </div>
      </div>
      <div className="flex ml-20 mr-20">
        <div className="bg-gray-600 text-white p-8">
          <h1 className="text-4xl">Our Location</h1>
          <p className="mt-4">We are located with our Partners in all main city Dubai & available to serve you anywhere in UAE.</p>
          <button className="border border-white p-3 mt-4">Contact Us</button>
        </div>
        <div className="bg-blue-700 p-8 text-white">
          <h1 className="text-4xl">Quality Products</h1>
          <p className="mt-4">Affordable, flawless building services ensuring utmost customer satisfaction.</p>
          <button className="border border-white p-3 mt-4">Explore Now</button>
        </div>
        <div className="bg-gray-600 text-white p-8">
          <h1 className="text-4xl">Our Guarantee</h1>
          <p className="mt-4">Reliably assure cost-effective flawless,services for building with guaranteed satisfaction.</p>
          <button className="border border-white p-3 mt-4">Read More</button>
        </div>
      </div>
      <div>
        <h1 className="text-blue-700 text-center mt-16 text-4xl">What We Offer</h1>
      </div>
    </main>
  )
}
