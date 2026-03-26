import { TrendingUp, Percent, Users, PieChart } from 'lucide-react';

const metrics = [
  {
    icon: Percent,
    label: 'Average Rental Yield',
    value: '6.5%',
    description: 'Annual rental income as percentage of objects value',
    comparison: 'Above EU average of 4.2%',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Users,
    label: 'Occupancy Rate',
    value: '95%+',
    description: 'Properties rented and generating income',
    comparison: 'Industry standard: 85-90%',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: PieChart,
    label: 'Operating Costs',
    value: '30%',
    description: 'Management, maintenance, and other expenses',
    comparison: 'Net profit margin: 70%',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: TrendingUp,
    label: 'Annual ROI',
    value: '9-12%',
    description: 'Combined rental income and object appreciation',
    comparison: 'Consistently outperforms inflation',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

export function WhyProfitable() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">Profitability</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Why This Business Is Profitable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on proven fundamentals with consistent, predictable returns
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all hover:scale-105"
              >
                <div className={`w-14 h-14 ${metric.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${metric.color}`} />
                </div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <div className={`text-4xl mb-3 ${metric.color}`}>{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-3">{metric.description}</div>
                <div className="text-xs text-accent pt-3 border-t border-border">
                  {metric.comparison}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stability Features */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary to-secondary px-8 py-6">
            <h3 className="text-2xl text-white">Stability & Predictability</h3>
            <p className="text-white/90 mt-2">Why our model minimizes risk</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">Long-Term Contracts</h4>
              <p className="text-muted-foreground mb-4">
                Average tenant stays 3-5 years, ensuring stable, predictable income streams
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Minimum 1-year contracts</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Renewal incentives</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Strict screening process</span>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-secondary rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">High Demand Markets</h4>
              <p className="text-muted-foreground mb-4">
                Focus on German cities with housing shortages and growing populations
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Berlin, Munich, Frankfurt</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Low vacancy rates (&lt;2%)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Growing job markets</span>
                </li>
              </ul>
            </div>

            <div className="p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-full" />
              </div>
              <h4 className="text-xl mb-3 text-foreground">Professional Management</h4>
              <p className="text-muted-foreground mb-4">
                Expert team handles all operations, maintenance, and tenant issues
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Preventive maintenance</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Rapid issue resolution</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Tenant satisfaction focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
