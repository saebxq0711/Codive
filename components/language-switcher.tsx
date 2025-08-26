"use client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  onLanguageChange: (lang: "es" | "en") => void;
  currentLanguage: "es" | "en";
}

export function LanguageSwitcher({
  onLanguageChange,
  currentLanguage,
}: LanguageSwitcherProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "es" ? "en" : "es")}
      className="flex items-center gap-2 hover:bg-muted transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {currentLanguage === "es" ? "EN" : "ES"}
      </span>
    </Button>
  );
}
