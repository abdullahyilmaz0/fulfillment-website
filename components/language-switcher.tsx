"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "./language-provider"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <Select value={language} onValueChange={(value: "en" | "de" | "tr") => setLanguage(value)}>
        <SelectTrigger className="w-20 border-0 bg-transparent">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="de">DE</SelectItem>
          <SelectItem value="tr">TR</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
