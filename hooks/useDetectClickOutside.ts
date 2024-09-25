import { useEffect, useState, useRef } from "react";

export const useDetectClickOutside = <T extends HTMLElement>() => {
  const [open, setOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const nodeRef = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(!open);
      }
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open]);

  return { open, setOpen, triggerRef, nodeRef };
};
