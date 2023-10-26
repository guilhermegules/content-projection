import { ReactNode } from "react";
import { createPortal } from "react-dom";

export const PortalComponent = ({
  elementOutlet,
  reactNode,
  key,
}: {
  elementOutlet: Element | DocumentFragment;
  reactNode: ReactNode;
  key?: string;
}) => {
  return createPortal(
    reactNode,
    elementOutlet,
    key ?? `${Math.random() * 10000}`
  );
};
