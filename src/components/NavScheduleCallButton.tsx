'use client'
import { useScheduleCall } from '@/context/ScheduleCallContext'

export function NavScheduleCallButton({ label }: { label: string }) {
  const { open } = useScheduleCall()
  return (
    <button
      onClick={() => open()}
      className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm"
    >
      {label}
    </button>
  )
}
