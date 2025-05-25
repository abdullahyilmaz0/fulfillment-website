"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Package, Truck, Globe, CheckCircle, ArrowRight, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/lib/translations"

function HomePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">FulfillPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.services}
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.pricing}
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.about}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.contact}
            </Link>
            <Link href="/calculator">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Calculator className="h-4 w-4 mr-2" />
                {t.calculator}
              </Button>
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">{t.heroBadge}</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{t.heroTitle}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t.heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calculator className="h-5 w-5 mr-2" />
                {t.calculateCosts}
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              {t.learnMore}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.ourServices}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.servicesDescription}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Package className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">FBA {t.fulfillment}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{t.fbaDescription}</CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbaFeature1}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbaFeature2}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbaFeature3}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">FBM {t.fulfillment}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{t.fbmDescription}</CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbmFeature1}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbmFeature2}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {t.fbmFeature3}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyChooseUs}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whyChooseUsDescription}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.globalReach}</h3>
              <p className="text-gray-600">{t.globalReachDescription}</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.fastProcessing}</h3>
              <p className="text-gray-600">{t.fastProcessingDescription}</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.secureHandling}</h3>
              <p className="text-gray-600">{t.secureHandlingDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t.readyToStart}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t.readyToStartDescription}</p>
          <Link href="/calculator">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calculator className="h-5 w-5 mr-2" />
              {t.calculateNow}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6" />
                <span className="text-xl font-bold">FulfillPro</span>
              </div>
              <p className="text-gray-400">{t.footerDescription}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.services}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>FBA {t.fulfillment}</li>
                <li>FBM {t.fulfillment}</li>
                <li>{t.calculator}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.company}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.about}</li>
                <li>{t.contact}</li>
                <li>{t.pricing}</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.support}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.helpCenter}</li>
                <li>{t.documentation}</li>
                <li>{t.contactSupport}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FulfillPro. {t.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}
