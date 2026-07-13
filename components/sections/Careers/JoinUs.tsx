export default function JoinUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Join Cinqo</h2>
          <p className="text-gray-600 mb-8">Take the next step in your career and explore exciting opportunities with us.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input type="tel" className="w-full border border-gray-300 p-3 rounded" />
              </div>
            </div>

            <div>
               <label className="block text-sm font-semibold mb-2">Upload CV</label>
               <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded">
                  <p className="text-gray-500">Drag & Drop or click to upload</p>
               </div>
            </div>

            <button className="bg-red-600 text-white px-8 py-3 font-semibold uppercase tracking-wider rounded">Submit</button>
          </form>
        </div>

        <div className="bg-gray-200 min-h-[600px] rounded-lg"></div>
      </div>
    </section>
  );
}
