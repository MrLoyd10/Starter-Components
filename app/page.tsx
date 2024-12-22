import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Items = [
  {
    label: "Tab Selector",
    href: "/tab-selector",
  },
  {
    label: "Breadcrumb",
    href: "/breadcrumb",
  },
  {
    label: "Multi Select",
    href: "/multi-select",
  },
  {
    label: "Select",
    href: "/select",
  },
  {
    label: "Server Side Select",
    href: "/server-side-select",
  },
  {
    label: "Auto Complete",
    href: "/auto-complete",
  },
  {
    label: "Tag Input",
    href: "/tag-input",
  },
  {
    label: "Calendar",
    href: "/calendar",
  },
  {
    label: "Calendar Range",
    href: "/calendar-range",
  },
  {
    label: "Tiptap Rich Text",
    href: "/tiptap",
  },
  {
    label: "File Uploader",
    href: "/file-uploader",
  },
  {
    label: "Uploaded File",
    href: "/uploaded-file",
  },
  {
    label: "Search Input",
    href: "/search-input",
  },
];

export default function Home() {
  return (
    <div className="min-h-[2000px]">
      <Header />

      <div className="gap-4 grid grid-cols-3 grid-rows-5 p-5">
        {Items.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="flex justify-center items-center border-slate-200 hover:bg-muted border w-full h-36">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
