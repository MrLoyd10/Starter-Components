"use client";
import { Layout } from "@/components/common/layout";
import { TagsInput } from "@/components/form/tags-input";
import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <Layout header="Tags Input" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <TagsInput value={tags} onChange={setTags} />
      </div>
    </Layout>
  );
};

export default TagInput;
