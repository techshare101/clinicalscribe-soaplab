import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "font-medium transition inline-flex items-center justify-center";
  
  const variants = {
    primary: "px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700",
    secondary: "px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50",
    ghost: "px-4 py-2 text-gray-600 hover:text-blue-600",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
