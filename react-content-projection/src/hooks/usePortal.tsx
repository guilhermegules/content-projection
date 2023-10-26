import { useEffect, useState } from "react";

export const usePortal = (elementId: string) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById(elementId));
  }, [elementId]);

  return element;
};
