import { useState } from "react";
import Head from "next/head";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { QuestionIcon, ChevronDownIcon, WhatsAppIcon } from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import faqData from "@/data/faq.json";

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("general");

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const currentCategory = faqData.faq.categories.find(cat => cat.id === activeCategory);

  return (
    <>
      <Head>
        <title>Preguntas Frecuentes - EvoSystems</title>
        <meta
          content="Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software, procesos, costos y aspectos técnicos."
          name="description"
        />
        <meta
          content="FAQ, preguntas frecuentes, desarrollo software, costos, procesos, tecnologías, EvoSystems"
          name="keywords"
        />
        <meta content="Preguntas Frecuentes - EvoSystems" property="og:title" />
        <meta
          content="Resuelve todas tus dudas sobre nuestros servicios de desarrollo de software."
          property="og:description"
        />

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.faq.categories.flatMap(category =>
                category.questions.map(q => ({
                  "@type": "Question",
                  "name": q.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": q.answer
                  }
                }))
              )
            })
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
            {faqData.faq.title}
          </h1>
          <p className={`${subtitle()} text-slate-300 max-w-3xl mx-auto mb-8`}>
            {faqData.faq.subtitle}
          </p>

          <Chip
            className="bg-blue-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-blue-500/30"
            color="primary"
            size="lg"
            variant="solid"
          >
            💡 {faqData.faq.categories.reduce((total, cat) => total + cat.questions.length, 0)} respuestas útiles
          </Chip>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqData.faq.categories.map((category) => (
              <Button
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                }
                onPress={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "solid" : "flat"}
              >
                {category.name} ({category.questions.length})
              </Button>
            ))}
          </div>

          {/* Questions */}
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "sm" })} text-white mb-8 text-center`}>
              {currentCategory?.name}
            </h2>

            <div className="space-y-4">
              {currentCategory?.questions.map((question) => {
                const isOpen = openQuestions.includes(question.id);
                return (
                  <Card
                    key={question.id}
                    className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <CardBody className="p-0">
                      <Button
                        className="w-full text-left p-6 bg-transparent hover:bg-slate-800/30 rounded-none justify-between"
                        onPress={() => toggleQuestion(question.id)}
                        variant="light"
                      >
                        <div className="flex items-start gap-4">
                          <QuestionIcon className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                          <span className="font-medium text-white text-left">
                            {question.question}
                          </span>
                        </div>
                        <ChevronDownIcon
                          className={`text-slate-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          size={20}
                        />
                      </Button>

                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pl-10">
                            <p className="text-slate-300 mb-4 leading-relaxed">
                              {question.answer}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {question.tags.map((tag) => (
                                <Chip
                                  key={tag}
                                  className="bg-slate-800/50 text-slate-400"
                                  size="sm"
                                  variant="flat"
                                >
                                  {tag}
                                </Chip>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 overflow-hidden">
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        <div className="absolute inset-0 bg-blue-700/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-blue-50 text-xl mb-8">
              Contáctanos directamente por WhatsApp y resolveremos todas tus dudas 
              sobre desarrollo de software de manera personalizada.
            </p>
            <Button
              isExternal
              as={Link}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 shadow-lg"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              Pregunta por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}