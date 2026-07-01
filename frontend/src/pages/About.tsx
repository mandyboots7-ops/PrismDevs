import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          About <span className="text-indigo-600">Prism Devs</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
          We are a specialized engineering team dedicated to building software that lasts.
        </p>
      </div>

      <div className="space-y-20">
        {/* Who We Are */}
        <section>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Who We Are</h2>
              <p className="mt-4 text-lg text-gray-500">
                Prism Devs is a small, high-impact engineering team. Unlike large agencies with layers of project managers, we are a flat organization of senior engineers who work directly with founders and product teams.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                We ship production-quality software end-to-end. We don't just write code; we design architecture, manage databases, build responsive frontends, and ensure everything is covered by automated tests.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-indigo-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Focused & Agile</h3>
                <ul className="space-y-3 text-indigo-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Direct communication with engineers
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Zero overhead, maximum velocity
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Senior-only talent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-gray-900 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 text-white rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold">Our Approach</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-indigo-400">Clean Architecture</h3>
                <p className="mt-2 text-gray-300">
                  We build on solid foundations. Our code is modular, well-documented, and follows industry best practices, ensuring your product can scale as your business grows.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-400">Rigorous Code Review</h3>
                <p className="mt-2 text-gray-300">
                  Every pull request is reviewed by another senior engineer. We maintain high standards for readability, performance, and security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-indigo-400">Testing-First Mentality</h3>
                <p className="mt-2 text-gray-300">
                  Quality isn't an afterthought. We write unit, integration, and end-to-end tests as we build, preventing regressions and ensuring a stable user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Project-Based</h3>
              <p className="text-gray-500 mb-6">
                Perfect for launching an MVP or a specific major feature. We work with you to define a fixed scope and timeline, delivering a production-ready product at the end.
              </p>
              <Link to="/#pricing" className="text-indigo-600 font-bold hover:text-indigo-500">View MVP Package &rarr;</Link>
            </div>
            <div className="border border-gray-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ongoing Retainers</h3>
              <p className="text-gray-500 mb-6">
                Ideal for teams that need consistent engineering velocity. Think of us as your external product team, handling everything from new features to maintenance and scaling.
              </p>
              <Link to="/#pricing" className="text-indigo-600 font-bold hover:text-indigo-500">View Retainer Plans &rarr;</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Ready to build something great?</h2>
          <p className="mt-4 text-xl text-gray-500 mb-10">
            Let's talk about your project and how we can help you ship faster.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/#pricing"
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="mailto:prism-devs-56cbc43e@ctomail.io"
              className="px-8 py-3 bg-white text-indigo-600 border border-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
