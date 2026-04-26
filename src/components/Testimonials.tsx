import { TrendingUp, Star, Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

const testimonials = [
  {
    content: "Grundwerkinvest provided a seamless experience for my first property investment in Germany. Their expertise and management services are top-notch.",
    author: "James Wilson",
    role: "Property Investor",
    country: "UK",
    rating: 5,
  },
  {
    content: "The transparency and consistent communication made me feel very secure about my investment. The passive income started right after the acquisition.",
    author: "Elena Petrova",
    role: "Tech Entrepreneur",
    country: "Estonia",
    rating: 5,
  },
  {
    content: "Investing in German real estate seemed complicated until I found Grundwerkinvest. They handled everything perfectly.",
    author: "Michael Chang",
    role: "Business Owner",
    country: "Singapore",
    rating: 5,
  },
];

const caseStudy = {
  investor: "Marc Schmidt",
  location: "Switzerland",
  investment: "€1.2M",
  properties: 4,
  monthlyIncome: "€5,400",
  appreciation: "4.2%",
};

export function Testimonials() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">{t('testimonials.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-primary/10 mb-4" />
              <p className="text-lg text-foreground mb-8 flex-1 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Story */}
            <div className="p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-white">{t('testimonials.caseStudyBadge')}</span>
              </div>

              <h3 className="text-3xl text-white mb-4">{t('testimonials.caseStudyTitle')}</h3>

              <p className="text-white/90 mb-6 leading-relaxed">
                {t('testimonials.caseStudyDescription', {
                  investor: caseStudy.investor,
                  location: caseStudy.location,
                  investment: caseStudy.investment,
                  properties: caseStudy.properties,
                })}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white font-medium">{t('testimonials.caseStudyStatsIncome')}</div>
                    <div className="text-white/70 text-sm">Target achieved within 18 months</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white font-medium">{t('testimonials.caseStudyStatsProperties')}</div>
                    <div className="text-white/70 text-sm">Diversified across 3 German cities</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <div className="text-white font-medium">{t('testimonials.caseStudyStatsAppreciation')}</div>
                    <div className="text-white/70 text-sm">Average annual property growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats Visualization */}
            <div className="bg-white/5 backdrop-blur-sm p-12 flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <div className="text-accent text-sm mb-1 uppercase tracking-wider">{t('testimonials.caseStudyStatsIncome')}</div>
                  <div className="text-5xl text-white font-bold">{caseStudy.monthlyIncome}</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="text-accent text-sm mb-1 uppercase tracking-wider">{t('testimonials.caseStudyStatsProperties')}</div>
                    <div className="text-3xl text-white font-bold">{caseStudy.properties}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                    <div className="text-accent text-sm mb-1 uppercase tracking-wider">{t('testimonials.caseStudyStatsAppreciation')}</div>
                    <div className="text-3xl text-white font-bold">{caseStudy.appreciation}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
