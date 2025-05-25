"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Package,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/lib/translations"

function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
    monthlyVolume: "",
    currentProvider: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <Card className="max-w-md mx-4 border-0 shadow-lg">
          <CardContent className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.thankYou}</h2>
            <p className="text-gray-600 mb-6">{t.contactSubmissionMessage}</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">{t.backToHome}</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.back}
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">FulfillPro</span>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <MessageSquare className="h-10 w-10 inline mr-3 text-blue-600" />
            {t.contactUs}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.contactDescription}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{t.getInTouch}</CardTitle>
                <CardDescription>{t.getInTouchDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{t.email}</div>
                    <div className="text-gray-600">contact@fulfillpro.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">{t.phone}</div>
                    <div className="text-gray-600">+49 30 12345678</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium">{t.address}</div>
                    <div className="text-gray-600">
                      Musterstraße 123
                      <br />
                      10115 Berlin, Germany
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium">{t.businessHours}</div>
                    <div className="text-gray-600">
                      {t.mondayFriday}: 9:00 - 18:00
                      <br />
                      {t.saturday}: 10:00 - 16:00
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{t.quickSupport}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-sm">{t.salesTeam}</div>
                    <div className="text-xs text-gray-600">sales@fulfillpro.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Headphones className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-medium text-sm">{t.technicalSupport}</div>
                    <div className="text-xs text-gray-600">support@fulfillpro.com</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t.sendMessage}</CardTitle>
                <CardDescription>{t.sendMessageDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t.firstName} *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t.lastName} *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">{t.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">{t.company}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  {/* Inquiry Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>{t.inquiryType} *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t.selectInquiryType} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fba">{t.fbaServices}</SelectItem>
                          <SelectItem value="fbm">{t.fbmServices}</SelectItem>
                          <SelectItem value="pricing">{t.pricingInquiry}</SelectItem>
                          <SelectItem value="partnership">{t.partnership}</SelectItem>
                          <SelectItem value="technical">{t.technicalSupport}</SelectItem>
                          <SelectItem value="other">{t.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>{t.monthlyVolume}</Label>
                      <Select
                        value={formData.monthlyVolume}
                        onValueChange={(value) => handleInputChange("monthlyVolume", value)}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder={t.selectVolume} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-100">0-100 {t.orders}</SelectItem>
                          <SelectItem value="100-500">100-500 {t.orders}</SelectItem>
                          <SelectItem value="500-1000">500-1,000 {t.orders}</SelectItem>
                          <SelectItem value="1000-5000">1,000-5,000 {t.orders}</SelectItem>
                          <SelectItem value="5000+">5,000+ {t.orders}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">{t.subject} *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{t.message} *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <div>
                    <Label>{t.currentProvider}</Label>
                    <Input
                      value={formData.currentProvider}
                      onChange={(e) => handleInputChange("currentProvider", e.target.value)}
                      placeholder={t.currentProviderPlaceholder}
                      className="mt-1"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-5">
                        {t.agreeToTerms}{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          {t.termsAndConditions}
                        </Link>{" "}
                        {t.and}{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          {t.privacyPolicy}
                        </Link>
                        . *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                      />
                      <Label htmlFor="subscribeNewsletter" className="text-sm leading-5">
                        {t.subscribeNewsletter}
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting || !formData.agreeToTerms}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t.sendMessage}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t.frequentlyAsked}</CardTitle>
              <CardDescription className="text-center">{t.frequentlyAskedDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.faq1Question}</h3>
                    <p className="text-gray-600">{t.faq1Answer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.faq2Question}</h3>
                    <p className="text-gray-600">{t.faq2Answer}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.faq3Question}</h3>
                    <p className="text-gray-600">{t.faq3Answer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.faq4Question}</h3>
                    <p className="text-gray-600">{t.faq4Answer}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <ContactPage />
    </LanguageProvider>
  )
}
