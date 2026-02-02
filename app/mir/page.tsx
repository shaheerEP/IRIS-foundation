"use client"

import { Hero } from "@/components/sections/Hero"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, MapPin, Mail, Globe, Phone } from "lucide-react"

import { PageTransitionToast } from "@/components/ui/PageTransitionToast"
import { useState } from "react"

export default function MIRPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    }

    const [showBackground, setShowBackground] = useState(false)

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const }
        }
    }

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.5, delay: 0.2, ease: "easeOut" as const }
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    return (
        <>
            {showBackground && (
                <div className="fixed inset-0 z-[-1]">
                    <Image
                        src="/new/mir-bg.jpg"
                        alt="MIR Background"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                </div>
            )}
            <Hero
                title="Imam Rabbani Center for Education & Guidance"
                subtitle="The symbol signifies that knowledge is the bedrock of all social, cultural, and environmental sustainability in the universe."
                primaryCta={{ label: "Register for Admission", href: "https://docs.google.com/forms/d/e/1FAIpQLSerK_Ci-gXwBgBT95-oQavIeNQ0jJCAV0NDY4MmTcvdJB7xXA/viewform?usp=dialog" }}
                primaryCtaVariant="mir-primary"
                backgroundImage="/hero.jpeg"
                enableZoomEffect={true}
            />

            {/* About the Centre */}
            <section id="about" className="py-24 bg-white">
                <Container size="large">
                    <div className="md:hidden mb-8">
                        <SectionTitle
                            label="About Us"
                            title="About the Centre"
                            subtitle="A pioneering institution in Sirhind, Punjab."
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            className="relative h-[400px] w-full bg-slate-100 overflow-hidden flex items-center justify-center border shadow-lg rounded-3xl"
                        >
                            <Image src="/new/mir-about4.png"
                                alt="Campus Facility"
                                fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                        >
                            <div className="hidden md:block">
                                <SectionTitle
                                    label="About Us"
                                    title="About the Centre"
                                    subtitle="A pioneering institution in Sirhind, Punjab."
                                />
                            </div>
                            <div className="prose text-muted-foreground leading-relaxed">
                                <p className="mb-4">
                                    The Imam Rabbani Centre for Education & Guidance, located in the spiritually rich city of Sirhind, Punjab, stands as a pioneering institution offering a harmonious blend of Islamic scholarship and modern academic education.
                                </p>
                                <p>
                                    Our vision is to provide an integrated learning environment where faith and intellect work together to produce balanced, purpose-driven individuals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Vision & Mission Grid */}
            <section className="py-24 bg-primary">
                <Container size="large">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="bg-white p-8 pt-16 rounded-2xl arch-rounded relative mt-8">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-4 text-primary text-center">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To nurture a generation grounded in faith, enriched with knowledge, and guided by values capable of leading society with wisdom, integrity, and responsibility.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-8 pt-16 rounded-2xl arch-rounded relative mt-8">
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"></div>
                            <h3 className="text-xl font-bold mb-4 text-primary text-center">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To provide holistic education that combines Islamic learning, moral development, and modern knowledge; to guide students towards intellectual excellence, ethical living, and meaningful contribution to society.
                            </p>
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Our Inspiration */}
            <section className="py-24 bg-slate-100">
                <Container size="large">
                    <div className="md:hidden mb-8">
                        <SectionTitle
                            label="Our Roots"
                            title="Our Inspiration"
                            subtitle="SHAIKH ABUBAKER AHMED (Grand Mufti of India)"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            className="order-2 md:order-1"
                        >
                            <div className="hidden md:block">
                                <SectionTitle
                                    label="Our Inspiration"
                                    title="Shaikh Abubaker Ahmed"
                                    subtitle="Grand Mufti of India"
                                />
                            </div>
                            <div className="prose text-muted-foreground leading-relaxed">
                                <p className="mb-4">
                                    This model draws inspiration from the spiritual teachings of Hazrat Mujaddid Alf-Thani and the exemplary educational ecosystem of Markaz Knowledge City in Kerala.
                                </p>
                                <p>
                                    With its blend of religious seminaries, universities, innovation spaces, and community development initiatives, Markaz has become a benchmark for Islamic educational excellence. Imam Rabbani Centre aims to adapt and localize that vision in North India, particularly among the underserved regions of Punjab.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                            className="relative h-[500px] w-full bg-slate-200 overflow-hidden flex items-center justify-center border shadow-lg rounded-[50%] order-1 md:order-2"
                        >
                            <Image src="/ap-usthad.jpeg"
                                alt="Our Inspiration"
                                fill className="object-cover" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Founder's Message */}
            <section className="py-24 bg-white">
                <Container size="large">
                    <div className="md:hidden mb-8">
                        <SectionTitle
                            label="Message from the Founder"
                            title="Dr. Muhammed Abdul Hakkim Azhari"
                            subtitle="Founder, Imam Rabbani Centre for Education & Guidance"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            className="relative h-[500px] w-full bg-slate-100 overflow-hidden flex items-center justify-center border shadow-lg rounded-[50%]"
                        >
                            <Image src="/new/hkmustd.png"
                                alt="Dr. Muhammed Abdul Hakkim Azhari"
                                fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                        >
                            <div className="hidden md:block">
                                <SectionTitle
                                    label="Message from the Founder"
                                    title="Dr. Muhammed Abdul Hakkim Azhari"
                                    subtitle="Founder, Imam Rabbani Centre for Education & Guidance"
                                />
                            </div>
                            <div className="prose text-muted-foreground leading-relaxed">
                                <p className="mb-4">
                                    <span className="text-5xl font-bold text-primary leading-none mr-2 float-left">"</span>At the heart of every revival lies a vision an unwavering belief that transformation begins with education. The Imam Rabbani Centre for Education & Guidance was born from such a vision. Rooted in the historic soil of Sirhind, our mission is to cultivate a generation of young Muslims who are equally grounded in faith and prepared for the modern world.
                                </p>
                                <p className="mb-4">
                                    We refuse to see a divide between sacred knowledge and worldly success; instead, we strive to nurture leaders who embody the balance, clarity, and purpose found in our Deen. This Centre is more than just an institution, it is a movement for the soul, the mind, and the community.
                                </p>
                                <p>
                                    Inspired by the spiritual legacy of Hazrat Mujaddid Alf-Thani and the educational brilliance of the Kerala model, we offer a system that integrates Islamic values, academic excellence, and ethical leadership. It is our hope that this humble initiative contributes to the rise of a confident, educated, and spiritually aware Ummah. May Allah accept our efforts and make this Centre a beacon of guidance for generations to come.
                                    <span className="text-5xl font-bold text-primary leading-none mr-46 float-right">"</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Chairman's Message */}
            <section className="py-24 bg-slate-100">
                <Container size="large">
                    <div className="md:hidden mb-8">
                        <SectionTitle
                            label="Message from the Chairman"
                            title="Muhammed Fazil Nurani"
                            subtitle="Chairman, Imam Rabbani Centre for Education & Guidance"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            className="order-2 md:order-1"
                        >
                            <div className="hidden md:block">
                                <SectionTitle
                                    label="Message from the Chairman"
                                    title="Muhammed Fazil Nurani"
                                    subtitle="Chairman, Imam Rabbani Centre for Education & Guidance"
                                />
                            </div>
                            <div className="prose text-muted-foreground leading-relaxed">
                                <p className="mb-4">
                                    <span className="text-5xl font-bold text-primary leading-none mr-2 float-left">"</span>Every era presents its own challenges, and every challenge demands thoughtful leadership grounded in faith and knowledge. Markaz Imam Rabbani for Education & Guidance emerges as a response to this responsibility—a space dedicated to shaping minds, refining character, and strengthening our community.
                                </p>
                                <p className="mb-4">
                                    By drawing from the spiritual insights of Hazrat Mujaddid Alf-Thani (May God have mercy on him) and embracing structured, forward-looking educational models, we seek to prepare students for both worldly engagement and spiritual fulfillment. Education here is not merely about achievement, but about service, integrity, and purpose.
                                </p>
                                <p>
                                    May Allah bless this Centre, guide its students and teachers, and allow it to contribute meaningfully to the revival and progress of the Community.
                                    <span className="text-5xl font-bold text-primary leading-none mr-46 float-right">"</span>
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInRight}
                            className="relative h-[500px] w-full bg-slate-200 overflow-hidden flex items-center justify-center border shadow-lg rounded-[50%] order-1 md:order-2"
                        >
                            <Image src="/new/fazil-ustd.png"
                                alt="Chairman Name"
                                fill className="object-cover" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Core Components */}
            <section className="py-24 bg-white">
                <Container size="large">
                    <motion.div
                        onViewportEnter={() => setShowBackground(true)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <SectionTitle
                            label="Our Framework"
                            title="Core Components of Education"
                            subtitle="A holistic approach to learning"
                        />
                    </motion.div>
                    <div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    >
                        {[
                            { title: "Islamic Studies", desc: "Classical subjects including Qur'an, Hadith, Fiqh, and Aqidah." },
                            { title: "Modern Curriculum", desc: "Subjects aligned with national education boards, taught using modern technologies." },
                            { title: "Life Style and Etiquettes", desc: "Daily discipline, mentorship, and spiritual development." },
                            { title: "Leadership", desc: "Critical thinking, ethical reasoning, and community service." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-slate-50"
                            >
                                <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 mt-80 bg-primary text-primary-foreground">
                <Container size="large">
                    <div className="md:hidden mb-8">
                        <SectionTitle
                            label="Benefits"
                            title="Why Choose Us?"
                            subtitle="We offer more than just a degree."
                            light
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeInLeft}
                            className="relative h-[400px] w-full bg-white overflow-hidden flex items-center justify-center border shadow-lg rounded-3xl"
                        >
                            <Image
                                src="/new/facility.jpg"
                                alt="Campus Facility"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="overflow-hidden">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInRight}
                            >
                                <div className="hidden md:block">
                                    <SectionTitle
                                        label="Benefits"
                                        title="Why Choose Us?"
                                        subtitle="We offer more than just a degree."
                                        light
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="space-y-4 mt-8"
                            >
                                {[
                                    "Integrated Education: Where Deen and Dunya converge.",
                                    "Character & Leadership: Cultivating values, not just skills.",
                                    "Higher Education Pathways: Opportunity to pursue higher education at premier institutions in India and abroad.",
                                    "Facilities: State-of-the-art classrooms and fully equipped hostel facilities.",
                                    "Language Training: Advanced training in Arabic, Urdu, and English communication.",
                                    "Community Focused: Serving the needs of today's Ummah.",
                                    "Scholarship: Fully funded residential education.",
                                    "Environment: A safe, moral, and inspiring learning environment."
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-secondary-light flex-shrink-0 mt-1" />
                                        <span className="text-primary-foreground/90">{item}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Programs Offered */}
            <section id="programs" className="py-24 bg-white">
                <Container size="large">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <SectionTitle
                            label="Academics"
                            title="Programs Offered"
                            subtitle="Tailored educational pathways for different stages of growth."
                        />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-3 gap-8 mt-12"
                    >
                        {/* Program 1 */}
                        <motion.div variants={fadeInUp} className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
                            <div className="absolute top-0 inset-x-0 h-4 bg-primary/10"></div>
                            <div className="p-10 h-full flex flex-col">
                                <div className="mb-6">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">5 Years</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-2">Islamic Secondary Program</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Eligibility: After Completing Grade 7</p>
                                </div>
                                <p className="text-muted-foreground mb-6">Offers foundational Islamic sciences alongside school-level academics.</p>

                                <div className="mt-auto space-y-2">
                                    <h4 className="font-semibold text-sm">Key Highlights:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                        <li>Jamia Markaz Special Curriculum</li>
                                        <li>Holistic Life Management</li>
                                        <li>Behaviour Formation</li>
                                        <li>Multilingual Campus</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Program 2 */}
                        <motion.div variants={fadeInUp} className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
                            <div className="absolute top-0 inset-x-0 h-4 bg-primary/10"></div>
                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">4 Years</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-2">Bachelor's in Usul al-Din</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Eligibility: After Higher Secondary</p>
                                </div>
                                <p className="text-muted-foreground mb-6">A comprehensive undergraduate program in core Islamic disciplines.</p>

                                <div className="mt-auto space-y-2">
                                    <h4 className="font-semibold text-sm">Key Highlights:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                                        <li>Specialization in Hanafi Fiqh, Hadees and Theology</li>
                                        <li>Foreign Language Proficiency</li>
                                        <li>Field Immersion & Internships</li>
                                        <li>Global Islamic Leadership Training</li>
                                        <li>Pathway to Higher Studies (Al-Azhar)</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Program 3 */}
                        <motion.div variants={fadeInUp} className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
                            <div className="absolute top-0 inset-x-0 h-4 bg-primary/10"></div>
                            <div className="p-8 h-full flex flex-col">
                                <div className="mb-6">
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">1 Year</span>
                                    <h3 className="text-2xl font-bold mt-4 mb-2">Advanced Leadership Program</h3>
                                    <p className="text-sm text-muted-foreground font-medium">Eligibility: For Islamic Studies Graduates</p>
                                </div>
                                <p className="text-muted-foreground mb-6">One-year Advanced Leadership Program designed to refine skills and broaden perspectives.</p>

                                <div className="mt-auto">
                                    {/* Add more details if available */}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-primary/80 text-primary-foreground">

                <Container size="large" className="text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join Our Mission?</h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                            <Button asChild variant="mir-secondary" className="w-full sm:w-auto py-4 px-8 whitespace-normal text-center">
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSerK_Ci-gXwBgBT95-oQavIeNQ0jJCAV0NDY4MmTcvdJB7xXA/viewform?usp=dialog">Register for Admission</Link>
                            </Button>

                            <Button asChild variant="outline" className="w-full sm:w-auto py-4 px-8 whitespace-normal text-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="/contact">Volunteer / Contribute</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full sm:w-auto py-4 px-8 whitespace-normal text-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="/donate">Support a Student</Link>
                            </Button>
                        </div>
                    </motion.div>
                </Container>
            </section>


        </>
    )
}
