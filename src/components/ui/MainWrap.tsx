import { ReactNode } from "react";

type MainWrapProps = {
  children: ReactNode;
};

export default function MainWrap({ children }: MainWrapProps) {
  return <div className="container mx-auto px-5">{children}</div>;
}
