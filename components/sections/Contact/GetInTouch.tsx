export default function GetInTouch() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-8">You can contact Cinqo via our secure form or through the contact details provided opposite.</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input type="text" className="w-full border border-red-500 p-3 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input type="text" className="w-full border border-red-500 p-3 rounded" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full border border-red-500 p-3 rounded" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <div className="flex gap-2">
                   <select className="border border-red-500 p-3 rounded w-1/3">
                      <option>BH +973</option>
                   </select>
                   <input type="tel" className="w-2/3 border border-red-500 p-3 rounded" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Inquiries routed by purpose</label>
              <div className="grid grid-cols-3 gap-4">
                 <div className="border border-red-500 p-4 rounded text-center cursor-pointer">
                    <p className="font-bold text-sm">General enquiries</p>
                 </div>
                 <div className="border border-red-500 p-4 rounded text-center cursor-pointer">
                    <p className="font-bold text-sm">Partnerships</p>
                 </div>
                 <div className="border border-red-500 p-4 rounded text-center cursor-pointer">
                    <p className="font-bold text-sm">Projects / Innovations</p>
                 </div>
              </div>
            </div>

            <div>
               <label className="block text-sm font-semibold mb-2">Message *</label>
               <textarea rows={4} className="w-full border border-red-500 p-3 rounded" placeholder="Message (250 characters max)"></textarea>
            </div>

            <button className="border border-red-500 text-red-500 px-8 py-3 font-semibold uppercase tracking-wider rounded">Submit now</button>
          </form>
        </div>

        <div className="space-y-8 bg-gray-50 p-8 rounded-lg">
           <div>
              <h3 className="font-bold text-sm text-gray-500 mb-2 uppercase">RFP responses and qualification submission</h3>
              <p className="font-semibold">info@cinqo-me.com</p>
           </div>
           <div>
              <h3 className="font-bold text-sm text-gray-500 mb-2 uppercase">Business Hours</h3>
              <p className="font-semibold">Sun. - Wed. 8am to 5pm</p>
              <p className="font-semibold">Thu. 8am to 11am</p>
              <p className="font-semibold">Fri. Closed</p>
           </div>
           <div>
              <h3 className="font-bold text-sm text-gray-500 mb-2 uppercase">Postal Address</h3>
              <p className="font-semibold">YBAK TOWER,<br/>Level 14, Entrance No. 143-144<br/>Road 1703, Block 317,<br/>Diplomatic Area, Kingdom of Bahrain.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
