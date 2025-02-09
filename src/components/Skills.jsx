export default function Skills() {
  return (
    <>
      <div
        className="px-8 py-16 max-w-lg mx-auto lg:max-w-2xl xl:max-w-4xl scroll-mt-16"
        id="skills"
      >
        <div className="text-4xl text-center font-plaster underline decoration-2 underline-offset-2 decoration-green-900 text-green-900">
          Skills
        </div>
        <div className="pt-4 text-sm text-center font-inter text-gray-600">
          The skills, tools, and technologies I excel in are:
        </div>
        <div className="grid grid-cols-3 gap-y-6 place-items-center items-end pt-10 font-poppins text-sm md:grid-cols-4 md:gap-10 lg:grid-cols-6">
          <div className="w-15 text-center">
            <img
              src="./icon-javscript.svg"
              alt="javascript-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">JavaScript</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-typescript.svg"
              alt="typescript-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">TypeScript</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-react.svg"
              alt="react-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">React</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-nextjs.svg"
              alt="nextjs-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Next.js</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-nodejs.svg"
              alt="nodejs-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Node.js</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-express.svg"
              alt="express-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Express.js</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-mongodb.svg"
              alt="mongodb-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">MongoDB</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-graphql.svg"
              alt="graphql-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">GraphQL</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-sass.svg"
              alt="sass-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Sass/Scss</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-tailwindcss.svg"
              alt="figma-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Tailwindcss</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-figma.svg"
              alt="figma-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Figma</div>
          </div>
          <div className="w-15 text-center">
            <img
              src="./icon-git.svg"
              alt="git-logo"
              className="m-auto hover:scale-105 duration-200"
            />
            <div className="pt-2">Git</div>
          </div>
        </div>
      </div>
    </>
  );
}
