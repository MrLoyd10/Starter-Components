import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  width?: string;
};

// TODO : Add a debounce here

export const SearchInput = ({
  searchValue = "",
  onSearchChange,
  width = "w-[300px]",
}: SearchProps) => {
  return (
    <div className={width}>
      <div className="relative">
        <span className="left-3 absolute inset-y-0 flex items-center text-gray-400">
          <Search className="w-5 h-5" />
        </span>
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          spellCheck={false}
          className="pr-3 pl-10 border rounded-md w-full h-8 text-sm"
        />
      </div>
    </div>
  );
};
