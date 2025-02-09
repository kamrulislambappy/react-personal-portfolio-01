export default function Experience() {
  return (
    <>
      <div
        className="px-10 py-16 max-w-xl mx-auto lg:max-w-2xl xl:max-w-3xl scroll-mt-16"
        id="experience"
      >
        <div className="text-4xl text-center font-plaster underline decoration-2 underline-offset-2 decoration-green-900 text-green-900">
          Experience
        </div>
        <div className="pt-4 text-sm text-center font-inter text-gray-600">
          Here`s an overview of my latest projects and accomplishments:
        </div>
        <div className="space-y-7 mt-8 lg:grid lg:place-content-center">
          <div className="py-7 px-6 max-w-lg font-inter rounded-lg bg-gray-50 shadow-md shadow-gray-200 hover:shadow-lg duration-200 lg:max-w-xl xl:max-w-2xl xl:px-8">
            <div className="flex justify-between">
              <img
                src="./logo-linkedin.svg"
                alt="linkedin-logo"
                className="w-20"
              />
              <div className="text-sm text-gray-500">Jan 2022 - Present</div>
            </div>
            <div className="pt-6">
              <div className="font-semibold text-gray-700">
                Full Stack Develoler
              </div>
              <div>
                <ul className="list-disc list-outside text-sm text-gray-700 pt-3 pl-6 space-y-2">
                  <li>Fullstack developer with versatile technical skills.</li>
                  <li>
                    Experienced in front-end and back-end technologies, building
                    dynamic, responsive web applications.
                  </li>
                  <li>Proficient in both frontend and backend development.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-7 px-6 max-w-lg font-inter rounded-lg bg-gray-50 shadow-md shadow-gray-200 hover:shadow-lg duration-200 lg:max-w-xl xl:max-w-2xl xl:px-8">
            <div className="flex justify-between">
              <img src="./logo-fiverr.svg" alt="fiverr-logo" className="w-20" />
              <div className="text-sm text-gray-500">Aug 2017 - Dec 2021</div>
            </div>
            <div className="pt-6">
              <div className="font-semibold text-gray-700">Team Lead</div>
              <div>
                <ul className="list-disc list-outside text-sm text-gray-700 pt-3 pl-6 space-y-2">
                  <li>Managing workload for maximum team efficiency.</li>
                  <li>
                    Optimizing team performance by balancing tasks and
                    responsibilities effectively.
                  </li>
                  <li>Ensuring fair distribution of team tasks.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-7 px-6 max-w-lg font-inter rounded-lg bg-gray-50 shadow-md shadow-gray-200 hover:shadow-lg duration-200 lg:max-w-xl xl:max-w-2xl xl:px-8">
            <div className="flex justify-between">
              <img src="./logo-upwork.svg" alt="upwork-logo" className="w-20" />
              <div className="text-sm text-gray-500">Nov 2015 - Jun 2017</div>
            </div>
            <div className="pt-6">
              <div className="font-semibold text-gray-700">
                Frontend Developer
              </div>
              <div>
                <ul className="list-disc list-outside text-sm text-gray-700 pt-3 pl-6 space-y-2">
                  <li>Specializing in user interface and user experience.</li>
                  <li>
                    Creating dynamic and visually appealing web interfaces with
                    seamless user experiences.
                  </li>
                  <li>Expert in crafting engaging, interactive web designs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
