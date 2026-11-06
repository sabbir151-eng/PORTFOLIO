import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SkipLink } from '../components/layout/SkipLink';
import { Button } from '../components/ui/Button';
import { Badge, Tag, Pill } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { profile } from '../data/profile';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { awsCertificates, linkedInCertificates } from '../data/certifications';
import { academics, academicPath, atAGlance, achievements } from '../data/academics';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Award } from 'lucide-react';

export function Home() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/20 selection:text-accent relative">
      <SkipLink />
      <Navbar />

      <main id="main-content" className="pt-24 md:pt-32">
        {/* HERO SECTION */}
        <section id="hero" className="py-16 md:py-24 max-w-container mx-auto px-5">
          <div className="max-w-3xl">
            {/* Availability Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {profile.availability}
            </div>

            <p className="eyebrow mb-3">Hello, I'm</p>

            <h1 className="tracking-tight text-text">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl sm:text-2xl text-accent font-semibold">
              {profile.title}
            </p>

            <p className="mt-5 text-sub text-base sm:text-lg leading-relaxed max-w-2xl">
              {profile.heroSummary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects" variant="primary" size="md">
                View Projects
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                as="a"
                href={profile.socials.github}
                variant="secondary"
                size="md"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                as="a"
                href={profile.socials.linkedin}
                variant="secondary"
                size="md"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">About</p>
          <h2 className="mb-6">Background</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8">
              <div className="space-y-4 text-sub leading-relaxed">
                {profile.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Card>

            <Card className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-text mb-4">Location &amp; Status</h3>
                <div className="space-y-3 text-sm text-sub">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>Hackathon Runner-Up &amp; Active Competitive Programmer</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-line">
                <Button as="a" href="#contact" variant="secondary" size="sm" className="w-full">
                  Get in touch
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">Skills</p>
          <h2 className="mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-base font-bold text-text mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <Tag key={sIdx}>{skill}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">Projects</p>
          <h2 className="mb-6">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <a
                key={proj.id}
                href={proj.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="p-6 h-full flex flex-col justify-between group-hover:border-accent transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="eyebrow">{proj.subtitle}</span>
                      <ExternalLink className="w-4 h-4 text-sub group-hover:text-accent transition-colors shrink-0" />
                    </div>
                    <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors mb-3">
                      {proj.title}
                    </h3>
                    <p className="text-sub text-sm leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
                      {proj.tags.map((tag, tIdx) => (
                        <Pill key={tIdx}>{tag}</Pill>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-semibold text-accent flex items-center gap-1">
                      View on GitHub →
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              as="a"
              href="https://github.com/sabbir151-eng?tab=repositories"
              variant="secondary"
              size="md"
            >
              See all repositories on GitHub →
            </Button>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">Certifications</p>
          <h2 className="mb-6">AWS &amp; Professional Credentials</h2>

          {/* AWS Interactive Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {awsCertificates.map((cert) => (
              <Card
                key={cert.id}
                hoverEffect
                className="p-6 flex flex-col justify-between cursor-pointer group"
                onClick={() => setActiveCert(cert)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveCert(cert);
                  }
                }}
                aria-label={`View certificate for ${cert.title}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-sub mb-3">
                    <span className="eyebrow">{cert.issuer}</span>
                    <Badge variant="accent">Click to View</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sub text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-sub">
                  <span>Issued: {cert.issued}</span>
                  <span className="text-accent group-hover:underline">Open viewer →</span>
                </div>
              </Card>
            ))}
          </div>

          {/* LinkedIn Certificate Cards */}
          <h3 className="text-base font-bold text-text mb-4">Additional Course Specializations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {linkedInCertificates.map((cert) => (
              <a
                key={cert.id}
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="p-5 h-full flex flex-col justify-between group-hover:border-accent">
                  <div>
                    <span className="text-xs font-mono text-accent block mb-1">{cert.issuer}</span>
                    <h4 className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-sub mt-4 pt-3 border-t border-line flex items-center justify-between">
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* ACADEMICS SECTION */}
        <section id="academics" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">Academics</p>
          <h2 className="mb-4">Academic Background</h2>

          {/* Academic Path Summary Strip */}
          <div className="mb-10 p-4 rounded-btn bg-surface border border-line text-xs sm:text-sm font-mono text-sub flex items-center justify-center text-center">
            {academicPath}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Timeline (60% on desktop) */}
            <div className="lg:col-span-7 space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-line">
              {academics.map((item) => {
                const isPursuing = item.status === 'pursuing';
                return (
                  <div key={item.id} className="relative pl-10">
                    {/* Dot */}
                    <div
                      className={`absolute left-1.5 top-2 w-4 h-4 rounded-full border-2 border-surface ${
                        isPursuing
                          ? 'bg-accent ring-4 ring-accent/20 animate-pulse'
                          : 'bg-sub'
                      }`}
                      aria-hidden="true"
                    />

                    <Card className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="eyebrow">{item.level}</span>
                        <Badge variant={isPursuing ? 'accent' : 'default'}>
                          {item.statusBadge}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-bold text-text mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-accent mb-3">{item.institution}</p>

                      <div className="space-y-1.5 pt-3 border-t border-line text-xs sm:text-sm text-sub font-mono">
                        {item.details.map((d, dIdx) => (
                          <div key={dIdx} className="flex justify-between">
                            <span>{d.label}:</span>
                            <span className="font-semibold text-text">{d.value}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* At a glance Card (40% desktop, first on mobile if desired) */}
            <div className="lg:col-span-5">
              <Card className="p-6 md:p-8 bg-surface">
                <h3 className="text-base font-bold text-text mb-4">At a Glance</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-xs font-mono text-sub block">CURRENT DEGREE</span>
                    <span className="font-semibold text-text">{atAGlance.currentDegree}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">UNIVERSITY</span>
                    <span className="font-semibold text-text">{atAGlance.university}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">EXPECTED GRADUATION</span>
                    <span className="font-semibold text-accent">{atAGlance.expectedGraduation}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">LOCATION</span>
                    <span className="font-semibold text-text">{atAGlance.city}</span>
                  </div>
                </div>
              </Card>

              {/* Achievements directly under Academics */}
              <div className="mt-6 space-y-4">
                <h3 className="text-base font-bold text-text">Achievements</h3>
                {achievements.map((ach) => (
                  <Card key={ach.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-text">{ach.title}</h4>
                        <p className="text-xs text-sub mt-1 leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-line max-w-container mx-auto px-5">
          <p className="eyebrow mb-2">Contact</p>
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-sub text-base max-w-xl mb-8">
            I am actively looking for Software Developer / Full-Stack / Frontend internships and junior roles.
            Feel free to reach out directly:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            <a href={`mailto:${profile.email}`} className="block group">
              <Card className="p-5 group-hover:border-accent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-btn bg-accent-soft text-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">EMAIL</span>
                    <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors break-all">
                      {profile.email}
                    </span>
                  </div>
                </div>
              </Card>
            </a>

            <a href={`tel:${profile.phone}`} className="block group">
              <Card className="p-5 group-hover:border-accent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-btn bg-accent-soft text-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">PHONE</span>
                    <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      {profile.phone}
                    </span>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-5 group-hover:border-accent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-btn bg-accent-soft text-accent flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">LINKEDIN</span>
                    <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      SK ABDUL SABBIR
                    </span>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="p-5 group-hover:border-accent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-btn bg-accent-soft text-accent flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-sub block">GITHUB</span>
                    <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                      sabbir151-eng
                    </span>
                  </div>
                </div>
              </Card>
            </a>

            <Card className="p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-btn bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-sub block">LOCATION</span>
                  <span className="text-sm font-semibold text-text">
                    {profile.location}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

      {/* AWS CERTIFICATE VIEWER MODAL */}
      <Modal
        isOpen={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        title={activeCert?.title || "Certificate"}
      >
        {activeCert && (
          <div className="space-y-6">
            <div className="rounded-btn overflow-hidden border border-line bg-surface flex items-center justify-center max-h-[60vh]">
              <img
                src={activeCert.image}
                alt={`${activeCert.title} issued by ${activeCert.issuer}`}
                className="w-full h-auto max-h-[58vh] object-contain"
                loading="eager"
              />
            </div>

            <div className="p-4 rounded-btn bg-muted border border-line space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
                <span className="font-mono text-sub">VALIDATION NUMBER:</span>
                <span className="font-mono font-bold text-accent break-all">
                  {activeCert.validationNumber}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-sub">
                <span>Issued: {activeCert.issued}</span>
                <span>Expires: {activeCert.expires}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <Button
                as="a"
                href={activeCert.pdf}
                download={`${activeCert.id}.pdf`}
                variant="secondary"
                size="md"
              >
                Download PDF
              </Button>
              <Button
                as="a"
                href={activeCert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                Verify at AWS →
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
