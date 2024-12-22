"use client";
import { Layout } from "@/components/common/layout";
import { CalendarRange } from "@/components/form/calendar-range";
import { useState } from "react";

interface DateType {
  from: Date | null;
  to: Date | null;
}

const CalendarRangePage = () => {
  const [date, setDate] = useState<DateType>({ from: null, to: null });

  return (
    <Layout header="Calendar Range" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <CalendarRange data={date} onChange={setDate} />
      </div>
    </Layout>
  );
};

export default CalendarRangePage;
