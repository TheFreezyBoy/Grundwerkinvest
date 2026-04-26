'use client'
import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ProfitCalculator() {
  const t = useTranslations()
  const [investment, setInvestment] = useState(300000)
  
  // Calculation constants
  const rentalYield = 0.065; // 6.5% annual rental yield
  const occupancyRate = 0.95;
  const operatingCostRate = 0.30; // 30% of rental income
  const propertyAppreciation = 0.04; // 4% annual property appreciation
  
  // Calculate monthly income
  const annualRentalIncome = investment * rentalYield;
  const effectiveRentalIncome = annualRentalIncome * occupancyRate;
  const operatingCosts = effectiveRentalIncome * operatingCostRate;
  const netOperatingIncome = effectiveRentalIncome - operatingCosts;
  const monthlyIncome = netOperatingIncome / 12;
  
  // Calculate yearly totals
  const yearlyIncome = netOperatingIncome;
  const yearlyAppreciation = investment * propertyAppreciation;
  const totalYearlyReturn = yearlyIncome + yearlyAppreciation;
  const roi = (totalYearlyReturn / investment) * 100;
  
  // 10-year projection
  const tenYearIncome = netOperatingIncome * 10;
  const tenYearValue = investment * Math.pow(1 + propertyAppreciation, 10);
  const tenYearAppreciation = tenYearValue - investment;
  const tenYearTotal = tenYearIncome + tenYearAppreciation;

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm text-white">{t('profitCalculator.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            {t('profitCalculator.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('profitCalculator.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl mb-6 text-foreground">{t('profitCalculator.inputTitle')}</h3>
            
            <div className="mb-8">
              <label className="block mb-3 text-foreground">
                {t('profitCalculator.inputLabel')}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xl">
                  €
                </span>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  min={100000}
                  max={2000000}
                  step={10000}
                  className="w-full pl-10 pr-4 py-4 text-2xl border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-input-background"
                />
              </div>
              
              <input
                type="range"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                min={100000}
                max={2000000}
                step={10000}
                className="w-full mt-4"
                style={{
                  accentColor: '#d4a574',
                }}
              />
              
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>€100K</span>
                <span>€2M</span>
              </div>
            </div>

            {/* Assumptions */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="mb-4 text-foreground">{t('profitCalculator.assumptionsTitle')}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('profitCalculator.assumptionsYield')}</span>
                  <span className="text-foreground">{(rentalYield * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('profitCalculator.assumptionsOccupancy')}</span>
                  <span className="text-foreground">{(occupancyRate * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('profitCalculator.assumptionsCosts')}</span>
                  <span className="text-foreground">{(operatingCostRate * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('profitCalculator.assumptionsAppreciation')}</span>
                  <span className="text-foreground">{(propertyAppreciation * 100).toFixed(1)}%/year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Income */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-white/80 mb-1">{t('profitCalculator.resultsMonthlyTitle')}</div>
                  <div className="text-5xl text-white">€{monthlyIncome.toLocaleString('de-DE', { maximumFractionDigits: 0 })}</div>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-white/70">{t('profitCalculator.resultsMonthlyDescription')}</div>
            </div>

            {/* Annual Returns */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-white/80 mb-1">{t('profitCalculator.resultsRoiTitle')}</div>
                  <div className="text-5xl text-white">{roi.toFixed(1)}%</div>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-white/70 text-sm mb-1">{t('profitCalculator.resultsRoiRental')}</div>
                  <div className="text-2xl text-white">€{yearlyIncome.toLocaleString('de-DE', { maximumFractionDigits: 0 })}</div>
                </div>
                <div>
                  <div className="text-white/70 text-sm mb-1">{t('profitCalculator.resultsRoiAppreciation')}</div>
                  <div className="text-2xl text-white">€{yearlyAppreciation.toLocaleString('de-DE', { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
            </div>

            {/* 10-Year Projection */}
            <div className="bg-accent rounded-2xl p-8 shadow-xl">
              <h4 className="text-accent-foreground mb-6">{t('profitCalculator.resultsProjectionTitle')}</h4>
              <div className="text-5xl text-accent-foreground mb-6">
                €{tenYearTotal.toLocaleString('de-DE', { maximumFractionDigits: 0 })}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-accent-foreground/70 text-sm mb-1">{t('profitCalculator.resultsProjectionIncome')}</div>
                  <div className="text-xl text-accent-foreground">€{tenYearIncome.toLocaleString('de-DE', { maximumFractionDigits: 0 })}</div>
                </div>
                <div>
                  <div className="text-accent-foreground/70 text-sm mb-1">{t('profitCalculator.resultsProjectionValue')}</div>
                  <div className="text-xl text-accent-foreground">€{tenYearValue.toLocaleString('de-DE', { maximumFractionDigits: 0 })}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full px-8 py-4 bg-white text-primary text-center rounded-xl hover:bg-white/90 transition-all shadow-lg"
            >
              {t('profitCalculator.cta')}
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-white/60 text-sm">
          {t('profitCalculator.disclaimer')}
        </div>
      </div>
    </section>
  );
}
