import { Hero } from "@/components/sections/Hero"
import { Container } from "@/components/ui/Container"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { AnimatedSection } from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, MapPin, Mail, Globe, Phone } from "lucide-react"

export default function MIRPage() {
    return (
        <>
            <Hero
                title="Imam Rabbani Center for Education & Guidance"
                subtitle="The symbol signifies that knowledge is the bedrock of all social, cultural, and environmental sustainability in the universe."
                primaryCta={{ label: "Register for Admission", href: "#programs" }}
                secondaryCta={{ label: "Partner with Us", href: "#contact" }}
            />

            {/* Founder's Message */}
            <AnimatedSection>
                <section className="py-24 bg-white">
                    <Container size="large">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <SectionTitle
                                    label="Message from the Founder"
                                    title="Dr. Muhammed Abdul Hakkim Azhari"
                                    subtitle="Founder, Imam Rabbani Centre for Education & Guidance"
                                />
                                <div className="prose text-muted-foreground leading-relaxed">
                                    <p className="mb-4">
                                        "At the heart of every revival lies a vision—an unwavering belief that transformation begins with education. The Imam Rabbani Centre for Education & Guidance was born from such a vision. Rooted in the historic soil of Sirhind, our mission is to cultivate a generation of young Muslims who are equally grounded in faith and prepared for the modern world.
                                    </p>
                                    <p className="mb-4">
                                        We refuse to see a divide between sacred knowledge and worldly success; instead, we strive to nurture leaders who embody the balance, clarity, and purpose found in our Deen. This Centre is more than just an institution, it is a movement for the soul, the mind, and the community.
                                    </p>
                                    <p>
                                        Inspired by the spiritual legacy of Hazrat Mujaddid Alf-Thani and the educational brilliance of the Kerala model, we offer a system that integrates Islamic values, academic excellence, and ethical leadership. It is our hope that this humble initiative contributes to the rise of a confident, educated, and spiritually aware Ummah. May Allah accept our efforts and make this Centre a beacon of guidance for generations to come."
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[500px] w-full bg-slate-100 overflow-hidden flex items-center justify-center border shadow-lg arch-mask">
                                <span className="text-muted-foreground mt-20">Founder Image Space</span>
                                {/* <Image src="/path-to-founder-image.jpg" alt="Dr. Muhammed Abdul Hakkim Azhari" fill className="object-cover" /> */}
                            </div>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* About, Vision & Inspiration */}
            <AnimatedSection>
                <section className="py-24 bg-slate-50">
                    <Container size="large">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="glass-card p-8 pt-16 rounded-2xl arch-rounded relative mt-8">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4 text-primary text-center">About the Centre</h3>
                                <p className="text-muted-foreground">
                                    The Imam Rabbani Centre for Education & Guidance, located in the spiritually rich city of Sirhind, Punjab, stands as a pioneering institution offering a harmonious blend of Islamic scholarship and modern academic education. Our vision is to provide an integrated learning environment where faith and intellect work together to produce balanced, purpose-driven individuals.
                                </p>
                            </div>
                            <div className="glass-card p-8 pt-16 rounded-2xl arch-rounded relative mt-8">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4 text-primary text-center">Our Vision</h3>
                                <p className="text-muted-foreground">
                                    At the Imam Rabbani Centre for Education & Guidance, we believe that true education doesn't merely inform—it transforms. We combine knowledge with ethics, and learning with leadership, to prepare students who are spiritually grounded, socially responsible, and intellectually empowered.
                                </p>
                            </div>
                            <div className="glass-card p-8 pt-16 rounded-2xl arch-rounded relative mt-8">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary/20 rounded-full"></div>
                                <h3 className="text-xl font-bold mb-4 text-primary text-center">Our Inspiration</h3>
                                <p className="text-muted-foreground">
                                    This model draws inspiration from the spiritual teachings of Hazrat Mujaddid Alf-Thani and the exemplary educational ecosystem of Markaz Knowledge City in Kerala. With its blend of religious seminaries, universities, innovation spaces, and community development initiatives, Markaz has become a benchmark for Islamic educational excellence. Imam Rabbani Centre aims to adapt and localize that vision in North India, particularly among the underserved regions of Punjab.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* Core Components */}
            <AnimatedSection>
                <section className="py-24 bg-white">
                    <Container size="large">
                        <SectionTitle
                            label="Our Framework"
                            title="Core Components of Education"
                            subtitle="A holistic approach to learning"
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            {[
                                { title: "Islamic Studies", desc: "Classical subjects including Qur'an, Hadith, Fiqh, and Aqidah." },
                                { title: "Modern Curriculum", desc: "Subjects aligned with national education boards." },
                                { title: "Tarbiyah & Adab", desc: "Daily discipline, mentorship, and spiritual development." },
                                { title: "Leadership Training", desc: "Critical thinking, ethical reasoning, and community service." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition-shadow bg-slate-50">
                                    <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* Why Choose Us */}
            <AnimatedSection>
                <section className="py-24 bg-slate-50">
                    <Container size="large">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] w-full bg-white overflow-hidden flex items-center justify-center border shadow-lg arch-mask">
                                <span className="text-muted-foreground mt-20">Campus/Facility Image Space</span>
                            </div>
                            <div>
                                <SectionTitle
                                    label="Benefits"
                                    title="Why Choose Us?"
                                    subtitle="We offer more than just a degree."
                                />
                                <div className="space-y-4 mt-8">
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
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                            <span className="text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* Programs Offered */}
            <AnimatedSection>
                <section id="programs" className="py-24 bg-white">
                    <Container size="large">
                        <SectionTitle
                            label="Academics"
                            title="Programs Offered"
                            subtitle="Tailored educational pathways for different stages of growth."
                        />

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {/* Program 1 */}
                            <div className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
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
                            </div>

                            {/* Program 2 */}
                            <div className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
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
                            </div>

                            {/* Program 3 */}
                            <div className="bg-slate-50 border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col relative">
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
                            </div>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* Call to Action */}
            <AnimatedSection>
                <section className="py-24 bg-primary text-primary-foreground">
                    <Container size="large" className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Join Our Mission?</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            <Button asChild variant="secondary" className="w-full h-auto py-4 whitespace-normal text-center">
                                <Link href="#register">Register for Admission</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full h-auto py-4 whitespace-normal text-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="#partner">Partner with us</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full h-auto py-4 whitespace-normal text-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="#volunteer">Volunteer / Contribute</Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full h-auto py-4 whitespace-normal text-center bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="#sponsor">Support a Student</Link>
                            </Button>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            {/* Footer / Contact Information */}
            <section id="contact" className="py-16 bg-slate-900 text-slate-300">
                <Container size="large">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary mt-1" />
                                    <p>Markaz Imam Rabbani, Sirhind, Fatehgarh Sahib, Punjab, India - 140406</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <a href="mailto:mirpunjab@gmail.com" className="hover:text-white transition-colors">mirpunjab@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-primary" />
                                    <a href="http://www.imamrabbanicentre.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.imamrabbanicentre.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <div className="flex flex-col">
                                        <a href="tel:+917508369371" className="hover:text-white transition-colors">+91-7508369371</a>
                                        <a href="tel:+917508369313" className="hover:text-white transition-colors">7508369313</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-2xl font-light italic text-white/50">"Its Your Tomorrow..."</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
