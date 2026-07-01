import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Showcasing our commitment to quality-first engineering and rapid delivery.
          </p>
        </div>
      </div>

      {/* Featured Case Study */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Featured: SaaS Starter Kit
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                A robust, production-ready foundation for modern SaaS applications. This project demonstrates our end-to-end capabilities from architecture to deployment.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-bold">Backend:</span> Clean Express/TypeScript implementation with dedicated health and business API routes.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-bold">Frontend:</span> Modern React/Vite/Tailwind UI with responsive design and optimized builds.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-bold">Quality:</span> 12 automated tests (100% passing) ensuring reliability across the stack.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-bold">Integrations:</span> Seamless Stripe checkout integration for subscription or one-time payments.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-12 0 9 9 0 0112 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    <span className="font-bold">Architecture:</span> Unified npm workspaces monorepo for efficient development and shared logic.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://github.com/mandyboots7-ops/PrismDevs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-indigo-600 rounded-lg shadow-xl overflow-hidden aspect-video flex items-center justify-center text-white text-2xl font-bold p-8 text-center">
                Built with precision.<br/>Tested with rigour.<br/>Shipped with speed.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How an Engagement Works */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How an Engagement Works</h2>
            <p className="mt-4 text-lg text-gray-500">Our structured approach ensures your project is delivered on time and at peak quality.</p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
              {[
                { step: '01', title: 'Discovery & Scope', desc: 'We define the MVP requirements and success criteria.' },
                { step: '02', title: 'Architecture', desc: 'Design of the data model, API spec, and UI components.' },
                { step: '03', title: 'Build & Test', desc: 'Rapid development with 100% automated test coverage.' },
                { step: '04', title: 'Review', desc: 'Rigorous internal and client-facing code and QA review.' },
                { step: '05', title: 'Deploy', desc: 'Production-ready deployment to your cloud of choice.' },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-4xl font-black text-indigo-200">{item.step}</div>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Showcase */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Tech Stack</h2>
            <p className="mt-4 text-lg text-gray-500">We use industry-standard tools to build maintainable, high-performance software.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              'TypeScript', 'React', 'Tailwind CSS', 'Node.js/Express', 'SQLite/PostgreSQL', 'Stripe', 'Vitest', 'GitHub'
            ].map((tech) => (
              <span key={tech} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready for your project?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Let's build something exceptional together.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
