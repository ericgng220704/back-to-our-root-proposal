export default function Intro() {
  return (
    <section className="w-full mt-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Column: Overview & Contact */}
        <div className="flex-1">
          <h2 className="h1 mb-4">Applicant Overview</h2>
          <h3 className="text-2xl font-semibold mb-2">Background</h3>
          <p className="mb-4">
            As a recent graduate of the Business Information Technology program
            at Red River College, I bring a strong academic foundation and
            real-world project experience. With a passion for building engaging,
            community-centered digital solutions, I specialize in front-end
            development, UI animation, and responsive web design. My experience
            with CMS platforms such as Prismic allows for scalable,
            content-driven websites that remain easy to manage.
          </p>
          <p className="mb-4">
            While I am offering to contribute to this project on a volunteer
            basis, I am confident that I can deliver professional, high-quality
            and solid results. I aim to be a valuable and reliable asset to your
            team through dedication, design sense, and technical skills.
          </p>

          <span className="">
            I’d appreciate it if you could take a moment to explore my portfolio
            site first.
          </span>

          <ul className="space-y-2 mb-6 text-sm mt-4">
            <li>
              <span className="font-semibold">Name:</span> Gia Hao Nguyen (Eric)
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +1 431-275-9050
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:giahaonguyen2207@gmail.com"
                className="text-gray-600 hover:underline"
              >
                giahaonguyen2207@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/eric-nguyen-953740261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                linkedin.com/in/eric-nguyen-953740261
              </a>
            </li>
            <li>
              <span className="font-semibold">Portfolio:</span>{" "}
              <a
                href="https://ericgng.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                www.ericgng.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Cover Letter & Projects */}
        <div className="flex-1">
          <img src="/intro.avif" className="object-cover" />
        </div>
      </div>

      <div className="mt-20 w-full lg:px-[15%] sm:px-[5%] px-0">
        <h3 className="text-3xl font-semibold mb-2 text-center">
          Cover Letter & Offer
        </h3>
        <p className="mb-4">
          Dear Brittan and Zoë,
          <br />
          <br />
          I'm excited to submit my proposal to support The Enchanté Network and
          the impactful Back to Our Roots initiative. As a recent graduate
          passionate about community-driven projects and eager to apply my
          expertise, I would like to offer my skills and dedication to this
          meaningful initiative on a volunteer basis, with no expectation of
          compensation.
        </p>
        <p className="mb-6 ">
          I am a Junior Software Developer proficient in modern front-end
          development, including responsive design and engaging animations,
          utilizing technologies such as Next.js, React, TypeScript, and
          Tailwind CSS. My experience also includes working with content
          management systems, particularly Prismic, ensuring easy and effective
          content updates. Additionally, my recent projects, like the Zeni
          Expense Management App, demonstrate my ability to build intuitive,
          user-centered web applications.
        </p>

        <p className="mb-6">
          I am eager to contribute my time and skills toward creating an
          impactful digital presence for Back to Our Roots, supporting the
          critical work your organization does within the community. I look
          forward to the opportunity to discuss my proposal further and how I
          can best support your objectives.
        </p>

        <p className="mb-6">
          Thank you very much for your consideration. I am enthusiastic about
          the potential to collaborate and contribute positively to your team.
        </p>
      </div>
    </section>
  );
}
