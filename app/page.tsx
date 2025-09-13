'use client'

import Navbar from '../components/Navbar'
import Section from '../components/Section'
import BlobScene from '../components/three/Blob'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="section container px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-36"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
            >
              Hi, I'm <span className="text-brand-400">Dharmendra</span> —<br />
              Software Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-base sm:text-lg text-white/80 max-w-xl"
            >
              I build fast, delightful web apps with React, Next.js, and modern
              tooling. This portfolio uses 3D, motion, and elegant design —
              because polish matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="btn w-full sm:w-auto text-center"
              >
                See Projects
              </Link>
              <a
                href="/resume/Resume.pdf"
                download
                className="btn w-full sm:w-auto text-center"
              >
                Download Resume
              </a>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dharmendra193728@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Pandit%2C%0A%0AI%20found%20your%20portfolio..."
                target="_blank"
                rel="noreferrer"
                className="link w-full sm:w-auto text-center"
              >
                Contact via Gmail
              </Link>
            </motion.div>
          </div>

          {/* RIGHT (3D) */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-600/30 via-emerald-500/20 to-transparent blur-2xl"></div>
            <div className="relative card w-full h-full flex items-center justify-center">
              <BlobScene />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" className="px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Avatar */}
          <div className="md:col-span-1">
            <div className="card flex flex-col items-center text-center">
              <Image
                src="/avatar.png"
                width={120}
                height={80}
                alt="Avatar"
                className="rounded-full ring-4 ring-blue-500/10"
              />
              <h3 className="mt-4 text-xl font-semibold">Dharmendra Pandit</h3>
              <p className="text-white/70">
                I am a third-year student at JECRC University July,2023 -
                Present, pursuing my B.Tech(CSE).
              </p>
            </div>
          </div>
          {/* About Text */}
          <div className="md:col-span-2">
            <div className="card">
              <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
              <p className="mt-3 text-white/80 leading-relaxed text-sm sm:text-base">
                I’m a MERN stack developer with a strong focus on clean UI/UX,
                performance, and real-world impact. Skilled in React, Next.js,
                Tailwind, Node.js, Express, MongoDB, and Prisma, I also have a
                solid foundation in Java and Data Structures & Algorithms, along
                with growing expertise in Python. I enjoy building applications
                that not only work seamlessly but also feel engaging through
                smooth animations and interactive experiences.
                <br />
                Beyond coding, I love watching web series and traveling to
                explore new places and cultures. These hobbies inspire me with
                fresh ideas and perspectives, which I bring into my projects to
                make them more creative and impactful.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              category: 'Frontend',
              items: [
                'React.js',
                'Next.js',
                'JavaScript',
                'TypeScript',
                'Tailwind CSS',
                'Bootstrap',
              ],
            },
            {
              category: 'Backend',
              items: ['Node.js', 'Express.js', 'RESTful APIs'],
            },
            {
              category: 'Database',
              items: ['MongoDB (Mongoose ODM)', 'Supabase', 'Prisma'],
            },
            {
              category: 'Authentication',
              items: ['Bcrypt.js', 'JWT (JSON Web Token)', 'Passport'],
            },
            {
              category: 'Version Control',
              items: ['Git', 'GitHub'],
            },
            {
              category: 'Hosting & Deployment',
              items: ['Vercel', 'AWS (EC2, S3)', 'Render', 'Amplify'],
            },
            {
              category: 'Programming',
              items: ['Java', 'Python', 'DSA (Basics)'],
            },
          ].map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card p-5 rounded-xl shadow-md bg-white/5 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-brand-400 mb-3">
                {group.category}
              </h3>
              <ul className="space-y-2 text-sm text-white/80">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="hover:text-brand-400 transition-colors duration-200"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" className="px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Experience</h2>
        <div className="relative border-l border-white/20 ml-3">
          {[
            {
              role: 'Frontend Developer Intern',
              company: 'Ease My Campus',
              period: '2023 - 2024',
              desc: 'Contributed to building a student-centric platform by developing responsive frontend components with React and Tailwind, enhancing collaboration and career-readiness features.',
            },
            {
              role: 'Full-Stack Developer Intern',
              company: 'Acadsy',
              period: 'Mar,2024 - Sept,2024',
              desc: 'Delivered full-stack solutions using React, Next.js, Node.js, and MongoDB; implemented APIs, optimized backend performance, and supported scalable deployment for startup projects.',
            },
            {
              role: 'Technical Head Intern',
              company: 'Hostro Ventures private limited',
              period: 'July,2025 - Aug, 2025',
              desc: 'Led technical initiatives by managing UI/UX improvements, mentoring junior developers, and integrating optimized web components for real-world applications',
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-8 ml-4"
            >
              <div className="absolute -left-[7px] mt-2 w-3 h-3 rounded-full bg-brand-400"></div>
              <h3 className="text-lg font-semibold">
                {exp.role} —{' '}
                <span className="text-brand-300">{exp.company}</span>
              </h3>
              <p className="text-white/60 text-sm">{exp.period}</p>
              <p className="mt-2 text-white/80 text-sm">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'E-commerce API',
              desc: 'I built an E-commerce API using Node.js, Express, JWT, bcrypt.js, and express-limiter for secure authentication and request handling. It also integrates ImageKit for image management and EJS for dynamic templating.',
              github: 'https://github.com/dp62042/e-commerce_api_latest.git',
              live: 'https://e-commerce-api-latest-aaj2.onrender.com/',
            },
            {
              title: 'SparkAI',
              desc: 'AI-powered platform for generating text using APIs. Built with React.js, Tailwind CSS, User Auth, and Framer Motion for a sleek user experience.',
              github: 'https://github.com/dp62042/sparkAI.git',
              live: 'https://campustalk.vercel.app',
            },
            {
              title: 'Campus Post',
              desc: 'Community blog platform for sharing knowledge across domains using technologies like HTML, Bootstrap, Node.js, Express, Passport, Cloudinary and MongoDB.',
              github: 'https://github.com/dp62042/campusPost.git',
              live: 'https://campuspost.onrender.com/posts',
            },
            {
              title: 'Hostro',
              desc: 'PG & Co-living made simple — search, book, pay, and live better. Built with Next.js, React, Node.js, MongoDB, Mongoose, JWT, bcrypt.js, ImageKit, Tailwind CSS, and Framer Motion.',
              github: 'https://github.com/dp62042/hostro_v2.git',
              live: 'https://hostro.vercel.app',
            },
          ].map((p, i) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={i}
              className="card block p-5  flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl text-brand-400 font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/75">
                  {p.desc}
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  GitHub →
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Live →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="card">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Let’s build something great
            </h2>
            <p className="mt-2 text-white/80 text-sm sm:text-base">
              Use the Gmail button to open a compose window, or email me
              directly. I reply fast.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                className="btn w-full sm:w-auto text-center"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dharmendra193728@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Pandit%2C%0A%0A"
                target="_blank"
                rel="noreferrer"
              >
                Open Gmail
              </Link>
              <Link
                className="btn w-full sm:w-auto text-center"
                href="mailto:dharmendra193728@gmail.com?subject=Portfolio%20Inquiry"
              >
                Email Link
              </Link>
              <a
                className="btn w-full sm:w-auto text-center"
                href="/resume/Resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = new FormData(form)
                const name = (data.get('name') as string) || ''
                const email = (data.get('email') as string) || ''
                const message = (data.get('message') as string) || ''
                const to = 'dharmendra193728@gmail.com'
                const su = encodeURIComponent(`Inquiry from ${name}`)
                const body = encodeURIComponent(
                  `From: ${name} <${email}>\n\n${message}`
                )
                const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
                window.open(url, '_blank')
              }}
            >
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    name="name"
                    placeholder='e.g. "Dharmendra Pandit"'
                    required
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="e.g. dharmendra193728@gmail.com"
                    name="email"
                    required
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message here..."
                    rows={4}
                    required
                    className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button className="btn w-full sm:w-auto" type="submit">
                  Compose in Gmail
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="container px-4 sm:px-6 md:px-12 pb-10 text-center md:text-left text-xs sm:text-sm text-white/60">
        © {new Date().getFullYear()} Pandit • Built with Next.js, Tailwind,
        Framer Motion, and R3F.
      </footer>
    </main>
  )
}
