"use client";

import { BoldIcon } from "lucide-react";
import React from "react";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Extension } from "@tiptap/core";
import type { StarterKitOptions } from "@tiptap/starter-kit";

type StarterKitExtensions = Extension<StarterKitOptions, any>;

const BoldToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, children, ...props }, ref) => {
    const { editor } = useToolbar();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-8 w-8",
              editor?.isActive("bold") && "bg-accent",
              className
            )}
            onClick={(e) => {
              e.preventDefault();
              editor?.chain().focus().toggleBold().run();
              onClick?.(e);
            }}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
            ref={ref}
            {...props}
          >
            {children || <BoldIcon className="w-4 h-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Bold</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

BoldToolbar.displayName = "BoldToolbar";

export { BoldToolbar };
