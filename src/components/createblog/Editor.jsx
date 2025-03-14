"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import "./Editor.css";



export default function Page() {
  const [value, setValue] = useState("");
  console.log(value);



  // Customize the toolbar options
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  return (
    <div className="flex min-h- bg-white">
      <div className="w-1/2 p-4">
        <ReactQuill
          theme="snow"
          value={value}
          placeholder="Comece a escrever seu blog aqui..."
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </div>
     
    </div>
  );
}