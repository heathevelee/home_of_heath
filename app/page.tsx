export default function Home() {
  // 你可以列出你有哪些图片，注意这里的路径是相对于 public 文件夹
  const photos = [
    "/photos/photos1.jpg",
    "/photos/photos2.jpg",
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">我的照片馆 📸</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
            <img src={src} alt={`photo-${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
