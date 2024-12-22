"use client";

import { WrapText } from "lucide-react";
import React from "react";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const HardBreakToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { editor } = useToolbar();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8", className)}
            onClick={(e) => {
              e.preventDefault();
              editor?.chain().focus().setHardBreak().run();
              onClick?.(e);
            }}
            ref={ref}
            {...props}
          >
            {children || <WrapText className="w-4 h-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Hard break</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

HardBreakToolbar.displayName = "HardBreakToolbar";

export { HardBreakToolbar };
