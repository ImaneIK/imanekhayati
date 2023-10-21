import Card from './Card'
import { useTheme } from "@/pages/_app";

export default function Projects() {
  const { theme } = useTheme();
  const lightThemeClass = " border border-green-700  inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition"; 
  const darkThemeClass = " border border-gray-200 inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition";
  return (
    <section class="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-4 lg:px-12">
        <div className="mx-auto py-4 text-center">
          
          <h2 className="text-3xl font-extrabold  sm:text-5xl">
          Explore our projects
          </h2>

          <p class="mt-4 ">
          Discover a curated selection of our projects, crafted with passion and dedication.
          </p>
        </div>
            
        <Card/>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className={theme === "light" ? lightThemeClass : darkThemeClass}
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
}
