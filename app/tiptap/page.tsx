"use client";
import { Layout } from "@/components/common/layout";
import Tiptap from "@/components/tiptap";
import { useState } from "react";

// For full documentation go here: https://tiptap.niazmorshed.dev/
// Install % Add:
// 1. npm install @tiptap/react @tiptap/starter-kit
// 2. add functions in @/lib/utils
// 3. npm install @tiptap/extension-image
// 4. Follow https://tiptap.niazmorshed.dev/docs/installation

const TiptapPage = () => {
  const [content, setContent] = useState("");
  return (
    <Layout header="Tags Input" headerClassName="w-[800px]">
      <div className="w-[800px]">
        <Tiptap value={content} onChange={setContent} />
      </div>
    </Layout>
  );
};

export default TiptapPage;
