import '/styles/globals.css';
import clientPromise from "/lib/mongodb";
import Home from '../components/Home';
import Footer from '../components/Footer';
import Projects from '@/components/Projects';
import Form from '/components/form'
import Circles from '@/components/Circles';
import Card from '/components/Card'
import { useTheme } from "@/pages/_app";


  // let isConnected=false;


  export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

      const projects = await db
          .collection("projects")
          .find({})
          .sort({ metacritic: -1 })
          .toArray();

      return {
          props: { projects: JSON.parse(JSON.stringify(projects)) },
      };
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    

    // return {
    //   props: { isConnected: true },
    // }
  } catch (e) {
    console.error(e)
    // return {
    //   props: { isConnected: false },
    // }
  }
}

export default function Root({ projects }) {

  const { theme } = useTheme();
  const lightThemeClass = " border border-green-700  inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition"; 
  const darkThemeClass = " border border-gray-200 inline-block rounded bg-transparent border  px-12 py-3 text-sm font-medium transition";
 
  
  return (
    <div>
      {/* <Circles/> */}
      {/* {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )} */}

      <Home/>
      {/* <Projects/> */}
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
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5'>
        {projects.map((project) => (  
        <Card title={project.title} description={project.description} link={project.slug}/>
        ))}
        </div>
        
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
      <Form/>
      <Footer/>
    </div>
    
  );
}
