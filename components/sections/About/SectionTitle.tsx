import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-[40px] font-bold text-[#1d1d1d] leading-tight ${className}`}>
      {children}
    </h2>
  );
}
