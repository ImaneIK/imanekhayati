import Card from './Card'

export default function Projects() {
  return (
    <section class=" text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Explore our projects
          </h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
            
        <Card/>
        
        {/* CTA button */}
        <div class="mt-12 text-center">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-white"
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
}
