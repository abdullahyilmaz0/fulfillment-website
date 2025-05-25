"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calculator, Package, ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/lib/translations"

function CalculatorPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const [fulfillmentType, setFulfillmentType] = useState("fba")
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
  })
  const [quantity, setQuantity] = useState("")
  const [country, setCountry] = useState("de")

  const calculateCosts = () => {
    const length = Number.parseFloat(dimensions.length) || 0
    const width = Number.parseFloat(dimensions.width) || 0
    const height = Number.parseFloat(dimensions.height) || 0
    const weight = Number.parseFloat(dimensions.weight) || 0
    const qty = Number.parseInt(quantity) || 0

    if (!length || !width || !height || !weight || !qty) return null

    const volume = (length * width * height) / 1000000 // Convert to cubic meters
    const dimensionalWeight = volume * 250 // kg

    const chargeableWeight = Math.max(weight, dimensionalWeight)

    let baseCost = 0
    let pickPackCost = 0
    let storageCost = 0

    if (fulfillmentType === "fba") {
      // FBA pricing (simplified)
      if (chargeableWeight <= 0.5) {
        baseCost = 2.5
      } else if (chargeableWeight <= 1) {
        baseCost = 3.2
      } else {
        baseCost = 3.2 + (chargeableWeight - 1) * 0.85
      }
      pickPackCost = 1.5
      storageCost = volume * 26 * 30 // Monthly storage
    } else {
      // FBM pricing (simplified)
      baseCost = chargeableWeight * 1.2
      pickPackCost = 0.8
      storageCost = volume * 15 * 30 // Monthly storage
    }

    const totalPerUnit = baseCost + pickPackCost + storageCost / qty
    const totalCost = totalPerUnit * qty

    return {
      baseCost: baseCost.toFixed(2),
      pickPackCost: pickPackCost.toFixed(2),
      storageCost: storageCost.toFixed(2),
      totalPerUnit: totalPerUnit.toFixed(2),
      totalCost: totalCost.toFixed(2),
      chargeableWeight: chargeableWeight.toFixed(2),
      volume: volume.toFixed(4),
    }
  }

  const results = calculateCosts()

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
            <Calculator className="h-10 w-10 inline mr-3 text-blue-600" />
            {t.calculatorTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.calculatorDescription}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{t.productDetails}</CardTitle>
              <CardDescription>{t.enterProductInfo}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">{t.fulfillmentType}</Label>
                <Tabs value={fulfillmentType} onValueChange={setFulfillmentType} className="mt-2">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="fba">FBA</TabsTrigger>
                    <TabsTrigger value="fbm">FBM</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div>
                <Label className="text-base font-medium">{t.country}</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="de">{t.germany}</SelectItem>
                    <SelectItem value="tr">{t.turkey}</SelectItem>
                    <SelectItem value="us">{t.unitedStates}</SelectItem>
                    <SelectItem value="uk">{t.unitedKingdom}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="length">{t.length} (cm)</Label>
                  <Input
                    id="length"
                    type="number"
                    value={dimensions.length}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, length: e.target.value }))}
                    placeholder="30"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="width">{t.width} (cm)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={dimensions.width}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, width: e.target.value }))}
                    placeholder="20"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="height">{t.height} (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={dimensions.height}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, height: e.target.value }))}
                    placeholder="10"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">{t.weight} (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={dimensions.weight}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, weight: e.target.value }))}
                    placeholder="0.5"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="quantity">{t.quantity}</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="100"
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{t.costBreakdown}</CardTitle>
              <CardDescription>
                {fulfillmentType === "fba" ? "FBA" : "FBM"} {t.fulfillmentCosts}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-gray-600">{t.chargeableWeight}</div>
                      <div className="font-semibold">{results.chargeableWeight} kg</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-gray-600">{t.volume}</div>
                      <div className="font-semibold">{results.volume} m³</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">{t.baseFulfillmentCost}</span>
                      <span className="font-medium">€{results.baseCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">{t.pickPackCost}</span>
                      <span className="font-medium">€{results.pickPackCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-gray-600">{t.monthlyStorageCost}</span>
                      <span className="font-medium">€{results.storageCost}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-blue-900">{t.costPerUnit}</span>
                      <Badge className="bg-blue-600">€{results.totalPerUnit}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-900">{t.totalCost}</span>
                      <span className="text-2xl font-bold text-blue-600">€{results.totalCost}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-lg">
                    <Info className="h-5 w-5 text-amber-600 mt-0.5" />
                    <div className="text-sm text-amber-800">{t.calculatorDisclaimer}</div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>{t.fillFormToCalculate}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{t.pricingFactors}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-orange-600">FBA {t.factors}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t.fbaFactor1}</li>
                    <li>• {t.fbaFactor2}</li>
                    <li>• {t.fbaFactor3}</li>
                    <li>• {t.fbaFactor4}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-600">FBM {t.factors}</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• {t.fbmFactor1}</li>
                    <li>• {t.fbmFactor2}</li>
                    <li>• {t.fbmFactor3}</li>
                    <li>• {t.fbmFactor4}</li>
                  </ul>
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
      <CalculatorPage />
    </LanguageProvider>
  )
}
