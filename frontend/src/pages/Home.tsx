const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">High-Quality Software</span>
          <span className="block text-indigo-600">Built for SaaS Founders</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Prism Devs is a small, focused engineering team that ships production-quality software end-to-end. Architecture, backend, frontend, and tests — without the overhead.
        </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#pricing"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="mailto:prism-devs-56cbc43e@ctomail.io"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 border border-gray-100 shadow-sm">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    {/* Icon placeholder */}
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Rapid Delivery</h3>
                <p className="mt-5 text-base text-gray-500">
                  We focus on high shipping cadence and clear architecture to get your product to market faster.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 border border-gray-100 shadow-sm">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Production Quality</h3>
                <p className="mt-5 text-base text-gray-500">
                  Every line of code is reviewed and tested to ensure stability and maintainability.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8 border border-gray-100 shadow-sm">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">End-to-End Build</h3>
                <p className="mt-5 text-base text-gray-500">
                  From architecture and database design to frontend UI and tests, we handle it all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" className="mt-32">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services & Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Simple, transparent pricing for high-end engineering.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* SaaS MVP Builder Card */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">SaaS MVP Builder</h3>
              <p className="mt-4 text-gray-500">Fully functional, production-ready MVP shipped in 2–4 weeks.</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">$4,500</span>
                <span className="text-base font-medium text-gray-500"> total</span>
              </div>
              <p className="mt-1 text-sm text-gray-400 font-medium italic">50% upfront / 50% upon QA approval</p>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Custom database schema design",
                  "Robust backend API routes",
                  "Modern responsive frontend UI",
                  "100% automated test coverage",
                  "Production-ready deployment code"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100 text-center">
              <a 
                href="https://buy.stripe.com/7sYeVfdti1kG2tN6Kw3ZK01"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Secure MVP Package
              </a>
            </div>
          </div>

          {/* Retainer Card */}
          <div className="bg-white border-2 border-indigo-600 rounded-2xl shadow-lg flex flex-col overflow-hidden relative transform scale-105">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
              Popular Choice
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900">Engineering Retainer</h3>
              <p className="mt-4 text-gray-500">Predictable development velocity without employee overhead.</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-gray-900">$2,500</span>
                <span className="text-base font-medium text-gray-500"> / month</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Technical Lead oversight",
                  "Continuous feature shipping",
                  "Expert database management",
                  "Automated regression testing",
                  "Integration testing focus",
                  "Flexible scaling of velocity"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-base text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50 border-t border-gray-100 text-center">
              <a 
                href="https://buy.stripe.com/28EaEZ2OE9Rc5FZb0M3ZK02"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start Retainer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
