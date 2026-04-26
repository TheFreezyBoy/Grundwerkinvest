'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState, useCallback } from 'react'
import {
  SlidersHorizontal,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  X,
} from 'lucide-react'

interface Props {
  cities: { id: string; name: string }[]
  currentCity: string
  currentBudget: string
  currentSort: string
  currentShowSold: boolean
}

export function PropertiesFilters({
  cities,
  currentCity,
  currentBudget,
  currentSort,
  currentShowSold,
}: Props) {
  const t = useTranslations('properties')
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showMobile, setShowMobile] = useState(false)
  const [cityOpen, setCityOpen] = useState(true)
  const [budgetOpen, setBudgetOpen] = useState(true)
  const [sortOpen, setSortOpen] = useState(true)

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      params.delete('page') // reset page on filter change
      router.push(`?${params.toString()}`)
    },
    [router, searchParams],
  )

  const budgets = [
    { label: t('all'), value: '' },
    { label: t('budgetUnder300'), value: 'under300' },
    { label: t('budget300to500'), value: '300to500' },
    { label: t('budgetOver500'), value: 'over500' },
  ]

  const sorts = [
    { label: t('recentlyUpdated'), value: 'date-updated' },
    { label: t('recentlyAdded'), value: 'date-added' },
    { label: t('priceLowHigh'), value: 'price-asc' },
    { label: t('priceHighLow'), value: 'price-desc' },
  ]

  const FilterContent = () => (
    <div className="space-y-4">
      {/* Sort */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">{t('sortBy')}</span>
          </div>
          {sortOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {sortOpen && (
          <div className="p-3 flex flex-col gap-1.5">
            {sorts.map((s) => (
              <button
                key={s.value}
                onClick={() => setParam('sort', s.value)}
                className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                  currentSort === s.value
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filters card */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b border-border">
          <SlidersHorizontal className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">{t('filters')}</span>
        </div>

        {/* City */}
        <div className="border-b border-border">
          <button
            onClick={() => setCityOpen(!cityOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <span className="text-sm text-foreground">{t('city')}</span>
            {cityOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          {cityOpen && (
            <div className="p-3 flex flex-col gap-1.5 max-h-48 overflow-y-auto">
              <button
                onClick={() => setParam('city', '')}
                className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                  !currentCity ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {t('all')}
              </button>
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => setParam('city', city.id)}
                  className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                    currentCity === city.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Budget */}
        <div className="border-b border-border">
          <button
            onClick={() => setBudgetOpen(!budgetOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
          >
            <span className="text-sm text-foreground">{t('budget')}</span>
            {budgetOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
          {budgetOpen && (
            <div className="p-3 flex flex-col gap-1.5">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setParam('budget', b.value)}
                  className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                    currentBudget === b.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Show sold */}
        <div className="p-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={currentShowSold}
              onChange={(e) => setParam('showSold', e.target.checked ? '' : 'false')}
              className="w-4 h-4 rounded border-border accent-accent cursor-pointer"
            />
            <span className="text-sm text-foreground">{t('showSold')}</span>
          </label>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile trigger */}
      <div className="lg:hidden mb-6 w-full">
        <button
          onClick={() => setShowMobile(true)}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-xl text-foreground hover:bg-muted transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5 text-accent" />
          {t('filtersAndSort')}
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile drawer */}
      {showMobile && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowMobile(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background shadow-2xl flex flex-col">
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-accent" />
                <span className="text-lg text-foreground">{t('filtersAndSort')}</span>
              </div>
              <button
                onClick={() => setShowMobile(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 p-4">
              <FilterContent />
              <button
                onClick={() => setShowMobile(false)}
                className="mt-4 w-full px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors"
              >
                {t('applyFilters')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
