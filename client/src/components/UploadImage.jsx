import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function UploadImage({ imageUrl, setImageUrl }) {
  const [loading, setLoading] = useState(false);
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();

    formData.append("file", imageSelected);
    formData.append("upload_preset", "upaizq0q");
    axios
      .post("https://api.cloudinary.com/v1_1/du97ngljk/image/upload", formData)
      .then((response) => {
        setImageUrl(response.data.url);
        setLoading(false);
      });
  };
  const handleLoading = (event) => {
    event.preventDefault();
    if (imageSelected !== null) {
      setLoading(true);
      uploadImage();
    } else {
      setLoading(false);
    }
  };

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    setImageSelected(event.target.files[0]);
  };

  return (
    <>
      <div className="m-4">
        <label className="inline-block mb-2 text-gray-500">
          Upload Image(jpg,png,svg,jpeg)
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
            <div className="flex flex-col items-center justify-center pt-7">
              {imageUrl ? (
                <img
                  alt="user"
                  src={imageUrl}
                  className=" object-fit w-16 h-16 rounded-full mx-auto"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                Select a photo
              </p>
            </div>
            <input type="file" className="opacity-0" onChange={onFileChange} />
          </label>
        </div>
      </div>
      <div className="flex pb-2 space-x-4">
        {loading ? (
          <Loading />
        ) : (
          <button
            onClick={handleLoading}
            className="bg-teal-500  hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Upload Image
          </button>
        )}
      </div>
    </>
  );
}

export default UploadImage;
