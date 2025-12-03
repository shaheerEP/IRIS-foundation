"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { GraduationCap, School, Users, Award, Building } from "lucide-react"
import { cn } from "@/lib/utils"

// Original Data Restored
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
    image: "/hqma-1.jpg", 
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
    image: "/hqma-2.jpg",
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
    image: "/maktab-1.jpg",
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
    image: "/fellow-1.jpg",
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

  return (
    <div className={cn(
      "flex flex-col gap-8 lg:gap-12 items-center justify-center",
      // On Desktop: Alternating sides
      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
    )}>
      
      {/* --- CONTENT SIDE --- */}
      {/* Reduced width slightly (lg:w-[45%]) to make it more compact */}
      <motion.div 
        className="w-full lg:w-[45%] flex flex-col gap-4"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
            {program.icon}
            {/* Reduced Title Size */}
            <h3 className={cn("text-xl lg:text-2xl font-bold uppercase tracking-tight", program.color)}>
              {program.title}
            </h3>
        </div>

        {/* Description: Reduced font size and max-width */}
        <p className="text-gray-600 text-base leading-relaxed text-justify lg:text-left max-w-lg">
          {program.description}
        </p>

        {/* Stats Block - Compact Version */}
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
      {/* Reduced width to lg:w-[40%] and aspect ratio to make it smaller */}
      <motion.div 
        className="w-full lg:w-[40%]"
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative aspect-video w-full">
            {/* Image Container: Rounded corners + Shadow */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-200 border-4 border-white">
                <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                />
            </div>
            
            {/* Decorative colored blob behind */}
            <div className={cn(
              "absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[1.5rem] opacity-30",
              program.bgAccent.replace('/80', '') // ensuring solid color background class
            )} />
        </div>
      </motion.div>

    </div>
  )
}