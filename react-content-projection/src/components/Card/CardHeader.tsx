type CardHeaderProps = {
  children: React.ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps) => {
  return <header>{children}</header>;
};
