export default function Articles({ data }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Tips & Article</h2>
        <button className="mt-4 sm:mt-0 bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-200">View more</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden autoShow">
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-500">
                {item.date} | {item.tag}
              </p>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              <button className="mt-4 sm:mt-0 bg-black text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
