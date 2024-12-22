// components/ServerSideSelect.tsx

"use client";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

export interface Option {
  label: string;
  value: string;
}

interface ServerSideSelectProps {
  options: Option[]; // Options passed from the parent
  value: Option | null; // Selected value passed from the parent
  onValueChange: (item: Option | null) => void; // Callback to handle value change
  search: string; // Search query passed from the parent
  onSearchChange: (search: string) => void; // Callback to handle search query change
  loading: boolean;
  error: boolean;
}

export const ServerSideSelect = ({
  options,
  value,
  onValueChange,
  search,
  onSearchChange,
  loading,
  error,
}: ServerSideSelectProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  // Handle input blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!optionsRef.current?.contains(e.relatedTarget as Node)) {
      setIsFocused(false);
      if (search === "") {
        onValueChange(null); // Reset value when search is cleared
      } else if (!value || search !== value.label) {
        onSearchChange(value ? value.label : "");
      }
    }
  };

  // Select an option
  const handleSelect = (item: Option) => {
    onSearchChange(item.label);
    onValueChange(item); // Update the selected value
    setIsFocused(false);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onSearchChange(value);
    if (value.trim() === "") {
      onValueChange(null); // Reset selected value if search is cleared
    }
  };

  return (
    <div className="relative w-full">
      <Input
        placeholder="Search"
        value={search}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
      />

      {isFocused && (
        <div
          ref={optionsRef}
          className="top-12 left-0 z-10 absolute border-gray-200 bg-white shadow-md p-2 border rounded-md w-full max-h-[200px] overflow-auto"
        >
          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center p-2 h-20 text-muted-foreground text-sm">
              Loading...
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="flex justify-center items-center p-2 h-20 text-muted-foreground text-sm">
              Something went wrong while fetching data
            </div>
          )}

          {/* No results */}
          {!loading && !error && options.length === 0 && (
            <div className="flex justify-center items-center p-2 h-20 text-muted-foreground text-sm">
              No results
            </div>
          )}

          {/* Data */}
          {!loading &&
            !error &&
            options.length > 0 &&
            options.map((item) => (
              <div
                key={item.value}
                className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                onClick={() => handleSelect(item)}
                onMouseDown={(e) => e.preventDefault()} // Prevent blur on option click
              >
                {item.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
