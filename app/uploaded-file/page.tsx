"use client";
import { Layout } from "@/components/common/layout";
import {
  UploadedFile,
  UploadedFileType,
} from "@/components/common/uploaded-file";
import { useState } from "react";

const MockData: UploadedFileType[] = [
  {
    id: "1",
    path: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    name: "Image 1",
  },
  {
    id: "2",
    path: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    name: "Image 2",
  },
];

const UploadedFilePage = () => {
  const [uploaded, setUploaded] = useState<UploadedFileType[]>(MockData);

  return (
    <Layout header="Uploaded File" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <UploadedFile files={uploaded} onFilesUpdate={setUploaded} />
      </div>
    </Layout>
  );
};

export default UploadedFilePage;
