import { useState } from "react";
import posts from "./posts.json";
import PostCard from "./components/PostCard";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter(
  (post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || post.category === category)
);

  return (
    <div>
      <h1>My Blog</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="All">All</option>
  <option value="Tech">Tech</option>
  <option value="Food">Food</option>
  <option value="Travel">Travel</option>
</select>
       {filteredPosts.length === 0 && <p>No posts found.</p>}
      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;