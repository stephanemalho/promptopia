'use client';

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault();
  };

  const PromptCardList = ({ data, handleTagClick }) => {
    return (
      <div className=" mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <section className="feed">
      <from className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts"
          className="w-full p-2 rounded-sm bg-gray-100 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </from>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
