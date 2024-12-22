"use client";
import { Layout } from "@/components/common/layout";
import { SingleSelect } from "@/components/form/single-select";
import { useState } from "react";

const MockData = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

const SingleSelectPage = () => {
  const [value, setValue] = useState("");

  return (
    <Layout header="Single Select" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <SingleSelect
          options={MockData}
          value={value}
          defaultValue={value}
          onValueChange={setValue}
        />
      </div>
    </Layout>
  );
};

export default SingleSelectPage;
