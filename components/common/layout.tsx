import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
  headerClassName?: string;
  header?: string;
}

export const Layout = ({ children, header, headerClassName }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {header && (
        <div className={`mb-10 ${headerClassName}`}>
          <h1 className="mb-4 font-bold text-3xl">{header}</h1>
          <Separator />
        </div>
      )}
      <div>{children}</div>
      <div className="mt-20">
        <Button variant="outline" className="px-12" asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};
