"use client";
import { Layout } from "@/components/common/layout";
import { FileUploader } from "@/components/form/file-uploader";
import { useState } from "react";

// Install:
// 1. Add a function in @/lib/utils
// 2. npm install sonner
// 3. npm install react-dropzone

const FileUploaderPage = () => {
  const [file, setFile] = useState<File[]>([]);

  return (
    <Layout header="File Uploader" headerClassName="w-[500px]">
      <div className="w-[500px]">
        <FileUploader
          value={file}
          onValueChange={setFile}
          maxFileCount={1}
          maxSize={20 * 1024 * 1024}
          accept={{
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
          }}
          acceptText="JPG, PNG, WEBP, JPEG"
        />
      </div>
    </Layout>
  );
};

export default FileUploaderPage;
