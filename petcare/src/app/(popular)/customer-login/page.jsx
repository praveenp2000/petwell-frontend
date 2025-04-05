'use client';

const Page = () => (

  <div className="bg-gray-100 flex items-center justify-center h-[800px]">

    <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Please Login</h2>
      <p className="text-gray-600 mb-6">You must be logged in to purchase our products.</p>
      <a href="/login">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </a>
    </div>

  </div>
);

export default Page;
