'use client'

import React from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"

// Data
const services = [
  { images: ["/education-1.jpg", "/education-2.jpg", "/education-3.jpg", "/education-4.jpg"] },
  { images: ["/training-1.jpg", "/training-2.jpg", "/training-3.jpg", "/training-4.jpg"] },
  { images: ["/center-1.jpg", "/center-2.jpg", "/center-3.jpg", "/center-4.jpg"] },
  { images: ["/relief-1.jpg", "/relief-2.jpg", "/relief-3.jpg", "/relief-4.jpg"] },
  { images: ["/feeding-1.jpg", "/feeding-2.jpg", "/feeding-3.jpg", "/feeding-4.jpg"] },
  { images: ["/drops-1.jpg", "/drops-2.jpg", "/drops-3.jpg", "/drops-4.jpg"] },
]

export  function HomeServicesOverview() {
  const baseImages = services.flatMap((s) => s.images ?? [])
  const infiniteImages = [...baseImages, ...baseImages]

  return (
<section className="relative py-16 overflow-hidden flex flex-col gap-8">
  
  {/* --- 1. NEW BACKGROUND LAYERS --- */}
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-secondary" />
  
  {/* Ambient Blobs */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
  </div>

  {/* --- 2. EXISTING CONTENT (Added 'relative z-10' to stay visible) --- */}
  
{/* Text Section */}
<Container size="" className="text-center relative z-10">
  
  {/* Label & Title Section */}
  <div className="mb-6 space-y-2">
    {/* Label: Smaller, uppercase, slightly transparent white for hierarchy */}
    <span className="block text-sm font-bold tracking-widest uppercase text-white md:text-base">
      Other Services
    </span>
    
    {/* Title: Large, bold, purely white */}
    <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
      Holistic Community Development
    </h2>
  </div>

  <div className="mt-4 max-w-2xl mx-auto">
    {/* Paragraph: Changed text-gray-300 to text-white */}
    <p className="text-sm md:text-base leading-relaxed text-white">
      The IRIS Foundation fosters holistic growth through child{" "}
      <strong className="text-white">Education</strong>, leadership{" "}
      <strong className="text-white">Training</strong>, and community{" "}
      <strong className="text-white">Cultural Centers</strong> in over 40
      villages. We also address critical needs with winter{" "}
      <strong className="text-white">Relief</strong> drives, extensive{" "}
      <strong className="text-white">Food Feeding</strong> programs, and our{" "}
      <strong className="text-white">Drops of Life</strong> clean water
      projects—ensuring dignity and development go hand in hand.
    </p>
  </div>
</Container>

{/* Infinite Image Slider Section */}
<div className="w-full relative z-10 mt-2">
  <style jsx global>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 100s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>

  {/* Added 'gap-4' here for distance between images */}
  <div className="flex w-fit animate-scroll gap-4 px-4">
    {infiniteImages.map((src, index) => (
      <div 
        key={`${src}-${index}`} 
        // Added overflow-hidden and asymmetric rounding classes here:
        // rounded-tl-lg & rounded-br-lg: Standard small curve for Top Left and Bottom Right
        // rounded-tr-[40px] & rounded-bl-[40px]: Larger curve for Top Right and Bottom Left
        className="relative w-[280px] h-[180px] md:w-[350px] md:h-[240px] shrink-0 overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-[40px] rounded-bl-[40px]"
      >
        <Image 
          src={src} 
          alt="Service highlight" 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 280px, 350px"
        />
        {/* The overlay will also respect the rounded corners because of overflow-hidden on the parent div */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    ))}
  </div>
</div>

</section>
  )
}