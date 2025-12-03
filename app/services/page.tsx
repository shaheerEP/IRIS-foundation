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

export default function ServicesPage() {
  const baseImages = services.flatMap((s) => s.images ?? [])
  const infiniteImages = [...baseImages, ...baseImages]

  return (
    <section className=" py-16 overflow-hidden flex flex-col gap-8">
      
   
{/* Text Section */}
      <Container size="" className="text-center text-white">
        <SectionTitle
          label="Other Services"
          title="Holistic Community Development"
          center
          className="text-white" // Added this just in case SectionTitle accepts a className override
        />
        
        <div className="mt-4 max-w-2xl mx-auto">
          {/* Reduced text size to text-sm/text-base */}
          {/* Changed text-muted-foreground to text-gray-200 for a soft white look */}
        <p className="text-sm md:text-base leading-relaxed text-gray-100">
  The IRIS Foundation fosters holistic growth through child <strong className="text-white">Education</strong>, leadership <strong className="text-white">Training</strong>, and community <strong className="text-white">Cultural Centers</strong> in over 40 villages. We also address critical needs with winter <strong className="text-white">Relief</strong> drives, extensive <strong className="text-white">Food Feeding</strong> programs, and our <strong className="text-white">Drops of Life</strong> clean water projects—ensuring dignity and development go hand in hand.
</p>
        </div>
      </Container>

      {/* Infinite Image Slider Section */}
      <div className="w-full relative mt-2">
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex w-fit animate-scroll">
          {infiniteImages.map((src, index) => (
            <div 
              key={`${src}-${index}`} 
              // Slightly reduced image height to match smaller text scale
              className="relative w-[280px] h-[180px] md:w-[350px] md:h-[240px] shrink-0"
            >
              <Image 
                src={src} 
                alt="Service highlight" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 280px, 350px"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}