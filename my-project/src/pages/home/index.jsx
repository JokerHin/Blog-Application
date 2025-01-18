import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      const result = await response.data;

      if (result && result.blogList && result.blogList.length) {
        setBlogList(result.blogList);
        setPending(false);
      } else {
        setPending(false);
        setBlogList([]);
      }
    } catch (error) {
      console.error(error);
      setPending(false);
    }
  }

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );
    const result = await response.data;
    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0) = refresh to update
    }
  }

  function handleEdit(getCurrentBlogItem) {
    navigate("/add-blog", { state: { getCurrentBlogItem } });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className="p-[30px]">
      <h1>Blog List</h1>
      {pending ? (
        <h1>Loading Blogs ! Please wait</h1>
      ) : (
        <div className="grid grid-cols-4 gap-[10px]">
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id} className="p-[10px] border-red">
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit
                  onClick={() => handleEdit(blogItem)}
                  className="size-[30px]"
                />
                <FaTrash
                  onClick={() => handleDeleteBlog(blogItem._id)}
                  className="size-[30px]"
                />
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
}
