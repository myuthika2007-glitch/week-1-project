function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <span className="category">{post.category}</span>
      <p>{post.excerpt}</p>
    </div>
  );
}

export default PostCard;