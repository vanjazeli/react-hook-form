import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MainWrapProps = {
  children: ReactNode;
  className?: string;
};

export default function MainWrap({ children, className }: MainWrapProps) {
  return <div className={cn("container mx-auto px-5", className)}>{children}</div>;
}
