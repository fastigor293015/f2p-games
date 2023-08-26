import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("max-w-screen-2xl mx-auto px-5", className)}>
      {children}
    </div>
  );
}

export default Container;
