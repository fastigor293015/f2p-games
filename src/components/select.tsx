import { Select as ShadcnSelect, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

const Select = () => {
  return (
    <ShadcnSelect defaultValue="all">
      <SelectTrigger className="max-w-[180px]">
        <SelectValue placeholder="Select a platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Browse by platform:</SelectLabel>
          <SelectItem value="pc">Windows (PC)</SelectItem>
          <SelectItem value="web">Browser (Web)</SelectItem>
          <SelectItem value="all">All Platforms</SelectItem>
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
}

export default Select;
