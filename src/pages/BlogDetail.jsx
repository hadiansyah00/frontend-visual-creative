import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import {
  ArrowLeft,
  Clock,
  Eye,
  Calendar,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "../mock/blogData";

export const BlogDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const relatedArticles = article ? getRelatedArticles(article) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Artikel Tidak Ditemukan
          </h1>
          <p className="mb-8 text-gray-600">
            Artikel yang Anda cari tidak tersedia.
          </p>
          <Button
            asChild
            className="bg-[#0f0f36] hover:bg-[#2e2e9c] text-white"
          >
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const shareUrl = window.location.href;
  const shareTitle = article.title;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0f0f36]  border-gray-100 shadow-sm ">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <div className="flex items-center space-x-3">
            <img
              src="/img/logo/logo_visual_1.png"
              alt="Visual Creative Logo"
              className="object-contain h-16 w-44"
            />
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#ffff] text-[#ffff] hover:bg-[#0f0f36] hover:text-white"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-[#F4F4F4]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center mb-6 space-x-2 text-sm text-gray-500 duration-1000 animate-in fade-in-0 slide-in-from-bottom-4">
              <Link to="/" className="hover:text-[#0f0f36] transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="hover:text-[#0f0f36] transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>

            {/* Article Meta */}
            <div className="mb-6 duration-1000 delay-200 animate-in fade-in-0 slide-in-from-bottom-4">
              <Badge className="bg-[#0f0f36] text-white mb-4">
                {article.category
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 duration-1000 delay-300 lg:text-5xl animate-in fade-in-0 slide-in-from-bottom-4">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600 duration-1000 animate-in fade-in-0 slide-in-from-bottom-4 delay-400">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{article.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 duration-1000 delay-500 animate-in fade-in-0 slide-in-from-bottom-4">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto duration-1000 animate-in fade-in-0 slide-in-from-bottom-4 delay-600">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="object-cover w-full h-64 shadow-2xl md:h-96 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg duration-1000 delay-700 max-w-none animate-in fade-in-0 slide-in-from-bottom-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{
                    "--tw-prose-body": "#374151",
                    "--tw-prose-headings": "#111827",
                    "--tw-prose-links": "#0f0f36",
                    "--tw-prose-bold": "#111827",
                    "--tw-prose-counters": "#6B7280",
                    "--tw-prose-bullets": "#D1D5DB",
                    "--tw-prose-hr": "#E5E7EB",
                    "--tw-prose-quotes": "#111827",
                    "--tw-prose-quote-borders": "#E5E7EB",
                    "--tw-prose-captions": "#6B7280",
                    "--tw-prose-code": "#111827",
                    "--tw-prose-pre-code": "#E5E7EB",
                    "--tw-prose-pre-bg": "#1F2937",
                    "--tw-prose-th-borders": "#D1D5DB",
                    "--tw-prose-td-borders": "#E5E7EB",
                  }}
                />

                {/* Social Share */}
                <div className="pt-8 mt-12 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Bagikan Artikel
                    </h3>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              shareUrl
                            )}`,
                            "_blank"
                          )
                        }
                        className="text-[#1877F2] border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                      >
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                              shareTitle
                            )}&url=${encodeURIComponent(shareUrl)}`,
                            "_blank"
                          )
                        }
                        className="text-[#1DA1F2] border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                              shareUrl
                            )}`,
                            "_blank"
                          )
                        }
                        className="text-[#0A66C2] border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Author Card */}
                <Card className="sticky mb-8 border-0 shadow-lg top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Tentang Penulis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4 space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0f0f36] to-[#2e2e9c] rounded-full flex items-center justify-center text-white font-bold">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {article.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          Digital Marketing Expert
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Spesialis digital marketing dengan pengalaman lebih dari 5
                      tahun membantu UMKM berkembang.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#F4F4F4]">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
                Artikel Terkait
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedArticles.map((relatedArticle, index) => (
                  <Card
                    key={relatedArticle.id}
                    className="overflow-hidden transition-all duration-300 bg-white border-0 shadow-lg hover:shadow-xl group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedArticle.featuredImage}
                        alt={relatedArticle.title}
                        className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#0f0f36] text-white text-xs">
                          {relatedArticle.category
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#0f0f36] transition-colors leading-tight">
                        <Link to={`/blog/${relatedArticle.slug}`}>
                          {relatedArticle.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-gray-600 line-clamp-3">
                        {relatedArticle.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedArticle.readTime}</span>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-[#0f0f36] text-[#0f0f36] hover:bg-[#0f0f36] hover:text-white"
                        >
                          <Link to={`/blog/${relatedArticle.slug}`}>Baca</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f0f36] to-[#2e2e9c]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="mb-6 text-4xl font-bold">
              Butuh Strategi Digital Marketing yang Tepat?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Konsultasikan kebutuhan digital marketing UMKM Anda dengan tim
              ahli Dreams Marketing.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#0f0f36] hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0f0f36] to-[#2e2e9c] rounded-lg"></div>
                <h3 className="text-xl font-bold">Dreams Marketing</h3>
              </div>
              <p className="text-gray-400">
                Jasa pembuatan website & landing page — cepat, modern, dan
                terjangkau.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Landing Page</li>
                <li>Website Multi Halaman</li>
                <li>Integrasi WhatsApp</li>
                <li>Optimasi Kecepatan</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                {/* <p>Jl. Merdeka No. 123, Jakarta Pusat 10110</p> */}
                <p>hadiansyah.mac@gmail.com</p>
                <p>+6281311468814</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Visual Creative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogDetail;
