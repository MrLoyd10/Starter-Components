/**
 * Step-by-step to use CalendarRange:
 * 1. import CalendarRange from "@/components/forms/calendar-range";
 *
 * 2. Define a Zod schema for the date range:
 *    const formSchema = z.object({
 *      date_range: z.object({
 *        from: z.date().nullable(),
 *        to: z.date().nullable(),
 *      }),
 *    });
 *
 * 3. Set default values:
 *    const defaultValues: z.infer<typeof formSchema> = {
 *      date_range: { from: null, to: null },
 *    };
 *
 * 4. Use CalendarRange in the form render:
 *    <CalendarRange data={field.value} onChange={field.onChange} />
 */

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface Props {
  data: DateRange;
  onChange: (range: DateRange) => void;
}

export function CalendarRange({ data, onChange }: Props) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !data?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 w-4 h-4" />
            {data?.from ? (
              data?.to ? (
                <>
                  {format(data?.from, "LLL dd, y")} -{" "}
                  {format(data?.to, "LLL dd, y")}
                </>
              ) : (
                format(data?.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={data?.from || new Date()}
            selected={
              data
                ? {
                    from: data.from || undefined,
                    to: data.to || undefined,
                  }
                : undefined
            }
            onSelect={(range) => {
              if (range) {
                onChange({
                  from: range.from || null,
                  to: range.to || null,
                });
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
