import { Calendar, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "News & Events",
  description: "Stay updated with the latest happenings, event announcements, and success stories from the Integrated Hill Areas Upliftment Society (IHAUS)."
};

const posts = [
  {
    id: 1,
    title: "Inauguration of New Community Learning Center",
    date: "March 10, 2026",
    excerpt: "We are proud to announce the opening of our 12th learning center in the remote village of Khoupum, bringing digital literacy to over 200 children.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Organic Farming Workshop for Tribal Youth",
    date: "February 22, 2026",
    excerpt: "Over 50 young farmers participated in our three-day intensive workshop on sustainable agricultural practices and market linkages.",
    category: "Livelihood",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Annual Impact Report 2025 Released",
    date: "January 15, 2026",
    excerpt: "Our latest impact report details the progress made in infrastructure and community health across the Noney district over the past year.",
    category: "Report",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  }
];

export default function News() {
  return (
    <div className="pt-32 flex flex-col">
      <section className="bg-secondary text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Updates</h1>
          <p className="text-xl opacity-80 font-light">Follow our journey and stay informed about our latest initiatives in the hills.</p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full">
                <div className="h-56 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 bg-accent px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-secondary">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center text-xs opacity-40 mb-4 font-bold">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-secondary leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="p-8 pt-0 flex justify-between items-center">
                  <Link href={`/news/${post.id}`} className="text-primary font-bold text-sm inline-flex items-center hover:underline">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <button className="text-gray-400 hover:text-primary transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Subscribe to our Newsletter</h2>
          <p className="opacity-70 mb-10 font-light">Get monthly updates on our projects and impact directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Your email address" className="flex-grow p-5 rounded-2xl bg-white/10 border border-white/20 focus:bg-white focus:text-secondary focus:outline-none transition-all" />
            <button type="submit" className="btn btn-accent px-10 py-5">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
