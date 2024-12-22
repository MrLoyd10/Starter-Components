"use client";
import { Layout } from "@/components/common/layout";
import { MultiSelect, MultiSelectItems } from "@/components/form/multi-select";
import { useState } from "react";

const Items: MultiSelectItems[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];
const MultiSelectPage = () => {
  const [select, setSelect] = useState<MultiSelectItems[]>([]);
  return (
    <Layout header="Multi Select" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <MultiSelect values={select} onValuesChange={setSelect} items={Items} />
      </div>
    </Layout>
  );
};

export default MultiSelectPage;
