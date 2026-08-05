import { Reveal } from "@/components/ui-brand/Reveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "northside",
    title: "Northside Dental",
    category: "Website & Patient Portal",
    description: "A complete digital overhaul for a premium dental practice, increasing online bookings by 42%.",
    tags: ["Web Design", "Development", "SEO"],
    image: "linear-gradient(145deg, oklch(0.95 0.05 200), oklch(0.9 0.1 230))",
    tint: "oklch(0.6 0.15 220)"
  },
  {
    id: "fern",
    title: "Fern Coffee Roasters",
    category: "E-commerce & Brand",
    description: "Modern headless Shopify storefront with a unified brand voice that speaks to specialty coffee lovers.",
    tags: ["E-commerce", "Brand Voice", "Social"],
    image: "linear-gradient(145deg, oklch(0.95 0.05 30), oklch(0.9 0.1 40))",
    tint: "oklch(0.6 0.15 40)"
  },
  {
    id: "studio-vaal",
    title: "Studio Vaal",
    category: "Editorial & Content",
    description: "An elegant, minimalist content platform for a boutique architecture firm, showcasing their portfolio globally.",
    tags: ["Editorial", "Newsletter", "Web Design"],
    image: "linear-gradient(145deg, oklch(0.95 0.05 320), oklch(0.9 0.1 340))",
    tint: "oklch(0.6 0.15 320)"
  }
];

export function Portfolio() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[color:var(--surface)]">
      <div className="container-page px-4 sm:px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Recent Work
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed">
              We don't just build websites. We build digital presences that work seamlessly together.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:gap-12 grid-cols-1">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <div className="group relative rounded-3xl border border-border bg-white overflow-hidden shadow-[0_20px_40px_-20px_rgba(20,20,60,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(20,20,60,0.2)] transition-all duration-500 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row">
                  {/* Image Area */}
                  <div className="md:w-1/2 p-4 md:p-6 lg:p-8">
                    <div 
                      className="w-full h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden relative"
                      style={{ background: project.image }}
                    >
                      {/* Placeholder for an actual image, using subtle gradients/UI elements for now */}
                      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2/3 h-2/3 rounded-xl bg-white/50 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                           <span className="font-semibold text-lg opacity-50" style={{ color: project.tint }}>{project.title} Preview</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[color:var(--ink-soft)]">
                        {project.category}
                      </span>
                      <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowUpRight size={18} className="text-[color:var(--ink)]" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--ink)] mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg text-[color:var(--ink-soft)] leading-relaxed mb-8 max-w-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-[color:var(--surface)] text-[color:var(--ink-soft)] text-xs sm:text-sm font-medium border border-border/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
