/*
 * 1. Define Options:
 *    type SingleSelectItem = {
 *      id?: number;
 *      value: string;
 *      label: string;
 *      description?: string;
 *    };
 *
 *
 * <SingleSelectComponent
 *   value={value}
 *   defaultValue={defaultValue}
 *   options={options}
 *   onValueChange={onValueChange}  // Optional
 *   placeholder={placeholder}      // Optional
 *   useIdAsValue                   // Optional
 *   isLoading                      // Optional
 *   showDescription                // Optional [Note: Description should not be empty if true]
 *   showDescriptionInSelected      // Optional [Note: Description should not be empty if true]
 *   disableClearable               // Optional
 * />
 *
 * <SingleSelectComponent
 *   onValueChange={onValueChange}
 *   defaultValue={defaultValue}
 *   options={
 *     options
 *       ? options.map((item) => ({
 *           label: item.toString(),
 *           value: item.toString(),
 *         }))
 *       : []
 *     }
 * />
 */

"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SingleSelectItem = {
  id?: number;
  value: string;
  label: string;
  description?: string | undefined | null;
};

interface Props {
  value: string | undefined | null;
  onValueChange: (value: string) => void;
  defaultValue?: string | undefined | null;
  placeholder?: string;
  options: SingleSelectItem[];
  useIdAsValue?: boolean;
  showDescription?: boolean;
  showDescriptionInSelected?: boolean;
  isLoading?: boolean;
  disableClearable?: boolean;
}

export const SingleSelect = ({
  value,
  onValueChange,
  defaultValue,
  placeholder,
  options,
  useIdAsValue = false,
  showDescription = false,
  showDescriptionInSelected = false,
  isLoading,
  disableClearable = false,
}: Props) => {
  // Helper function to find the selected item based on value
  const selectedItem = options.find(
    (option) => (useIdAsValue ? option.id?.toString() : option.value) === value
  );

  return (
    <>
      <Select
        onValueChange={(newValue) =>
          onValueChange(newValue === "CLEAR" ? "" : newValue)
        }
        defaultValue={defaultValue ?? undefined}
        value={value ?? undefined}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder}>
            {
              // Label Only
              showDescriptionInSelected ? (
                // Label + Description
                <div className="flex items-center space-x-2">
                  <span>{selectedItem?.label}</span>
                  <span className="text-muted-foreground">
                    ({selectedItem?.description})
                  </span>
                </div>
              ) : (
                selectedItem?.label
              )
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {/* Loading */}
          {isLoading ? (
            <Loading />
          ) : !options || options.length === 0 ? (
            <NoData />
          ) : (
            <>
              {!disableClearable && (
                <SelectItem key="CLEAR" value="CLEAR">
                  Clear selection
                </SelectItem>
              )}
              {options.map((option, index) => (
                <SelectItem
                  key={option.id ? option.id : index}
                  value={
                    useIdAsValue
                      ? option.id
                        ? option.id.toString()
                        : option.value
                      : option.value
                  }
                >
                  {!showDescription ? (
                    option.label
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>{option.label}</span>
                      <span className="text-muted-foreground">
                        ({option.description})
                      </span>
                    </div>
                  )}
                </SelectItem>
              ))}
            </>
          )}
        </SelectContent>
      </Select>
    </>
  );
};

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[100px] text-muted-foreground text-sm text-wrap">
      Loading...
    </div>
  );
}

function NoData() {
  return (
    <div className="flex justify-center items-center min-h-[100px] text-muted-foreground text-sm text-wrap">
      No data available
    </div>
  );
}
