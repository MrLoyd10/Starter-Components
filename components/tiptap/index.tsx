"use client";
import { ImageExtension } from "@/components/tiptap/extensions/image";
import { ImagePlaceholder } from "@/components/tiptap/extensions/image-placeholder";
import { BlockquoteToolbar } from "@/components/tiptap/toolbars/blockquote";
import { BoldToolbar } from "@/components/tiptap/toolbars/bold";
import { BulletListToolbar } from "@/components/tiptap/toolbars/bullet-list";
import { CodeToolbar } from "@/components/tiptap/toolbars/code";
import { CodeBlockToolbar } from "@/components/tiptap/toolbars/code-block";
import { HardBreakToolbar } from "@/components/tiptap/toolbars/hard-break";
import { HeaderDropdownToolbar } from "@/components/tiptap/toolbars/heading";
import { HorizontalRuleToolbar } from "@/components/tiptap/toolbars/horizontal-rule";
import { ImagePlaceholderToolbar } from "@/components/tiptap/toolbars/image-placeholder-toolbar";
import { ItalicToolbar } from "@/components/tiptap/toolbars/italic";
import { OrderedListToolbar } from "@/components/tiptap/toolbars/ordered-list";
import { RedoToolbar } from "@/components/tiptap/toolbars/redo";
import { StrikeThroughToolbar } from "@/components/tiptap/toolbars/strikethrough";
import { ToolbarProvider } from "@/components/tiptap/toolbars/toolbar-provider";
import { UndoToolbar } from "@/components/tiptap/toolbars/undo";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { EditorContent, type Extension, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal",
      },
    },
    bulletList: {
      HTMLAttributes: {
        class: "list-disc",
      },
    },
    code: {
      HTMLAttributes: {
        class: "bg-accent rounded-md p-1",
      },
    },
    horizontalRule: {
      HTMLAttributes: {
        class: "my-2",
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
      },
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: "tiptap-heading",
      },
    },
  }),
  ImageExtension,
  ImagePlaceholder,
];

interface TiptapProps {
  value: string;
  onChange: (content: string) => void;
}

const Tiptap = ({ value = "", onChange }: TiptapProps) => {
  const editor = useEditor({
    extensions: extensions as Extension[],
    content: value,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // If form resets, reset the content of the editor as well
  useEffect(() => {
    if (value === "") {
      editor?.commands.setContent(""); // Clears the editor content
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }
  return (
    <TooltipProvider>
      <div className="relative pb-3 border rounded-md w-full overflow-hidden">
        <div className="top-0 left-0 z-20 sticky flex justify-between items-center bg-background px-2 py-2 border-b w-full">
          <ToolbarProvider editor={editor}>
            <div className="flex items-center gap-2">
              <UndoToolbar />
              <RedoToolbar />
              <Separator orientation="vertical" className="h-7" />
              <HeaderDropdownToolbar />
              <Separator orientation="vertical" className="h-7" />
              <BoldToolbar />
              <ItalicToolbar />
              <StrikeThroughToolbar />
              <BulletListToolbar />
              <OrderedListToolbar />
              <CodeToolbar />
              <CodeBlockToolbar />
              <HorizontalRuleToolbar />
              <BlockquoteToolbar />
              <HardBreakToolbar />
              <ImagePlaceholderToolbar />
            </div>
          </ToolbarProvider>
        </div>
        <div
          onClick={() => {
            editor?.chain().focus().run();
          }}
          className="bg-background min-h-[18rem] cursor-text"
        >
          <EditorContent className="outline-none" editor={editor} />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Tiptap;
