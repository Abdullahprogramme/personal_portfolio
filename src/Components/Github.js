import { HiAcademicCap } from "react-icons/hi";
import { VscMultipleWindows } from "react-icons/vsc";
import { MdCollections } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const features = [
  {
    name: 'Easy to understand code',
    description:
        'Code is written in a way that is easy to understand and maintain. This makes it easier for other developers to work on the project.',
    icon: GiBrain,
  },
  {
    name: 'Vast variety of codes',
    description:
        'From Data structures to basics of programming, you will find a vast variety of code snippets here.',
    icon: MdCollections,
  },
  {
    name: 'Multiple languages',
    description:
      'Code is written in mutliple languages like C, C++, Python and JavaScript. Some codes are written in more than one language.',
    icon: VscMultipleWindows,
  },
  {
    name: 'Most help to beginners like College students',
    description:
        'Most of the code snippets are written keeping in mind the beginners like college students who are new to programming. This will help them to understand the basics of programming.',
    icon: HiAcademicCap,
  },
]

export default function Github() {
  return (
    <div className="bg-[#0a192f] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl/7 font-semibold text-[#416D19] mb-4 border-b-2 border-pink-300 inline-block">About My Github</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            A collection of code snippets
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Here you will find a collection of code snippets that I have written overtime my own journey of learning programming. Much of these code snippets were written when I was learning programming and I have tried to keep them as simple as possible so that beginners can understand them easily. Hope you find them helpful. Happy coding!
          </p>
        </div>

        
        <div className="flex justify-center mt-12">
            <a
                href="https://github.com/Abdullahprogramme"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base/7 font-semibold rounded-lg text-[#416D19] bg-white hover:bg-[#416D19] hover:text-white"
            >
                Visit Github
            </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-pink-300">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
