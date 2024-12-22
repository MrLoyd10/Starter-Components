"use client";

import { ListOrdered } from "lucide-react";
import React from "react";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const OrderedListToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
              editor?.isActive("orderedList") && "bg-accent",
              className
            )}
            onClick={(e) => {
              e.preventDefault();
              editor?.chain().focus().toggleOrderedList().run();
              onClick?.(e);
            }}
            disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
            ref={ref}
            {...props}
          >
            {children || <ListOrdered className="w-4 h-4" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span>Ordered list</span>
        </TooltipContent>
      </Tooltip>
    );
  }
);

OrderedListToolbar.displayName = "OrderedListToolbar";

export { OrderedListToolbar };
