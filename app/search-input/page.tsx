"use client";
import { Layout } from "@/components/common/layout";
import { SearchInput } from "@/components/common/search-input";
import { useState } from "react";

const SearchInputPage = () => {
  const [search, setSearch] = useState("");

  return (
    <Layout header="Search Input" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <SearchInput searchValue={search} onSearchChange={setSearch} />
      </div>
    </Layout>
  );
};

export default SearchInputPage;
