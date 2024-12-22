"use client";

import { Code, Code2 } from "lucide-react";
import React from "react";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const CodeBlockToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
              editor?.isActive("codeBlock") && "bg-accent",
              className
            )}
            onClick={(e) => {
              e.preventDefault();
              editor?.chain().focus().toggleCodeBlock().run();
              onClick?.(e);
            }}
            disabled={!editor?.can().chain().focus().toggleCodeBlock().run()}
            ref={ref}
            {...props}
          >
            {children || <Code className="w-4 h-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Code Block</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

CodeBlockToolbar.displayName = "CodeBlockToolbar";

export { CodeBlockToolbar };
