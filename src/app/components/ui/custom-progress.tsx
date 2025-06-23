"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../lib/utils"

interface CustomProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "default" | "academic" | "attendance" | "success"
}

const CustomProgress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, CustomProgressProps>(
  ({ className, value, variant = "default", ...props }, ref) => {
    const getIndicatorColor = () => {
      switch (variant) {
        case "academic":
          return "bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500"
        case "attendance":
          return "bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400"
        case "success":
          return "bg-gradient-to-r from-green-600 via-green-500 to-green-400"
        default:
          return "bg-gradient-to-r from-navy-700 via-navy-600 to-navy-500"
      }
    }

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full bg-navy-100", className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn("h-full w-full flex-1 transition-all", getIndicatorColor())}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    )
  },
)
CustomProgress.displayName = ProgressPrimitive.Root.displayName

export { CustomProgress }
