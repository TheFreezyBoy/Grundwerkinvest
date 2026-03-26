import { Search, Hammer, Users, DollarSign, Settings, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Property Acquisition',
    description: 'We identify and acquire high-potential residential objects in prime German locations',
    details: ['Market analysis', 'Due diligence', 'Legal compliance', 'Negotiation'],
  },
  {
    icon: Hammer,
    title: 'Renovation & Preparation',
    description: 'Professional renovation to maximize rental value and tenant appeal',
    details: ['Modern upgrades', 'Quality materials', 'Energy efficiency', 'Safety standards'],
  },
  {
    icon: Users,
    title: 'Tenant Placement',
    description: 'We find and screen reliable long-term tenants for your object',
    details: ['Background checks', 'Credit verification', 'Legal contracts', 'Move-in coordination'],
  },
  {
    icon: DollarSign,
    title: 'Monthly Income Generation',
    description: 'Receive consistent monthly rental income directly to your account',
    details: ['Automated payments', 'Transparent reporting', 'Tax documentation', 'Performance tracking'],
  },
  {
    icon: Settings,
    title: 'Ongoing Management',
    description: 'Full objects management including maintenance, tenant relations, and compliance',
    details: ['24/7 maintenance', 'Tenant support', 'Legal compliance', 'Rent optimization'],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Your Business Model, Simplified
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete, turn-key solution from acquisition to ongoing income
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:hidden" />
          
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative pl-20 md:pl-0">
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg z-10">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 z-0">
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="md:pt-24 pt-2">
                    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow h-full">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg mb-3">
                        <span className="text-accent">{index + 1}</span>
                      </div>
                      <h3 className="text-xl mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12">
            <h3 className="text-3xl text-white mb-4">
              Ready to Start Your Real Estate Business?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let us handle everything while you enjoy passive income and long-term wealth building
            </p>
            <a
              href="properties"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all shadow-lg"
            >
              View Available Objects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
