import Image from 'next/image';
import Link from 'next/link';

const stories = [
  {
    slug: 'story_1',
    title: '富士山，2025.2.14',
    description: '朋友从国内飞来日本，我们在东京转了两天后，2月14日这一天，来到了富士山。这一天的富士山不像上次我来一样，遮遮掩掩。这一天阳光很好，我们在河口湖旁的咖啡店待了很久。',
    cover: '/stories/story_1/cover.jpg',
  },
  {
    slug: 'story_2',
    title: '故宫，2024.2.25',
    description: '上一次来故宫只用了两个半小时就走完了中轴线，这次和她一起，也是两个半小时，希望下次会逛的更久一些。故宫那么大，还有很多地方没有看。',
    cover: '/stories/story_2/cover.jpg',
  },
  {
    slug: 'story_3',
    title: '诺贝尔，2024年的某一天',
    description: '发现贝贝的那一天，她急匆匆给我打电话，在车底把他捞了出来。从此在她心里我变成了下一位。',
    cover: '/stories/story_3/cover.jpg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* 顶部头图区域 */}
      <div className="mb-6 relative w-full h-[300px] overflow-hidden">
        <Image
          src="/cover.jpg"
          alt="Header"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="brightness-95 contrast-125" // 调整亮度和对比度
        />

        {/* 渐变遮罩 */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-blue-100" /* 头图下方的渐变遮罩*/ />
        {/* 发光文字，增强可读性 */}
        <p style={{
          fontFamily: "'Playwrite AU SA', cursive",
          fontSize: '16px',
        }}
          className="absolute top-6 left-6 text-dark font-semibold">
          <span className="block">Good morning, and in case I don't see you,</span>
          <span className="block">Good afternoon, Good evening, and good night.</span>
        </p>
        <p style={{
          fontFamily: "'Noto Sans Simplified Chinese', cursive",
          fontSize: '16px',
        }}
          className="absolute top-21 left-6 text-dark font-semibold">
          <span className="block">早上好！为了以防万一……</span>
          <span className="block">还有中午好，晚上好，好梦！</span>
        </p>
        <p style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: '26px',
        }}
          className="absolute bottom-4 right-6 text-white ">
          <span className="block">by Heath</span>
        </p>
      </div>

      {/* 故事卡片区域 */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 space-y-6 w-full">
        {stories.map((story, index) => (
          <Link key={index} href={`/stories/${story.slug}`}>
            <div className="mb-6 flex w-full bg-white bg-opacity-60 backdrop-blur-md rounded-l shadow-md hover:shadow-xl hover:scale-[1.01] transition cursor-pointer overflow-hidden">
              {/* 图片区域：占50% */}
              <div className="w-1/2 h-[400px]">
                <Image
                  src={story.cover}
                  alt={story.title}
                  width={800}   // 只是为了 image optimization，不会限制展示大小
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 文字区域：占50% */}
              <div
                className="w-1/2 p-4 flex flex-col justify-center"
                style={{
                  fontFamily: "'Noto Sans Simplified Chinese', cursive",
                }}
              >
                <h2 className="text-4xl tracking-wide text-[#111] mb-2">{story.title}</h2>
                <p className="text-3xl text-gray-700 leading-relaxed">{story.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
