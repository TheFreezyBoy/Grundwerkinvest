'use client'
import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, DollarSign, Building } from 'lucide-react';

const cashFlowData = [
  { month: 'Jan', income: 2400, expenses: 800, net: 1600 },
  { month: 'Feb', income: 2400, expenses: 850, net: 1550 },
  { month: 'Mar', income: 2500, expenses: 800, net: 1700 },
  { month: 'Apr', income: 2500, expenses: 900, net: 1600 },
  { month: 'May', income: 2600, expenses: 850, net: 1750 },
  { month: 'Jun', income: 2600, expenses: 800, net: 1800 },
  { month: 'Jul', income: 2700, expenses: 900, net: 1800 },
  { month: 'Aug', income: 2700, expenses: 850, net: 1850 },
  { month: 'Sep', income: 2750, expenses: 800, net: 1950 },
  { month: 'Oct', income: 2800, expenses: 900, net: 1900 },
  { month: 'Nov', income: 2800, expenses: 850, net: 1950 },
  { month: 'Dec', income: 2900, expenses: 800, net: 2100 },
];

const roiData = [
  { year: 'Year 1', roi: 5.2, cumulative: 5.2 },
  { year: 'Year 2', roi: 7.8, cumulative: 13.0 },
  { year: 'Year 3', roi: 8.5, cumulative: 21.5 },
  { year: 'Year 4', roi: 9.2, cumulative: 30.7 },
  { year: 'Year 5', roi: 10.1, cumulative: 40.8 },
  { year: 'Year 6', roi: 10.8, cumulative: 51.6 },
  { year: 'Year 7', roi: 11.5, cumulative: 63.1 },
  { year: 'Year 8', roi: 12.0, cumulative: 75.1 },
  { year: 'Year 9', roi: 12.5, cumulative: 87.6 },
  { year: 'Year 10', roi: 13.0, cumulative: 100.6 },
];

const propertyValueData = [
  { year: '2016', value: 180 },
  { year: '2017', value: 190 },
  { year: '2018', value: 205 },
  { year: '2019', value: 220 },
  { year: '2020', value: 235 },
  { year: '2021', value: 255 },
  { year: '2022', value: 270 },
  { year: '2023', value: 290 },
  { year: '2024', value: 310 },
  { year: '2025', value: 330 },
  { year: '2026', value: 350 },
];

export function InvestmentPerformance() {
  const [activeChart, setActiveChart] = useState<'cashflow' | 'roi' | 'value'>('cashflow');

  return (
    <section id="performance" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">Investment Performance</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real data from our portfolio of managed objects across Germany
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <div className="text-4xl mb-2 text-foreground">€2,650</div>
            <div className="text-muted-foreground mb-1">Avg. Monthly Income</div>
            <div className="text-sm text-accent">+12% from last year</div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-4xl mb-2 text-foreground">9.8%</div>
            <div className="text-muted-foreground mb-1">Average Annual ROI</div>
            <div className="text-sm text-accent">Above market average</div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-accent" />
            </div>
            <div className="text-4xl mb-2 text-foreground">+42%</div>
            <div className="text-muted-foreground mb-1">Objects Value Growth</div>
            <div className="text-sm text-accent">Over 10 years</div>
          </div>
        </div>

        {/* Chart Tabs */}
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          <div className="border-b border-border bg-muted/30">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveChart('cashflow')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${
                  activeChart === 'cashflow'
                    ? 'bg-card border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly Cash Flow
              </button>
              <button
                onClick={() => setActiveChart('roi')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${
                  activeChart === 'roi'
                    ? 'bg-card border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ROI Over 10 Years
              </button>
              <button
                onClick={() => setActiveChart('value')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${
                  activeChart === 'value'
                    ? 'bg-card border-b-2 border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Objects Value Growth
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeChart === 'cashflow' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl mb-2">Expected Monthly Cash Flow</h3>
                  <p className="text-muted-foreground">Average property generating €2,500+ monthly income</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cashFlowData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6c757d" />
                    <YAxis stroke="#6c757d" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="income" fill="#0f3460" name="Rental Income" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="expenses" fill="#d4a574" name="Operating Costs" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="net" fill="#1b4332" name="Net Profit" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeChart === 'roi' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl mb-2">Return on Investment Timeline</h3>
                  <p className="text-muted-foreground">Projected ROI based on €300,000 initial investment</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={roiData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" stroke="#6c757d" />
                    <YAxis stroke="#6c757d" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="roi"
                      stroke="#0f3460"
                      strokeWidth={3}
                      name="Annual ROI %"
                      dot={{ fill: '#0f3460', r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#d4a574"
                      strokeWidth={3}
                      name="Cumulative ROI %"
                      dot={{ fill: '#d4a574', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeChart === 'value' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl mb-2">German Objects Value Growth</h3>
                  <p className="text-muted-foreground">Historical object values in major German cities (indexed to €1,000)</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={propertyValueData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1b4332" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#1b4332" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="year" stroke="#6c757d" />
                    <YAxis stroke="#6c757d" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#1b4332"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                      name="Object Value Index"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
