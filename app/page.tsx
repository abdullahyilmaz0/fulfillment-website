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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.whyChooseUs}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whyChooseUsDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Modern Fulfillment Technology"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.globalReach}</h3>
                  <p className="text-gray-600">{t.globalReachDescription}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.fastProcessing}</h3>
                  <p className="text-gray-600">{t.fastProcessingDescription}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.secureHandling}</h3>
                  <p className="text-gray-600">{t.secureHandlingDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.howItWorks}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.howItWorksDescription}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Fulfillment Process Workflow"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.step1Title}</h3>
                  <p className="text-gray-600">{t.step1Description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.step2Title}</h3>
                  <p className="text-gray-600">{t.step2Description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.step3Title}</h3>
                  <p className="text-gray-600">{t.step3Description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.step4Title}</h3>
                  <p className="text-gray-600">{t.step4Description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.ourServices}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.servicesDescription}</p>
          </div>

          {/* FBA Service */}
          <div className="mb-16">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Amazon FBA Warehouse Operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Package className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">FBA {t.fulfillment}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t.fbaDescriptionExpanded}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbaFeature1}</div>
                          <div className="text-sm text-gray-600">{t.fbaFeature1Detail}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbaFeature2}</div>
                          <div className="text-sm text-gray-600">{t.fbaFeature2Detail}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbaFeature3}</div>
                          <div className="text-sm text-gray-600">{t.fbaFeature3Detail}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbaFeature4}</div>
                          <div className="text-sm text-gray-600">{t.fbaFeature4Detail}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">{t.fbaProcessTitle}</h4>
                    <p className="text-orange-800 text-sm">{t.fbaProcessDescription}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* FBM Service */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Truck className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">FBM {t.fulfillment}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{t.fbmDescriptionExpanded}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbmFeature1}</div>
                          <div className="text-sm text-gray-600">{t.fbmFeature1Detail}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbmFeature2}</div>
                          <div className="text-sm text-gray-600">{t.fbmFeature2Detail}</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbmFeature3}</div>
                          <div className="text-sm text-gray-600">{t.fbmFeature3Detail}</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.fbmFeature4}</div>
                          <div className="text-sm text-gray-600">{t.fbmFeature4Detail}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">{t.fbmProcessTitle}</h4>
                    <p className="text-blue-800 text-sm">{t.fbmProcessDescription}</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative h-64 lg:h-auto">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="FBM Fulfillment Center Operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>

          {/* Comparison Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.fbaVsFbmTitle}</CardTitle>
                <CardDescription>{t.fbaVsFbmDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">{t.feature}</th>
                        <th className="text-center py-3 px-4 font-semibold text-orange-600">FBA</th>
                        <th className="text-center py-3 px-4 font-semibold text-blue-600">FBM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 px-4 font-medium">{t.storageLocation}</td>
                        <td className="py-3 px-4 text-center">{t.amazonWarehouses}</td>
                        <td className="py-3 px-4 text-center">{t.yourWarehouse}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">{t.shippingSpeed}</td>
                        <td className="py-3 px-4 text-center">{t.primeEligible}</td>
                        <td className="py-3 px-4 text-center">{t.standardShipping}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">{t.customerService}</td>
                        <td className="py-3 px-4 text-center">{t.amazonHandles}</td>
                        <td className="py-3 px-4 text-center">{t.youHandle}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">{t.inventoryControl}</td>
                        <td className="py-3 px-4 text-center">{t.limited}</td>
                        <td className="py-3 px-4 text-center">{t.fullControl}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">{t.costStructure}</td>
                        <td className="py-3 px-4 text-center">{t.higherFees}</td>
                        <td className="py-3 px-4 text-center">{t.lowerFees}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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
