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
  {
    title: "How Palo Alto Is Shaping Cloud Security",
    summary:
      "A deep dive into Palo Alto’s latest innovations in securing the cloud.",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=70",
    link:
      "https://www.paloaltonetworks.com/blog/2024/03/cloud-security-trends/",
  },
  {
    title: "What’s New with Juniper in Edge Networking",
    summary:
      "Discover how Juniper Networks is improving edge and AI‑driven networking.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70",
    link:
      "https://blogs.juniper.net/en-us/ai-driven-enterprise/what-s-new-in-juniper-mist-edge-networking",
  },
  {
    title: "The Role of AI in Telecom",
    summary:
      "AI is optimizing telecom networks and customer experience at scale.",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=800&q=70",
    link:
      "https://www.ericsson.com/en/blog/2024/4/the-role-of-ai-in-telecom",
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
