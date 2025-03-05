import React, { useState, useRef, useEffect } from "react";

const WriteBlogPage = () => {
  const [content, setContent] = useState("Tulis konten blog Anda di sini...");
  const fileInputRef = useRef(null);

  useEffect(() => {
    console.log("Content berubah:", content);
  }, [content]);

  const applyAlignment = (alignment) => {
    const selection = window.getSelection();
    if (selection.rangeCount) {
      const range = selection.getRangeAt(0);
      const selectedText = range.extractContents();
      const wrapper = document.createElement("span"); // atau <div>
      let alignmentClass = "";

      switch (alignment) {
        case "center":
          alignmentClass = "text-center";
          break;
        case "left":
          alignmentClass = "text-left";
          break;
        case "right":
          alignmentClass = "text-right";
          break;
        default:
          break;
      }

      wrapper.className = alignmentClass;
      wrapper.appendChild(selectedText);
      range.insertNode(wrapper);

      setContent(document.getElementById("editor").innerHTML);
    }
  };

  const alignLeft = () => applyAlignment("left");
  const alignCenter = () => applyAlignment("center");
  const alignRight = () => applyAlignment("right");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.execCommand("insertImage", false, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleContentChange = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <section className="w-full min-h-screen py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="p-3 bg-white rounded-lg">
          <div className="flex items-center justify-center lg:mt-3">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Category
            </h1>
          </div>
          {/* Toolbar */}
          <div className="p-2 mt-4 space-x-2 bg-gray-100">
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={alignLeft}
            >
              Left
            </button>
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={alignCenter}
            >
              Center
            </button>
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={alignRight}
            >
              Right
            </button>
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={triggerImageUpload}
            >
              Image
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          {/* Editor */}
          <div
            id="editor"
            className="p-4 mt-2 border border-gray-300 rounded"
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: content }}
            onInput={handleContentChange}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WriteBlogPage;
