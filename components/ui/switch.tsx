"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer border-[#7789A9] inline-flex h-[12px] w-6 shrink-0 cursor-pointer items-center rounded-full border  transition-colors focus-visible:outline-none focus-visible:ring-2  disabled:opacity-50 data-[state=checked]:bg-slate-900  dark:data-[state=checked]:bg-transparent dark:data-[state=unchecked]:bg-transparent",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[12px] w-[12px] rounded-full bg-[#DDE1E1] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:bg-[#7789A9] data-[state=unchecked]:translate-x-0 dark:bg-slate-950"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
