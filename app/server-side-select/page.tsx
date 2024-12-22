"use client";
import { Layout } from "@/components/common/layout";
import { Option, ServerSideSelect } from "@/components/form/server-side-select";
import { useState } from "react";

const MockData = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

const ServerSideSelectPage = () => {
  const [value, setValue] = useState<Option | null>(null);
  const [search, setSearch] = useState("");

  return (
    <Layout header="Server Side Select" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <ServerSideSelect
          options={MockData}
          value={value}
          onValueChange={setValue}
          search={search}
          onSearchChange={setSearch}
          loading={false}
          error={false}
        />
      </div>
    </Layout>
  );
};

export default ServerSideSelectPage;
