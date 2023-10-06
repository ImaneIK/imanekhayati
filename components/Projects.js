import Card from './Card'

export default function Projects() {
  return (
    <section class=" text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-12">
        <div class="mx-auto py-4 text-center">
          
          <h2 className="text-3xl font-extrabold text-gray-300 sm:text-5xl">
          Explore our projects
          </h2>

          <p class="mt-4 text-gray-300">
          Discover a curated selection of our projects, crafted with passion and dedication.
          </p>
        </div>
            
        <Card/>
        
        {/* CTA button */}
        <div class="mt-12 text-center">
          <a
            href="/portfolio"
            class="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-white"
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
}
