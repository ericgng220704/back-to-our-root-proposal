export default function Tech() {
  return (
    <section className="mt-20">
      <h2 className="h1 mb-8">My Related Techstack</h2>
      <div className="md:grid md:grid-cols-2 md:gap-20 flex flex-col">
        <div>
          <ul className="space-y-3 mb-6">
            <li>
              <div className="">
                <span className="font-semibold text-yellow-800 text-lg">
                  Next.js & React
                </span>
                <p>
                  for server‑side rendering (SEO), static‑site generation (fast
                  load times), and a component‑driven architecture.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold text-yellow-800 text-lg">
                  Prismic
                </span>
                <p>
                  as a headless CMS—its visual editor and content modeling let
                  non‑technical staff create, organize, and translate content
                  (English/French) without developer intervention.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">GSAP (GreenSock)</span>
                <p>
                  with ScrollTrigger to power smooth, performant animations and
                  micro‑interactions.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">Shadcn/ui</span>
                <p>
                  to rapidly assemble accessible, themeable components (built on
                  Radix Primitives) with minimal custom CSS.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-3 mb-6">
            <li>
              <div className="">
                <span className="font-semibold">TypeScript </span>
                <p>for type safety and maintainability.</p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">Tailwind CSS </span>
                <p>
                  for utility‑first styling, responsive design, and rapid
                  iteration.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">Vercel </span>
                <p>
                  for CI/CD, global CDN, and preview URLs on every
                  branch—ensuring rapid updates and consistent performance
                  worldwide.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">AWS </span>
                <p>
                  (e.g. S3 for media storage, CloudFront for asset caching,
                  Lambda or Amplify for any custom serverless needs) to support
                  future scalability and integrations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
