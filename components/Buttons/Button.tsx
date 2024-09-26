import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonVariants = cva(
  "rounded-[100px] font-lexend hover:brightness-125 transition duration-300 flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        transparent: "bg-transparent ring-1 ring-inset ring-grey3 text-grey3",
        black: "bg-[#000000] text-white",
      },
      size: {
        lg: "h-14 lg:h-16 text-[1.188rem]",
        md: "p-2.5 text-sm leading-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ className, variant, size }))}
    >
      {children}
    </button>
  );
}

export { buttonVariants };
