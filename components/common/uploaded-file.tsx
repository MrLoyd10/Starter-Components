"use client";
import { Paperclip, Trash2 as RemoveIcon } from "lucide-react";
import { useEffect, useState } from "react";

export interface UploadedFileType {
  id: string | number;
  path: string;
  name: string;
}

interface Props {
  files: UploadedFileType[];
  onFilesUpdate: (files: UploadedFileType[]) => void;
}

export const UploadedFile = ({ files, onFilesUpdate }: Props) => {
  const [currentFiles, setCurrentFiles] = useState<UploadedFileType[]>(files);

  const handleDelete = (id: string | number) => {
    const updatedFiles = currentFiles.filter((file) => file.id !== id);
    setCurrentFiles(updatedFiles);
    onFilesUpdate(updatedFiles); // Update the parent with the remaining files
  };

  useEffect(() => {
    setCurrentFiles(files);
  }, [files]);

  return (
    <div className="border-gray-200 bg-background p-4 border rounded-lg">
      <h3 className="mb-2 font-medium text-sm">Uploaded</h3>
      <div className="">
        {currentFiles.length > 0 ? (
          currentFiles.map((file) => (
            <div
              key={file.id}
              className={
                "h-6 p-1 justify-between cursor-pointer hover:bg-muted rounded-sm relative"
              }
            >
              <div className="flex items-center gap-1.5 w-full h-full font-medium text-sm leading-none tracking-tight">
                <Paperclip className="w-4 h-4 stroke-current" />
                <a
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  {file.name}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(file.id)}
                className="top-1 right-1 absolute"
              >
                <span className="sr-only">remove item {file.id}</span>
                <RemoveIcon className="w-4 h-4 duration-200 ease-in-out hover:stroke-destructive" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No files remaining.</p>
        )}
      </div>
    </div>
  );
};
