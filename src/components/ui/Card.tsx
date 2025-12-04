import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ children, href, className = "" }: CardProps) {
  const baseStyles = "border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} cursor-pointer block ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return (
    <p className={`text-gray-600 text-sm mt-1 ${className}`}>
      {children}
    </p>
  );
}

interface CardLinkProps {
  children: ReactNode;
  className?: string;
}

export function CardLink({ children, className = "" }: CardLinkProps) {
  return (
    <span className={`text-blue-600 font-medium text-sm mt-3 inline-block ${className}`}>
      {children}
    </span>
  );
}
