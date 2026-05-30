import Image, { type StaticImageData } from "next/image";

type BlogSidebarProps = {
  topBanner: StaticImageData;
  bottomBanner: StaticImageData;
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
};

export default function BlogSidebar({
  topBanner,
  bottomBanner,
  categories = [],
  activeCategory,
  onSelectCategory,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.34em] text-[#0f5b61]">ELOMA GROUP BLOG</p>
          <p className="mt-3 text-[40px] font-black uppercase leading-none tracking-tight text-[#173a63]">Stay Updated</p>
          <p className="mt-3 max-w-[270px] text-[22px] leading-[1.3] text-[#23344a]">with our solution to make your life easier.</p>
          <Image src={topBanner} alt="Stay updated" className="mt-6 h-auto w-full object-contain" priority={false} />
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="text-[24px] font-bold text-[#173a63]">Categories</h3>
        <div className="mt-4 border-t border-[#d9e3ec] pt-4">
          <ul className="space-y-3 text-[15px] text-[#44505f]">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onSelectCategory(category)}
                  className={`flex w-full items-start gap-2 text-left transition-colors duration-200 p-2 rounded ${
                    activeCategory === category ? "bg-[#eef8f3] text-[#0f5b61]" : "hover:text-[#0f5b61]"
                  }`}
                >
                  <span className="text-[#0f5b61]">&raquo;</span>
                  <span>{category}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
        <Image src={bottomBanner} alt="Coming soon" className="h-auto w-full object-contain" />
      </div>
    </aside>
  );
}