'use client'
import { createContext, useContext, useState } from 'react'

interface ScheduleCallContextType {
  isOpen: boolean
  propertyTitle?: string
  open: (propertyTitle?: string) => void
  close: () => void
}

const ScheduleCallContext = createContext<ScheduleCallContextType | null>(null)

export function ScheduleCallProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [propertyTitle, setPropertyTitle] = useState<string | undefined>()

  return (
    <ScheduleCallContext.Provider
      value={{
        isOpen,
        propertyTitle,
        open: (title) => {
          setPropertyTitle(title)
          setIsOpen(true)
        },
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ScheduleCallContext.Provider>
  )
}

export function useScheduleCall() {
  const ctx = useContext(ScheduleCallContext)
  if (!ctx) throw new Error('useScheduleCall must be used within ScheduleCallProvider')
  return ctx
}
