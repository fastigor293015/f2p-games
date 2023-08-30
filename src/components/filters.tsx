import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./shared/select";
import qs from "query-string";
import { genreItems, platformItems, sortItems } from "@/lib/utils";

const Filters = () => {
  const [params, setParams] = useSearchParams();

  const handleChange = useCallback((param: string, value: string) => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      [param]: value,
    }

    setParams(qs.stringify(updatedQuery, {
      skipNull: true,
      skipEmptyString: true
    }));
  }, [params, setParams]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(3,minmax(0,250px))] items-center gap-4 mb-10">
      <Select
        sections={platformItems}
        defaultValue={params.get("platform") || ""}
        placeholder="Select a platform:"
        onChange={(value: string) => handleChange("platform", value)}
      />
      <Select
        sections={genreItems}
        defaultValue={params.get("category") || ""}
        placeholder="Select a genre:"
        onChange={(value: string) => handleChange("category", value)}
      />
      <Select
        sections={sortItems}
        defaultValue={params.get("sort-by") || ""}
        placeholder="Sort By:"
        onChange={(value: string) => handleChange("sort-by", value)}
      />
    </div>
  );
}

export default Filters;
