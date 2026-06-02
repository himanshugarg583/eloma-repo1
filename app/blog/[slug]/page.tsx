import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/blog/ShareButtons";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post"
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && (!post.category || item.category === post.category))
    .slice(0, 3);

  const fallbackRelatedPosts = relatedPosts.length > 0
    ? relatedPosts
    : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const conclusion =
    post.category === "Supply Chain & Logistics"
      ? `In short, this topic shows how better planning, visibility, and execution can improve performance across the supply chain. When teams stay focused on process control and data-driven decisions, they reduce waste, improve service, and build a stronger operation.`
      : `In short, this topic highlights how the right system or approach can simplify work, improve consistency, and help teams make better decisions. A clear process, strong visibility, and the right tools create better outcomes over time.`;

  return (
    <div className="min-h-screen bg-[#eef4f8] text-[#23344a]">
      <Navbar />

      <main className="pt-10 pb-[60px] mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#5a6a7f]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0f5b61] hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-[#0f5b61] hover:underline">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#173a63]">{post.title}</li>
            </ol>
          </nav>

          <Link href="/blog" className="mt-4 inline-flex items-center text-sm font-medium text-[#0f5b61] hover:underline">
            ← Back to Blog
          </Link>

          <article className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="relative h-[260px] w-full sm:h-[380px] bg-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              {post.category ? (
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f5b61]">
                  {post.category}
                </p>
              ) : null}

              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#173a63] sm:text-4xl">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5a6a7f]">
                <span>Posted by - {post.author}</span>
                <span>{post.date}</span>
              </div>

              <h2 className="mt-8 text-2xl font-semibold text-[#173a63]">Detailed Explanation</h2>
              <p className="mt-4 text-lg leading-8 text-[#4d5563]">
                {post.content}
              </p>

              <div className="mt-8 space-y-6">
                {post.sections.map((section) => (
                  <section key={section.heading} className="rounded-xl bg-[#f6fbf9] p-5 sm:p-6 border border-[#d9e3ec]">
                    <h2 className="text-xl font-semibold text-[#173a63]">{section.heading}</h2>
                    <p className="mt-3 text-[15px] leading-7 text-[#525a68]">{section.body}</p>
                  </section>
                ))}
              </div>

              <section className="mt-8 rounded-xl border border-[#d7e7e2] bg-[#f1fbf8] p-5 sm:p-6">
                <h2 className="text-2xl font-semibold text-[#173a63]">Conclusion</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#525a68]">
                  {conclusion}
                </p>
              </section>

              <ShareButtons title={post.title} />
            </div>
          </article>

          <section className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0f5b61]">Related Blogs</p>
                <h2 className="mt-2 text-2xl font-bold text-[#173a63]">More posts you may like</h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {fallbackRelatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative h-28 w-32 shrink-0 overflow-hidden bg-white sm:h-32 sm:w-40">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      sizes="(min-width: 1024px) 160px, 128px"
                      className="object-contain object-center transition-transform duration-500 ease-out transform-gpu group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0f5b61]">
                      {related.category || "Blog"}
                    </p>
                    <h3 className="mt-2 text-[16px] font-semibold leading-6 text-[#173a63] group-hover:text-[#0f5b61] sm:text-[17px]">
                      {related.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#5f6674] sm:line-clamp-3">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}