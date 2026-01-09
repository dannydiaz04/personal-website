'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, X } from 'lucide-react'
import { Background } from '@/components/background'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const backgroundY = useTransform(scrollYProgress, [0,1], ['0%', '20%'])

  return (
    <div ref={containerRef} className='relative min-h-screen overflow-hidden'>
      <Background/>
      <div 
        className="fixed inset-0 bg-gradient-to-b from-transparent to-[#000913]/50"
        style={{ transform: `translateY(${backgroundY})` }}
      />

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16 space-y-32">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

function Header() {
  return (
    <header className="text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-white">Daniel Diaz</h1>
      <p className="text-xl text-[#a0a0a0]">Machine Learning Engineer, Data Scientist, and AI Researcher</p>
    </header>
  )
}

function About() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p>Analytical thinker with 10+ years of experience in spacecraft design and mission planning.</p>
          <p>Specialized in optimizing propulsion systems for deep space exploration.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <p>M.S. in Machine Learning And Artificial Intelligence</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <p>3 successful Mars missions</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <p>15 peer-reviewed publications</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="space-y-8">
        <ExperienceItem
          title="Lead Propulsion Engineer"
          company="SpaceX"
          period="2018 - Present"
          description="Spearheading the development of next-generation ion propulsion systems for interplanetary travel."
        />
        <ExperienceItem
          title="Systems Engineer"
          company="NASA Jet Propulsion Laboratory"
          period="2013 - 2018"
          description="Contributed to the design and implementation of the Mars 2020 Perseverance Rover mission."
        />
      </div>
    </section>
  )
}

function ExperienceItem({ title, company, period, description }: { title: string, company: string, period: string, description: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <div className="flex justify-between text-sm text-[#a0a0a0]">
        <span>{company}</span>
        <span>{period}</span>
      </div>
      <p className="text-[#c0c0c0]">{description}</p>
    </div>
  )
}

function Projects() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="Martian Atmosphere Analyzer"
          description="Developed a machine learning model to predict Martian weather patterns using data from the Mars Reconnaissance Orbiter."
        />
        <ProjectCard
          title="Asteroid Mining Feasibility Study"
          description="Led a team in assessing the economic viability of asteroid mining operations in the main belt."
        />
      </div>
    </section>
  )
}

function ProjectCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-4 border border-[#304050] rounded-lg space-y-2 hover:bg-[#304050]/20 transition-colors">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-sm text-[#a0a0a0]">{description}</p>
    </div>
  )
}

function Contact() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <div className="flex justify-center space-x-8">
        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors">
          <X size={24} />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="mailto:dannydiaz04@gmail.com" className="text-[#a0a0a0] hover:text-white transition-colors">
          <Mail size={24} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </section>
  )
}