interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1 className="mb-5 font-medium leading-none text-[35px] md:text-5xl">
      {children}
    </h1>
  );
}

export default SectionTitle;
