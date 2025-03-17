"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useThemeProvider } from "@/components/theme-provider";
import { ThemeColor, themeColorValues } from "@/lib/themes";

export function ThemeToggle() {
  const { themeColor, setThemeColor } = useThemeProvider();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
          <span
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: `hsl(${themeColorValues[themeColor]})` }}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="grid gap-2">
          <div className="space-y-1">
            <h4 className="font-medium leading-none">Theme Colors</h4>
            <p className="text-xs text-muted-foreground">
              Choose a theme color for the UI.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-2">
            {Object.values(ThemeColor).map((color) => {
              const isActive = themeColor === color;
              return (
                <Button
                  key={color}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "justify-center p-0 aspect-square h-auto",
                    isActive &&
                      "border-2 border-primary ring-offset-background ring-2 ring-ring"
                  )}
                  style={{
                    backgroundColor: `hsl(${themeColorValues[color]})`,
                  }}
                  onClick={() => {
                    setThemeColor(color);
                    setOpen(false);
                  }}
                >
                  <span className="sr-only">{color}</span>
                  {isActive && <Check className="h-4 w-4 text-white" />}
                </Button>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
