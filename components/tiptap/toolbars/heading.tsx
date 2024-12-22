"use client";

import { useToolbar } from "@/components/tiptap/toolbars/toolbar-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { Extension } from "@tiptap/core";
import type { Level } from "@tiptap/extension-heading";
import type { StarterKitOptions } from "@tiptap/starter-kit";
import { Heading } from "lucide-react";
import React from "react";

type StarterKitExtensions = Extension<StarterKitOptions, any>;

const HeaderDropdownToolbar = () => {
  const { editor } = useToolbar();

  // Function to apply heading or paragraph based on the selected type
  const applyHeading = (level: Level | null) => {
    if (!editor) return;

    if (level) {
      editor
        .chain()
        .focus()
        .toggleHeading({ level }) // Toggle heading for the selected text
        .run();
    } else {
      editor
        .chain()
        .focus()
        .setParagraph() // Revert to a paragraph for the selection
        .run();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-8 h-8">
          <Heading />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => applyHeading(1)}
          className={cn(
            editor?.isActive("heading", { level: 1 }) && "bg-accent"
          )}
        >
          Heading 1
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => applyHeading(2)}
          className={cn(
            editor?.isActive("heading", { level: 2 }) && "bg-accent"
          )}
        >
          Heading 2
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => applyHeading(3)}
          className={cn(
            editor?.isActive("heading", { level: 3 }) && "bg-accent"
          )}
        >
          Heading 3
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => applyHeading(4)}
          className={cn(
            editor?.isActive("heading", { level: 4 }) && "bg-accent"
          )}
        >
          Heading 4
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => applyHeading(null)}
          className={cn(editor?.isActive("paragraph") && "bg-accent")}
        >
          Paragraph
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { HeaderDropdownToolbar };
