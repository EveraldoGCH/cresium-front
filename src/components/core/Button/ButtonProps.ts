export interface ButtonProps {
  size: "md" | "lg" | "xl";
  color: "primary" | "secondary" | "tertiary";
  destructive?: boolean;
  disabled?: boolean;
  className?: any;
  StartIcon?: () => React.JSX.Element;
  children: React.ReactNode;
}
