import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI is Changing Customer Service",
      summary: "Explore the role of AI in improving customer support and satisfaction in call centers.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
      link: "https://hbr.org/2023/06/how-ai-is-changing-customer-service",
    },
    {
      title: "Top 5 Skills for Modern Agents",
      summary: "Discover the essential skills needed for call center agents in a tech-driven world.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      link: "https://www.zendesk.com/blog/top-skills-call-center-agents/",
    },
    {
      title: "Remote Work in Call Centers",
      summary: "The shift to remote work in the BPO industry: challenges and solutions.",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
      link: "https://www.forbes.com/sites/forbeshumanresourcescouncil/2021/04/22/remote-work-in-call-centers-a-lasting-shift/",
    },
  ];

  return (
    <section id="blog">
      <div className="blog-content">
        <h2 className="blog-title">Latest Blog Posts</h2>
        <p className="blog-subtitle">Stay updated with trends and tips in the BPO industry</p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <a
              className="blog-card"
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="blog-image"
                loading="lazy"
              />
              <div className="blog-info">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-summary">{post.summary}</p>
                <span className="read-more">Read more →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
