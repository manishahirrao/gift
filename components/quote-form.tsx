"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Send, Gift, Building2, Users, Calendar, Loader2 } from "lucide-react"
import { submitQuoteToGoogleSheets, submitQuoteViaEmail, type QuoteFormData } from "@/lib/google-sheets"

export function QuoteForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    giftType: "",
    quantity: "",
    budget: "",
    occasion: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      setSubmitMessage("Please fill in all required fields")
      return
    }

    setIsLoading(true)
    setSubmitMessage("")

    try {
      // Try Google Sheets first, fallback to email
      const result = await submitQuoteToGoogleSheets(formData as QuoteFormData)
      
      if (result.success) {
        setIsSubmitted(true)
        setSubmitMessage(result.message)
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          giftType: "",
          quantity: "",
          budget: "",
          occasion: "",
          message: "",
        })
      } else {
        // Fallback to email if Google Sheets fails
        const emailResult = await submitQuoteViaEmail(formData as QuoteFormData)
        if (emailResult.success) {
          setIsSubmitted(true)
          setSubmitMessage(emailResult.message)
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            giftType: "",
            quantity: "",
            budget: "",
            occasion: "",
            message: "",
          })
        } else {
          setSubmitMessage("Failed to submit. Please contact us directly.")
        }
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section ref={sectionRef} id="quote" className="py-16 lg:py-20 bg-secondary/50" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left side - Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <span className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Gift className="w-4 h-4" />
                Get Your Custom Quote
              </span>
              <h2
                className="animate-on-scroll opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 sm:mb-6"
                style={{ animationDelay: "100ms" }}
              >
                Let's create the <span className="italic text-accent">perfect gift</span> experience
              </h2>
              <p
                className="animate-on-scroll opacity-0 text-base sm:text-lg text-muted-foreground"
                style={{ animationDelay: "200ms" }}
              >
                Tell us about your gifting needs and we'll craft a personalized proposal within 24 hours.
              </p>
            </div>

            {/* Benefits */}
            <div className="animate-on-scroll opacity-0 space-y-6" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-sm">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-foreground mb-1">Custom Branding</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your company logo and personalized messaging to any gift
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-sm">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-foreground mb-1">Bulk Discounts</h3>
                  <p className="text-sm text-muted-foreground">Special pricing for orders of 25+ gifts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center shadow-sm">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-foreground mb-1">Flexible Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule deliveries for specific dates or ship directly to recipients
                  </p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Right side - Form */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-card-foreground mb-3">
                    Thank you for your inquiry!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our gifting specialists will review your request and get back to you within 24 hours with a
                    personalized quote.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        giftType: "",
                        quantity: "",
                        budget: "",
                        occasion: "",
                        message: "",
                      })
                    }}
                    className="rounded-full"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Rakesh Singh"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="rounded-xl h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="rakesh@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm">Company Name *</Label>
                      <Input
                        id="company"
                        placeholder="vortex Inc."
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="rounded-xl h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="9131379151"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="giftType">Gift Category</Label>
                      <Select value={formData.giftType} onValueChange={(value) => handleChange("giftType", value)}>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive">Executive Gifts</SelectItem>
                          <SelectItem value="team">Team Appreciation</SelectItem>
                          <SelectItem value="client">Client Welcome</SelectItem>
                          <SelectItem value="holiday">Holiday Gifts</SelectItem>
                          <SelectItem value="custom">Custom/Mixed</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Select value={formData.quantity} onValueChange={(value) => handleChange("quantity", value)}>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 gifts</SelectItem>
                          <SelectItem value="11-25">11-25 gifts</SelectItem>
                          <SelectItem value="26-50">26-50 gifts</SelectItem>
                          <SelectItem value="51-100">51-100 gifts</SelectItem>
                          <SelectItem value="100+">100+ gifts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    <div className="space-y-2">
                      <Label htmlFor="occasion">Occasion</Label>
                      <Select value={formData.occasion} onValueChange={(value) => handleChange("occasion", value)}>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employee-appreciation">Employee Appreciation</SelectItem>
                          <SelectItem value="client-gift">Client Gift</SelectItem>
                          <SelectItem value="holiday">Holiday Season</SelectItem>
                          <SelectItem value="onboarding">New Hire Welcome</SelectItem>
                          <SelectItem value="milestone">Company Milestone</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your gifting needs, timeline, or any specific preferences..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="rounded-xl min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base group"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Your Quote
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {submitMessage && (
                    <div className={`text-center text-sm ${submitMessage.includes('success') || submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
