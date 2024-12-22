"use client";
import { Layout } from "@/components/common/layout";
import TabSelector, {
  type TabItemType,
} from "@/components/common/tab-selector";
import { useEffect, useState } from "react";

const items: TabItemType[] = [
  { value: "all", label: "All" },
  { value: "homeowners", label: "Homeowners" },
  { value: "tenants", label: "Tenants" },
];

const TabSelectors = () => {
  const [tab, setTab] = useState<string>("all");

  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <Layout header="Tab Selector" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <TabSelector items={items} defaultValue={tab} setSelectedTab={setTab} />
      </div>
    </Layout>
  );
};

export default TabSelectors;
