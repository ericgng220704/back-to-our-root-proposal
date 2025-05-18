export default function Project() {
  return (
    <section className="mt-20">
      <h2 className="h1 mb-10">Project Approach</h2>
      <div className="flex gap-8 md:gap-16 lg:flex-row flex-col">
        <div>
          <p className="mb-4">
            I’m excited to contribute front‑end development and animation
            expertise—I believe I would be a great asset to your team. With my
            ability to translate designs into dynamic, accessible web
            experiences, I’ll focus on:
          </p>

          <ul className="space-y-3 mb-6">
            <li>
              <div className="">
                <span className="font-semibold">
                  Interactive Hero & Section Transitions
                </span>
                <p>
                  Using GSAP and ScrollTrigger to create smooth fade‑ins,
                  parallax effects, page transition, and click‑driven
                  micro‑interactions that guide users through the site.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">
                  Reusable Component‑Level Motion
                </span>
                <p>
                  Animating buttons, cards, and modals to draw attention to key
                  actions—like event registrations and community stories—without
                  overwhelming the user.
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">
                  Responsive & Accessible Performance
                </span>
                <p>
                  Optimizing all animations for desktop and mobile; providing
                  reduced‑motion alternatives and ensuring WCAG 2.1 AA
                  compliance (focus states, keyboard support).
                </p>
              </div>
            </li>
            <li>
              <div className="">
                <span className="font-semibold">
                  Bilingual Toggle Integration
                </span>
                <p>
                  Implementing an English/French switch that works seamlessly
                  with animated elements and maintains accessibility standards.
                </p>
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2 mt-10">
            Timeline & Milestones
          </h3>
          <p>
            I’ll follow the timeline set by the project contractor, ensuring
            that each phase—from kickoff and discovery, through wireframes and
            storyboarding, to build, refinement, QA, and launch—is delivered on
            schedule and to your satisfaction.
          </p>
        </div>
        <div>
          <img src="/project.avif" />
        </div>
      </div>
    </section>
  );
}
