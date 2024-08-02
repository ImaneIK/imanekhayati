import Card from './Card'
import { useTheme } from "@/pages/_app";


export default function Projects({projects}) {
  

  const { theme } = useTheme();
  const lightThemeClass = " border border-blue-700  inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition"; 
  const darkThemeClass = " border border-gray-200 inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition";
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-4 lg:px-12">
        <div className="mx-auto py-4 text-center">
          
          <h2 className="text-3xl font-extrabold  sm:text-5xl">
          Explore our projects
          </h2>

          <p className="mt-4 ">
          Discover a curated selection of our projects, crafted with passion and dedication.
          </p>
        </div>
        {/* {projects.map((project) => (  
        <Card title={project.title} description={project.description}/>
        ))} */}
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


// export async function getServerSideProps() {
//   try {
//       const client = await clientPromise;
//       const db = client.db("portfolio");

//       const projects = await db
//           .collection("projects")
//           .find({})
//           .sort({ metacritic: -1 })
//           .toArray();

//       return {
//           props: { projects: JSON.parse(JSON.stringify(projects)) },
//       };
//   } catch (e) {
//       console.error(e);
//   }
// }
