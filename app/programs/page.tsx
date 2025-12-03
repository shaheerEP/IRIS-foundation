import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, Award, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Programs",
  description: "Discover IRIS Foundation's key educational and training programs.",
}

const programs = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Hifzul Qur’an Model Academy",
    description:
      "A residential academy in rural Punjab where children memorize the Qur’an while continuing their mainstream studies in a safe, supportive environment. The academy is designed to nurture not just memorization but also overall growth and responsibility.",
    stats: "Established 2022 · 1 campus · first batch of 15 students",
    images: ["/hqma-1.jpg", "/hqma-2.jpg"], // Replace with your real photos
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Micro schools Imam Rabbani",
    description:
      "A village maktab network providing basic Islamic learning, Qur’an reading, and academic support for children near their homes. Each maktab is a place for trusted mentoring and building lifelong learning habits.",
    stats: "Multiple village maktabs · 500+ children reached",
    images: ["/maktab-1.jpg", "/maktab-2.jpg"],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Rabbani Fellowship",
    description:
      "An intensive fellowship that trains young men and women to become community leaders, teachers, and social workers in backward regions. Fellows learn hands-on social service and are supported in bringing positive change.",
    stats: "200+ fellows trained · Active in 15+ states",
    images: ["/fellow-1.jpg"],
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Village Education & Cultural Centers",
    description:
      "Centers attached to mosques and community buildings that host evening classes, mentoring sessions, and cultural programs. These centers make villages self-sufficient in educational and social activities.",
    stats: "40+ centers active in Punjab and nearby states",
    images: ["/center-1.jpg", "/center-2.jpg"],
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
        
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70" />
        </div>
        <Container size="large" className="relative z-10 pt-24">
          <SectionTitle
            label="Programs"
            title="Our Key Initiatives"
            subtitle="Focused programs that turn village children and youth into tomorrow’s leaders."
            light
          />
        </Container>
      </section>

      {/* Programs list with images */}
   <section className="py-24 bg-background">
  <Container size="large">
    {/* Intro Text */}
    <div className="max-w-3xl mx-auto mb-16 text-center">
      <p className="text-muted leading-relaxed text-lg">
        Each IRIS program addresses an urgent village need: Quranic and formal education for children,
        guidance for youth, and cultural spaces where communities can thrive. These initiatives 
        complement our ongoing relief, food, and water projects to support families in a holistic way.
      </p>
    </div>

    {/* Program Cards */}
    <div className="grid md:grid-cols-2 gap-10">
      {programs.map((program) => (
        <Card
          key={program.title}
          variant="bordered"
          className="group overflow-hidden p-6 hover:shadow-md transition"
        >
          <div className="flex flex-col gap-5 h-full">
            
            {/* Icon + Title */}
            <div className="flex items-center gap-4">
              <span className="text-primary text-3xl">{program.icon}</span>
              <h3 className="text-2xl font-semibold text-foreground">
                {program.title}
              </h3>
            </div>

            {/* Image Gallery */}
            <div className="flex flex-wrap gap-3">
              {Array.isArray(program.images)
                ? program.images.map((img, idx) => (
                    <div
                      key={img + idx}
                      className="relative h-36 w-36 rounded-xl overflow-hidden bg-muted/20"
                    >
                      <Image
                        src={img}
                        alt={`${program.title} image ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))
                : null}
            </div>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed">
              {program.description}
            </p>

            {/* Stats */}
            <p className="text-secondary text-sm font-medium mt-auto">
              {program.stats}
            </p>
          </div>
        </Card>
      ))}
    </div>
  </Container>
</section>


      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary">
        <Container size="large" className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Support Our Programs
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto text-sm md:text-base">
            Your support helps us run academies, maktabs, fellowships, and
            centers that change the course of children’s lives.
          </p>
        </Container>
      </section>
    </>
  )
}
