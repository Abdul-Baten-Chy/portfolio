import { createPost } from "@/utils/createProject";
import React, { SetStateAction, Suspense, lazy, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useLocation } from "react-router-dom";

const ReactQuill = lazy(() => import("react-quill"));
const image_hosting_key = "7751b04e958c865b86a251faba8c77eb";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateProject = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const location = useLocation();
  const path = location.pathname;
  const regex = /\/add(Project|Blog)/;
  const matches = path.match(regex);
  const currentSegment = matches && matches[1] ? matches[1] : "undefined";

  const handleChange = (value: SetStateAction<string>) => {
    setContent(value);
  };

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const uploadedImageUrls: any[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const formData = new FormData();
        formData.append("image", file);

        // Upload image to ImageBB
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          uploadedImageUrls.push(data.data.url);
        } else {
          console.error("Image upload failed:", data.error);
        }
      }

      setImages((prev) => [...prev, ...uploadedImageUrls]);
    }
  };

  const handleSave = async () => {
    const post = {
      title,
      content,
      images,
      category,
      createdAt: new Date().toISOString(),
    };
    console.log(post);

    const res = await createPost(post);
    console.log(res);
  };

  return (
    <div className="w-full mt-20 ">
      <h2 className="text-center">Create {currentSegment}</h2>
      <div className="p-10 flex flex-col items-center justify-center mb-10 ">
        <div>
          <div>
            <div>
              {" "}
              <label> Title: </label> <br />
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray mt-4 py-1 mb-4 px-2 max-w-[600px] rounded-md text-black"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <label className="block mb-2 text-sm font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300  rounded-md p-2 text-black"
              >
                <option value="chinese">Tech</option>
                <option value="mobile-development">Food</option>
                <option value="data-science">Mobile App</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>
          <br />
          <label>Image:</label>
          <br />
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="bg-gray-100 mt-4 mb-4 w-80 py-1 px-2 rounded-md"
          />
          <Suspense fallback={<div>Loading editor...</div>}>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleChange}
              className="bg-white border mb-4 border-gray-300 text-black rounded-lg shadow-md p-4"
              style={{
                minHeight: "100px",
                height: "auto",
                overflowY: "auto",
                maxWidth: "800px",
              }}
            />
          </Suspense>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg"
          >
            Save Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
