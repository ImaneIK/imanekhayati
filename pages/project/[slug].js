import { useRouter } from 'next/router';
import Image from 'next/image';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch data for the project based on the slug parameter
  // You can use an API call or any data fetching method here
  // Example: const projectData = fetchDataBySlug(slug);

  return (
    <div className="flex flex-row py-8 ">
        
        <div className=" hidden md:block flex flex-col text-white fill-white ">
            <div className="mx-auto p-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
            </div>
            <nav className="relative flex flex-col py-4 items-center">
                <a href="#" className="relative w-16 p-4 text-purple-900 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                </svg>
                <span
                    className="absolute -top-2 -right-2 h-6 w-6 p-2 flex justify-center items-center text-white rounded-full">3</span>
                </a>
                <a href="#" className="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                </a>
                <a href="#" className="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                </a>
                <a href="#" className="w-16 p-4 border text-gray-700 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                </a>
                <a href="#" className="w-16 p-4 border text-gray-700 rounded-2xl mb-24">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                </a>
                <a href="#" className="w-16 p-4 border text-gray-700 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </a>
            </nav>
        </div>

        <div className=" hidden md:block w-1/3 p-4 flex flex-col h-full w-full overflow-y-scroll text-white">
            <label className="px-3">
                <input className="rounded-lg p-4  transition duration-200 focus:outline-none focus:ring-2 w-full"
                placeholder="Search..." />
            </label>

            <ul className="mt-6">
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                <a href="#" className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                </a>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                <a href="#" className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                </a>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                <a href="#" className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                </a>
                </li>
                <li className="py-5 border-b px-3 transition hover:bg-indigo-100">
                <a href="#" className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Akhil Gautam</h3>
                </a>
                </li>
            </ul>
        </div>
        
        <div className="flex flex-col ">
            <div className="text-white">
                <div className=" ">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.</h2>
                    </div>
                    {/* <Image width={400} height={300} src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="w-full object-cover lg:rounded" style="height: 28em;"></Image> */}
                </div>

                <div className="">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
                                justice. Six draw
                                you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                                resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
                                outlived peculiar rendered led six.</p>

                            <p className="pb-6">Difficulty on insensible reasonable in. From as went he they. Preference themselves me as
                                thoroughly
                                partiality considered on in estimating. Middletons acceptance discovered projecting so is so or. In or
                                attachment inquietude remarkably comparison at an. Is surrounded prosperous stimulated am me discretion
                                expression. But truth being state can she china widow. Occasional preference fat remarkably now projecting
                                uncommonly dissimilar. Sentiments projection particular companions interested do at my delightful. Listening
                                newspaper in advantage frankness to concluded unwilling.</p>

                            <p className="pb-6">Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte
                                discovered
                                uncommonly ask. Morning cousins amongst in mr weather do neither. Warmth object matter course active law
                                spring six. Pursuit showing tedious unknown winding see had man add. And park eyes too more him. Simple excuse
                                active had son wholly coming number add. Though all excuse ladies rather regard assure yet. If feelings so
                                prospect no as raptures quitting.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectPage;