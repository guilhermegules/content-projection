type CardFooterProps = {
  children: React.ReactNode;
};

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer>{children}</footer>;
};
