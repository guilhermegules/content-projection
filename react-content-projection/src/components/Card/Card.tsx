import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

type CardProps = {
  children?: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{
        background: "#ccc",
        borderRadius: "10px",
        width: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "8px",
      }}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;
