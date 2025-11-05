import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/layout';
import { ArrowLeft, Calendar, User, Tag, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define BlogPost interface for robust data structure
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string; // Full HTML content or markdown
  category: string;
  author: string;
  publishedAt: string;
  image?: string; // Optional image
  tags: string[];
  readingTime?: number; // Estimated reading time in minutes
}

// Mock data (should be imported from a central source later)
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Web Development Trends in 2024: A Senior Perspective",
    excerpt: "Delve into the cutting-edge technologies and frameworks shaping the future of robust web development. An essential read for seasoned professionals.",
    content: `
      <p>Web development is in a constant state of evolution, demanding continuous adaptation and strategic foresight. This article provides an in-depth analysis of the most impactful trends for 2024, focusing on scalability, security, and performance. We explore advancements in server-side rendering, progressive web applications, and the increasing adoption of AI-driven development tools. Understanding these shifts is crucial for maintaining a competitive edge in the rapidly evolving digital landscape.</p>
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is gaining traction, pushing computation and data storage closer to the sources of data. This paradigm shift significantly reduces latency and bandwidth usage, crucial for real-time applications and IoT devices. Implementing edge functions requires a deep understanding of distributed systems and network architecture.</p>
      <h3>Advanced Security Protocols</h3>
      <p>With the increasing sophistication of cyber threats, advanced security protocols are no longer optional. We discuss the importance of implementing robust authentication mechanisms, end-to-end encryption, and continuous security monitoring. DevSecOps practices are paramount to embedding security throughout the development lifecycle.</p>
      <h4>Future of Frontend Frameworks</h4>
      <p>While React and Vue continue to dominate, emerging frameworks and methodologies are pushing the boundaries of frontend development. Server Components, WebAssembly, and advanced state management techniques are redefining how we build interactive and performant user interfaces.</p>
      <p>For a deeper dive into these trends, consider exploring the official documentation of Next.js for Server Components or the WebAssembly specification.</p>
    `,
    category: "Development",
    author: "Wistant Kode",
    publishedAt: "2024-01-15",
    image: "/blog-post-1.jpg",
    tags: ["React", "Web Development", "Trends", "Architecture", "Performance", "DevSecOps"],
    readingTime: 7,
  },
  {
    id: 2,
    title: "Crafting Intuitive User Interfaces: UI/UX Principles for Engineers",
    excerpt: "Master the fundamental UI/UX design principles to engineer exceptional user experiences that are both functional and aesthetically pleasing.",
    content: `
      <p>An intuitive user interface is not merely about aesthetics; it's a critical component of software engineering that directly impacts user adoption and satisfaction. This piece dissects core UI/UX principles, offering actionable insights for developers to integrate design thinking into their development lifecycle. We cover topics such as cognitive load reduction, effective feedback mechanisms, and the importance of accessibility, ensuring that your applications are not just powerful, but also a pleasure to use.</p>
      <h2>User-Centric Design Methodologies</h2>
      <p>Adopting user-centric design methodologies, such as Design Thinking and Lean UX, ensures that development efforts are aligned with user needs. This involves continuous user research, prototyping, and iterative testing to refine the user experience.</p>
      <h3>Accessibility as a Core Requirement</h3>
      <p>Building accessible interfaces is not just a compliance issue; it's a moral and technical imperative. We emphasize the importance of WCAG guidelines, semantic HTML, and assistive technology compatibility to ensure that applications are usable by everyone.</p>
      <h4>The Role of Microinteractions</h4>
      <p>Subtle microinteractions can significantly enhance the perceived quality and responsiveness of an application. From button hovers to form validations, well-designed microinteractions provide immediate feedback and guide users through the interface seamlessly.</p>
    `,
    category: "Design",
    author: "Wistant Kode",
    publishedAt: "2024-01-10",
    image: "/blog-post-2.jpg",
    tags: ["UI/UX", "Design", "User Experience", "Frontend", "Engineering", "Accessibility"],
    readingTime: 5,
  },
  {
    id: 3,
    title: "Advanced Web Performance Optimization Techniques",
    excerpt: "Implement advanced strategies to significantly enhance the speed and performance of your web applications, ensuring optimal user engagement and SEO.",
    content: `
      <p>Optimizing web performance is a continuous endeavor that directly correlates with user retention and business success. This article outlines advanced techniques beyond basic caching and minification. We explore critical rendering path optimization, efficient resource loading strategies, server-side rendering benefits, and the impact of modern image formats. For engineers aiming to deliver lightning-fast web experiences, these insights are indispensable for achieving top-tier performance metrics.</p>
      <h2>Critical Rendering Path Optimization</h2>
      <p>Understanding and optimizing the Critical Rendering Path (CRP) is fundamental to achieving fast initial page loads. This involves prioritizing critical resources, deferring non-essential assets, and optimizing CSS and JavaScript delivery.</p>
      <h3>Efficient Resource Loading</h3>
      <p>Techniques such as lazy loading images and videos, preloading critical assets, and using responsive images can drastically reduce initial page weight and improve perceived performance. Strategic use of HTTP/2 and HTTP/3 protocols also plays a significant role.</p>
      <h4>Server-Side Rendering (SSR) vs. Static Site Generation (SSG)</h4>
      <p>Choosing between SSR and SSG depends on the application's specific requirements for data freshness and build times. Both offer significant performance advantages over client-side rendering by delivering fully formed HTML to the browser, improving both user experience and SEO.</p>
    `,
    category: "Performance",
    author: "Wistant Kode",
    publishedAt: "2024-01-05",
    image: "/blog-post-3.jpg",
    tags: ["Performance", "Optimization", "Web", "Speed", "SEO", "Frontend", "Backend"],
    readingTime: 8,
  }
];

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    const foundPost = mockPosts.find(p => p.id === Number(id));
    setPost(foundPost || null);
  }, [id]);

  useEffect(() => {
    if (post && contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      const toc = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.substring(1)); // H2 -> 2, H3 -> 3
        const text = heading.textContent || '';
        const headingId = heading.id || `section-${index}`;
        heading.id = headingId; // Ensure all headings have an ID
        return { id: headingId, text, level };
      });
      setTableOfContents(toc);
    }
  }, [post]);

  if (!post) {
    return (
      <Layout
        title="Blog Post Not Found | Wistant Kode"
        description="The requested blog post could not be found."
        keywords="blog, article, not found, Wistant Kode"
        lang="en"
      >
        <div className="min-h-screen flex items-center justify-center bg-background">
          <h1 className="text-3xl text-text-primary">Blog Post Not Found</h1>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
      title={`${post.title} | Wistant Kode Blog`}
      description={post.excerpt}
      keywords={post.tags.join(", ") + ", Wistant Kode, blog, software engineering"}
      lang="en"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>

              {post.image && (
                <div className="w-full h-80 overflow-hidden rounded-lg mb-8 shadow-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-text-secondary text-sm mb-8 space-x-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                {post.readingTime && (
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
                <Badge variant="secondary" className="text-xs">
                  {post.category}
                </Badge>
              </div>

              <div 
                className="prose prose-invert max-w-none text-text-secondary leading-relaxed"
                ref={contentRef} // Attach ref here
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10 border-t border-border pt-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-3 py-1">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Author Bio Section */}
              <Card className="bg-gradient-card border border-border-light mt-10 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold text-text-primary">About the Author</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex items-center">
                  <img 
                    src="/path/to/wistant-avatar.jpg" // Replace with actual avatar path
                    alt="Wistant Kode Avatar"
                    className="w-16 h-16 rounded-full mr-4 border-2 border-primary"
                  />
                  <div>
                    <p className="font-semibold text-text-primary">Wistant Kode</p>
                    <p className="text-sm text-text-secondary">DevSecOps Practicer & Software Engineer</p>
                    <p className="text-sm text-text-muted mt-1">Wistant Kode is passionate about building secure, scalable, and high-performance software solutions. With expertise in Java/Spring Boot, React/Next.js, Cloud, Automation, and Cybersecurity, Wistant aims to drive technological innovation.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts Section (Placeholder) */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Placeholder for related posts - will be dynamic later */}
                  <Card className="bg-gradient-card border border-border-light p-4">
                    <h3 className="font-semibold text-text-primary">Future of Frontend Frameworks</h3>
                    <p className="text-sm text-text-secondary">Explore emerging trends in UI development.</p>
                    <Link to="/blog/1" className="text-primary text-sm mt-2 inline-block">Read More &rarr;</Link>
                  </Card>
                  <Card className="bg-gradient-card border border-border-light p-4">
                    <h3 className="font-semibold text-text-primary">Advanced Security Protocols</h3>
                    <p className="text-sm text-text-secondary">Deep dive into modern cybersecurity practices.</p>
                    <Link to="/blog/1" className="text-primary text-sm mt-2 inline-block">Read More &rarr;</Link>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar / Table of Contents */}
            <div className="lg:col-span-1">
              {tableOfContents.length > 0 && (
                <Card className="bg-gradient-card border border-border-light p-6 sticky top-24">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-text-primary">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    {tableOfContents.map((item) => (
                      <a 
                        key={item.id} 
                        href={`#${item.id}`}
                        className={`block text-text-secondary hover:text-primary transition-colors ${item.level === 3 ? 'ml-4 text-sm' : 'text-base'}`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostDetail;
