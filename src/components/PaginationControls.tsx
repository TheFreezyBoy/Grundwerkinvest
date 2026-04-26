'use client'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  currentPage: number
  totalPages: number
  searchParams: Record<string, string | undefined>
}

function buildHref(searchParams: Record<string, string | undefined>, page: number) {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(searchParams)) {
    if (v && k !== 'page') params.set(k, v)
  }
  if (page > 1) params.set('page', String(page))
  const qs = params.toString()
  return qs ? `?${qs}` : '?'
}

export function PaginationControls({ currentPage, totalPages, searchParams }: Props) {
  const t = useTranslations('properties')

  // Build page numbers with ellipsis
  const pages: (number | '...')[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (currentPage > 3) pages.push('...')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push('...')
    pages.push(totalPages)
  }

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(searchParams, currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-sm text-foreground hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          {t('previous')}
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground opacity-50 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          {t('previous')}
        </span>
      )}

      {/* Page numbers */}
      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`ellipsis-${i}`} className="px-2 py-2 text-muted-foreground text-sm">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={buildHref(searchParams, p)}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors ${
              p === currentPage
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-foreground hover:bg-muted'
            }`}
          >
            {p}
          </Link>
        ),
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={buildHref(searchParams, currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-sm text-foreground hover:bg-muted transition-colors"
        >
          {t('next')}
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground opacity-50 cursor-not-allowed">
          {t('next')}
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </div>
  )
}
