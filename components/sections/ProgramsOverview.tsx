"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Award, Building, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

// UPDATED DATA: varying image counts to test responsiveness
const programs = [
  {
    icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50 border-indigo-100",
    title: "Hifzul Qur’an Academy",
    description: "A residential academy where children memorize the Qur’an while continuing mainstream studies.",
    stats: "Est. 2022 · 1 Campus",
    // SCENARIO: 3 Images
    images: ["/hqma-1.jpg", "/hqma-2.jpg", "/hqma-3.jpg"],
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50 border-emerald-100",
    title: "Micro School Network",
    description: "Village maktabs providing basic Islamic learning and academic support.",
    stats: "500+ Students · 15 Villages",
    // SCENARIO: 2 Images (The classic scatter)
    images: ["/maktab-1.jpg", "/maktab-2.jpg"],
  },
  {
    icon: <Award className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100",
    title: "Rabbani Fellowship",
    description: "Training young men and women to become community leaders and social workers.",
    stats: "200+ Fellows",
    // SCENARIO: 1 Image
    images: ["/fellow-1.jpg"],
  },
  {
    icon: <Building className="w-6 h-6 text-rose-600" />,
    color: "bg-rose-50 border-rose-100",
    title: "Village Cultural Centers",
    description: "Community hubs hosting classes, mentoring sessions, and cultural programs.",
    stats: "40+ Active Centers",
    // SCENARIO: 4 Images (Quad Grid)
    images: ["/center-1.jpg", "/center-2.jpg", "/center-3.jpg", "/center-4.jpg"],
  },
]

export function ProgramsOverview() {
  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      <Container size="large">
        <SectionTitle
          label="Our Impact"
          title="Key Initiatives"
          subtitle="Programs tailored to the needs of every village demographic."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProgramCard({ program, index }: { program: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group h-full flex flex-col overflow-hidden border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 rounded-3xl">
        
     {/* Content Section */}
<div className="p-8 pb-6 flex flex-col gap-4">
  <div className="flex justify-between items-start">
    <div className={`p-3 rounded-2xl ${program.color} w-fit`}>
      {program.icon}
    </div>
    <ArrowUpRight className="text-muted-foreground w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
  </div>

  <div>
    <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
    <p className="text-muted-foreground leading-relaxed line-clamp-2">
      {program.description}
    </p>
  </div>
  
  <div className="mt-1">
    {/* MODIFIED SECTION */}
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
      {/* Optional: Add a subtle dot or icon here if desired */}
      <span className="relative flex h-2 w-2">
         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
         <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      {program.stats}
    </span>
    {/* END MODIFIED SECTION */}
  </div>
</div>

        {/* Dynamic Image Grid Section */}
        <div className="relative flex-grow mt-4 min-h-[280px] w-full bg-gradient-to-b from-transparent to-muted/20 p-6">
           <DynamicImageGrid images={program.images} title={program.title} />
        </div>
      </Card>
    </motion.div>
  )
}

// --- The Magic Component for Handling Images ---
function DynamicImageGrid({ images, title }: { images: string[]; title: string }) {
  const count = images.length
  
  // 1. SINGLE IMAGE (Full width, simple)
  if (count === 1) {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="w-full h-full rounded-2xl overflow-hidden shadow-sm border border-black/5 relative"
      >
        <Image src={images[0]} alt={title} fill className="object-cover" />
      </motion.div>
    )
  }

  // 2. TWO IMAGES (The "Scattered Overlap" look)
  if (count === 2) {
    return (
      <div className="relative w-full h-full">
        {/* Big Back Image */}
        <div className="absolute top-0 left-0 w-[80%] h-[85%] rounded-2xl overflow-hidden border border-white/20 shadow-md z-10">
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </div>
        {/* Small Front Image (Floating) */}
        <motion.div 
          className="absolute bottom-2 right-0 w-[45%] h-[55%] rounded-xl overflow-hidden border-4 border-card shadow-xl z-20"
          whileHover={{ x: -5, y: -5, scale: 1.05 }}
        >
          <Image src={images[1]} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
    )
  }

  // 3. THREE IMAGES (Bento: 1 Large Left, 2 Small Stacked Right)
  if (count === 3) {
    return (
      <div className="grid grid-cols-2 gap-3 h-full w-full">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="relative col-span-1 h-full rounded-2xl overflow-hidden shadow-sm"
        >
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </motion.div>
        
        <div className="col-span-1 grid grid-rows-2 gap-3 h-full">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
             <Image src={images[1]} alt={title} fill className="object-cover" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
             <Image src={images[2]} alt={title} fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    )
  }

  // 4. FOUR OR MORE IMAGES (Quad Grid)
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
      {images.slice(0, 4).map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, zIndex: 10 }} // Pop out effect
          transition={{ duration: 0.2 }}
          className={cn(
            "relative w-full h-full overflow-hidden shadow-sm border border-black/5",
            // Make corners rounded differently for a "collage" feel
            i === 0 ? "rounded-tl-2xl rounded-br-lg" : 
            i === 1 ? "rounded-tr-2xl rounded-bl-lg" :
            i === 2 ? "rounded-bl-2xl rounded-tr-lg" : 
            "rounded-br-2xl rounded-tl-lg"
          )}
        >
          <Image src={img} alt={`${title} ${i}`} fill className="object-cover" />
        </motion.div>
      ))}
    </div>
  )
}