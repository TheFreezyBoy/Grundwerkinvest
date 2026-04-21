import { X, Phone, Mail, User, MessageSquare, ArrowRight } from 'lucide-react'

interface ScheduleCallModalProps {
  isOpen: boolean
  onClose: () => void
  propertyTitle?: string
}

export function ScheduleCallModal({ isOpen, onClose, propertyTitle }: ScheduleCallModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you! Our team will contact you within 24 hours.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-card rounded-2xl border border-border max-w-lg w-full p-8 shadow-2xl relative animate-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h3 className="text-3xl text-foreground mb-2">
            {propertyTitle ? 'Request Information' : 'Schedule a Call'}
          </h3>
          <p className="text-muted-foreground">
            {propertyTitle
              ? `Interested in ${propertyTitle}? Fill out the form below and our team will contact you within 24 hours.`
              : 'Fill out the form below and our investment team will contact you within 24 hours to discuss your investment goals.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4" />
                <span>Full Name</span>
              </div>
            </label>
            <input
              type="text"
              placeholder="John Smith"
              required
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </div>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                <span>Phone Number</span>
              </div>
            </label>
            <input
              type="tel"
              placeholder="+49 30 1234 5678"
              required
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Message / Notes (Optional)</span>
              </div>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your investment goals..."
              className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-muted text-muted-foreground rounded-xl hover:bg-muted/80 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all shadow-lg"
            >
              Send Request
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
