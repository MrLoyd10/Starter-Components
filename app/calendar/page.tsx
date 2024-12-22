"use client";
import { Layout } from "@/components/common/layout";
import Calendar from "@/components/form/calendar";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Layout header="Calendar" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <Calendar
          selectedDate={date ?? null}
          onDateChange={(newDate) => setDate(newDate || null)}
          // selectedDate={field.value ?? null}
          // onDateChange={field.onChange}
        />
      </div>
    </Layout>
  );
};

export default CalendarPage;
