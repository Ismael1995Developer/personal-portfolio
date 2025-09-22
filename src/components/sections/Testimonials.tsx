import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent } from "@/components/common/Card";
import { testimonials } from "@/content/testimonials";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="depoimentos" background="gradient">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            O que dizem sobre meu trabalho
          </h2>
          <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
            Depoimentos de clientes que confiaram em meus serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm border-white/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-white/60 mb-4" />

                <p className="text-white/90 mb-6 leading-relaxed">
                  &ldquo;{testimonial.depoimento}&rdquo;
                </p>

                <div className="border-t border-white/20 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.nome}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonial.cargo} • {testimonial.empresa}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
