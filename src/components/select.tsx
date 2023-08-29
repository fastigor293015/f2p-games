import { ScrollArea } from "./ui/scroll-area";
import { Select as ShadcnSelect, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

interface SelectItem {
  value: string;
  label: string;
  onClick: () => void;
}

export interface SelectSection {
  title: string;
  items: SelectItem[];
}

interface SelectProps {
  defaultValue: string;
  placeholder: string;
  sections: SelectSection[];
}

const Select: React.FC<SelectProps> = ({
  defaultValue,
  placeholder,
  sections
}) => {
  return (
    <ShadcnSelect defaultValue={defaultValue}>
      <SelectTrigger className="max-w-[250px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-h-52">
        <ScrollArea>
          {sections.map((section) => (
            <SelectGroup key={section.title}>
              <SelectLabel>{section.title}</SelectLabel>
              {section.items.map((item) => (
                <SelectItem key={item.value} value={item.value} onClick={item.onClick}>{item.label}</SelectItem>
              ))}
            </SelectGroup>
          ))}
        </ScrollArea>
      </SelectContent>
    </ShadcnSelect>
  );
}

export default Select;
