"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { GraduationCap, School, Users, Award, Building } from "lucide-react"
import { cn } from "@/lib/utils"

// Original Data Preserved
const programs = [
  {
    icon: <School className="w-8 h-8 text-indigo-700" />,
    color: "text-indigo-700",
    bgAccent: "bg-indigo-50",
    borderAccent: "border-indigo-500",
    title: "Desert Rose Academy",
    description: "A modern international school offering quality education with global standards and holistic development.",
    stats: "1 Campus",
    statsLabel: "Est. 2022",
    image: "/desert.jpg", 
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-violet-700" />,
    color: "text-violet-700",
    bgAccent: "bg-violet-50",
    borderAccent: "border-violet-500",
    title: "Imam Rabbani Model Academy",
    description: "A residential academy where children memorize the Qur’an while continuing mainstream studies.",
    stats: "Residency",
    statsLabel: "Est. 2022",
    image: "/center-1.jpg",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-700" />,
    color: "text-emerald-700",
    bgAccent: "bg-emerald-50",
    borderAccent: "border-emerald-500",
    title: "Micro Learning Center",
    description: "Village maktabs providing basic Islamic learning and academic support to remote areas.",
    stats: "500+",
    statsLabel: "Students",
    image: "/education-3.jpg",
  },
  {
    icon: <Award className="w-8 h-8 text-amber-700" />,
    color: "text-amber-700",
    bgAccent: "bg-amber-50",
    borderAccent: "border-amber-500",
    title: "Rabbani Fellowship",
    description: "Training young men and women to become community leaders and social workers.",
    stats: "200+",
    statsLabel: "Fellows",
    image: "/training-1.jpg",
  },
  {
    icon: <Building className="w-8 h-8 text-rose-700" />,
    color: "text-rose-700",
    bgAccent: "bg-rose-50",
    borderAccent: "border-rose-500",
    title: "Village Cultural Centers",
    description: "Community hubs hosting classes, mentoring sessions, and cultural programs.",
    stats: "40+",
    statsLabel: "Centers",
    image: "/center-1.jpg",
  },
]

export function ProgramsOverview() {
  return (
    <section id="programs" className="bg-slate-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12">
        <SectionTitle
          label="Our Impact"
          title="Key Initiatives"
          subtitle="Programs tailored to the needs of every village demographic."
          className="mb-16"
        />

        {/* Reduced vertical gap between rows */}
        <div className="flex flex-col gap-20">
          {programs.map((program, index) => (
            <ProgramSection key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramSection({ program, index }: { program: any; index: number }) {
  const isEven = index % 2 === 0

  // LOGIC: 
  // If isEven (Row 1, 3, 5): Slide entire row in from the LEFT (-100px)
  // If !isEven (Row 2, 4): Slide entire row in from the RIGHT (100px)
  const slideDirection = isEven ? -100 : 100

  return (
    <div className={cn(
      "flex flex-col gap-8 lg:gap-12 items-center justify-center",
      // On Desktop: Alternating sides for layout (Image Left/Right)
      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
    )}>
      
      {/* --- CONTENT SIDE --- */}
      <motion.div 
        className="w-full lg:w-[45%] flex flex-col gap-4"
        // Both sides now share the same 'x' variable to move in unison
        initial={{ opacity: 0, x: slideDirection }}
        whileInView={{ opacity: 1, x: 0 }}
        // amount: 0.4 means 40% of the element must be visible before triggering
        viewport={{ once: true, amount: 0.4 }}
        // Increased duration to 0.9 for slower animation
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
            {program.icon}
            <h3 className={cn("text-xl lg:text-2xl font-bold uppercase tracking-tight", program.color)}>
              {program.title}
            </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed text-justify lg:text-left max-w-lg">
          {program.description}
        </p>

        {/* Stats Block */}
        <div className="flex items-center gap-6 mt-2">
            <div className={cn(
              "px-5 py-2 rounded-lg border-l-4",
              program.bgAccent,
              program.borderAccent
            )}>
                <span className={cn("block text-2xl font-extrabold", program.color)}>
                    {program.stats}
                </span>
                <span className={cn("text-xs font-semibold uppercase opacity-80", program.color)}>
                    {program.statsLabel}
                </span>
            </div>
        </div>
      </motion.div>

      {/* --- IMAGE SIDE --- */}
      <motion.div 
        className="w-full lg:w-[40%]"
        // Same direction as the text
        initial={{ opacity: 0, x: slideDirection }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        // Added a tiny delay (0.2) so the image trails slightly behind the text for a polished look
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative aspect-video w-full">
            {/* Image Container */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-200 border-4 border-white">
                <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                />
            </div>
            
            {/* Decorative colored blob */}
            <div className={cn(
              "absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[1.5rem] opacity-30",
              program.bgAccent.replace('/80', '') 
            )} />
        </div>
      </motion.div>

    </div>
  )
}