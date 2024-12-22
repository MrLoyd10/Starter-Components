"use client";

import { Image } from "lucide-react";
import React from "react";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const ImagePlaceholderToolbar = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, onClick, children, ...props }, ref) => {
  const { editor } = useToolbar();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8",
            editor?.isActive("image-placeholder") && "bg-accent",
            className
          )}
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().insertImagePlaceholder().run();
            onClick?.(e);
          }}
          ref={ref}
          {...props}
        >
          {children || <Image className="w-4 h-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span>Image</span>
      </TooltipContent>
    </Tooltip>
  );
});

ImagePlaceholderToolbar.displayName = "ImagePlaceholderToolbar";

export { ImagePlaceholderToolbar };
