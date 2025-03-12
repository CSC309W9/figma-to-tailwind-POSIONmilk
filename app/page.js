// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden relative">
      {/* Header navigation */}
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="text-[#eaecd7] text-xl font-bold font-['Inknut_Antiqua']">Home</div>
          <div className="text-[#eaecd7] text-xl font-bold font-['Inknut_Antiqua']">Menu</div>
          <div className="text-[#eaecd7] text-xl font-bold font-['Inknut_Antiqua']">Login</div>
        </div>
        
        <div className="flex space-x-8">
          {/* Button */}
          <div className="bg-[#eaecd7] rounded-full px-6 py-2">
            <div className="text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Click</div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col md:flex-row px-6 mt-8">
        {/* Left column with text */}
        <div className="w-full md:w-1/2 pr-4 space-y-16">
          <div className="text-[#eaecd7] text-5xl md:text-6xl lg:text-7xl font-black font-['Inknut_Antiqua'] leading-tight">
            BlaBla Coffe!
          </div>
          
          <div className="text-[#eaecd7] text-2xl md:text-3xl font-semibold font-['Inknut_Antiqua'] leading-snug">
            Your NO.1 Choice.
          </div>
        </div>
        
        {/* Right column with image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative w-full max-w-md -rotate-[8.64deg]">
            {/* Replace the stacked divs/img with a single img for reliability */}
            <img 
              className="w-full h-auto rounded-lg shadow-lg" 
              src="https://picsum.photos/500/550" 
              alt="Feature image" 
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full bg-white py-4 absolute bottom-0 left-0 mt-16">
        <div className="flex justify-between px-6">
          <div className="text-[#db4439] text-lg font-black font-['Inknut_Antiqua']">Contract Information</div>
          <div className="text-[#db4439] text-lg font-black font-['Inknut_Antiqua']"></div>
          <div className="text-[#db4439] text-lg font-black font-['Inknut_Antiqua']">Country Policy</div>
          <div className="text-[#db4439] text-lg font-black font-['Inknut_Antiqua']"></div>
          <div className="text-[#db4439] text-lg font-black font-['Inknut_Antiqua']">By our partner today</div>
        </div>
      </div>
    </div>
  );
}