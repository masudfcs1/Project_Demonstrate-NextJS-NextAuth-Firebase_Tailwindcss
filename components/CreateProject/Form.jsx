import Data from "@/Data";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [inputs, setInputs] = useState({});
  const [techList, setTechList] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const onTechSelect = (name, isChecked) => {
    if (isChecked) {
      setTechList((techList) => [...techList, name]);
    } else {
      let techListItem = techList.filter((item) => item !== name);
      setTechList(techListItem);
    }
  };

  useEffect(() => {
    setInputs((values) => ({
      ...values,
      ["techList"]: techList
    }));
    console.log(techList);
  }, [techList]);

  return (
    <div
      className="flex justify-center mt-10
  shadow-md mx-4 md:mx-56 lg:mx-72 p-5 rounded-md"
    >
      {/* onSubmit={handleSubmit} */}
      <form onSubmit={handleSubmit}>
        <h2
          className="text-[30px]
    font-extrabold text-teal-500"
        >
          ADD PROJECT
        </h2>
        <h2 className="mb-6">Create New Project and Explore with Community</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          // onChange={(e) => console.log(e)}
          className="w-full mb-4 border-[1px] p-2 rounded-md"
        />
        <textarea
          name="desc"
          className="w-full mb-4 
      outline-teal-400 border-[1px] 
      p-2 rounded-md"
          required
          onChange={handleChange}
          placeholder="Write Description here"
        />
        <h2 className="mb-3 font-bold">Select Technology</h2>
        <div className="grid grid-cols-2 mb-4 md:grid-cols-3  ">
          {Data.Technology.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                id="technology"
                onClick={(e) => onTechSelect(item.name, e.target.checked)}
                type="checkbox"
                className="w-4 h-4"
              />
              <label>{item.name}</label>
            </div>
          ))}
        </div>
        <input
          type="text"
          name="app-demo-url"
          placeholder="App Demo Url"
          onChange={handleChange}
          className="w-full mb-4 border-[1px] p-2 rounded-md outline-teal-400"
        />
        <input
          type="text"
          name="ui-ux-design-url"
          onChange={handleChange}
          placeholder="UI/UX Design Url(Figma)"
          className="w-full mb-4 border-[1px] p-2 rounded-md outline-teal-400"
        />
        <input
          type="text"
          name="yt-url"
          onChange={handleChange}
          placeholder="Youtube Tutorial Url"
          className="w-full mb-4 border-[1px] p-2 rounded-md outline-teal-400"
        />
        <input
          type="text"
          name="github-url"
          onChange={handleChange}
          placeholder="Github Source Code Url"
          className="w-full mb-4 border-[1px] p-2 rounded-md outline-teal-400"
        />

        <input
          type="text"
          onChange={handleChange}
          name="instagram"
          placeholder="Instagram Profile"
          className="w-full mb-4 border-[1px] p-2 rounded-md outline-teal-400"
        />
        <input
          type="file"
          //onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png"
          className="mb-5 border-[1px] w-full outline-teal-400"
        />
        <button
          type="submit"
          className="bg-teal-500 w-full p-1 
rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
