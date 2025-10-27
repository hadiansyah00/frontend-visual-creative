import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { Input } from "../components/ui/input";
import {
  ArrowLeft,
  Clock,
  Eye,
  Search,
  TrendingUp,
  Calendar,
  User,
} from "lucide-react";
import {
  blogCategories,
  recentArticles,
  popularArticles,
  getArticlesByCategory,
} from "../mock/blogData";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState(recentArticles);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filteredArticles = getArticlesByCategory(selectedCategory);

    if (searchTerm) {
      filteredArticles = filteredArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setArticles(filteredArticles);
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0f0f36]  border-gray-100 shadow-sm ">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <div className="flex items-center space-x-3">
            <img
              src="img/logo/logo_visual_1.png"
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
      <section className="py-16 bg-gradient-to-r from-[#F4F4F4] to-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 duration-1000 lg:text-5xl animate-in fade-in-0 slide-in-from-bottom-4">
              Blog & Edukasi
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600 duration-1000 delay-200 animate-in fade-in-0 slide-in-from-bottom-4">
              Artikel, tips, dan insights terbaru seputar digital marketing
              untuk UMKM Indonesia
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto duration-1000 animate-in fade-in-0 slide-in-from-bottom-4 delay-400">
              <Search className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-gray-200 focus:border-[#0f0f36] focus:ring-[#0f0f36]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Kategori
              </h3>
              <div className="flex flex-wrap gap-3">
                {blogCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? "bg-[#0f0f36] hover:bg-[#2e2e9c] text-white"
                        : "border-gray-300 text-gray-600 hover:border-[#0f0f36] hover:text-[#0f0f36]"
                    }`}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="space-y-8">
              {articles.length > 0 ? (
                articles.map((article, index) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden transition-all duration-300 border-0 shadow-lg hover:shadow-xl group animate-in fade-in-0 slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid gap-0 md:grid-cols-3">
                      {/* Featured Image */}
                      <div className="relative overflow-hidden md:col-span-1">
                        <img
                          src={article.featuredImage}
                          alt={article.title}
                          className="object-cover w-full h-64 transition-transform duration-500 md:h-full group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#0f0f36] text-white">
                            {
                              blogCategories.find(
                                (cat) => cat.id === article.category
                              )?.name
                            }
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2">
                        <CardHeader className="pb-4">
                          <div className="flex items-center mb-3 space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(article.publishDate)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-[#0f0f36] transition-colors leading-tight">
                            <Link to={`/blog/${article.slug}`}>
                              {article.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-6 leading-relaxed text-gray-600">
                            {article.excerpt}
                          </CardDescription>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.slice(0, 3).map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Author & Read More */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <Button
                              asChild
                              variant="outline"
                              className="border-[#0f0f36] text-[#0f0f36] hover:bg-[#0f0f36] hover:text-white"
                            >
                              <Link to={`/blog/${article.slug}`}>
                                Baca Selengkapnya
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="py-12 text-center">
                  <div className="mb-4 text-gray-400">
                    <Search className="w-16 h-16 mx-auto mb-4" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Artikel Tidak Ditemukan
                  </h3>
                  <p className="text-gray-600">
                    Coba gunakan kata kunci lain atau pilih kategori yang
                    berbeda.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Popular Articles */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-[#0f0f36]" />
                    <span>Artikel Populer</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularArticles.map((article, index) => (
                      <div key={article.id}>
                        <Link
                          to={`/blog/${article.slug}`}
                          className="block group"
                        >
                          <div className="flex space-x-3">
                            <img
                              src={article.featuredImage}
                              alt={article.title}
                              className="object-cover w-16 h-16 transition-transform duration-300 rounded-lg group-hover:scale-105"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#0f0f36] transition-colors leading-tight mb-2">
                                {article.title}
                              </h4>
                              <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <Eye className="w-3 h-3" />
                                <span>{article.views.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        {index < popularArticles.length - 1 && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-[#0f0f36] to-[#23238a] text-white">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription className="text-white/90">
                    Dapatkan tips digital marketing terbaru langsung di inbox
                    Anda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email Anda"
                      className="text-gray-900 bg-white border-0"
                    />
                    <Button className="w-full bg-white text-[#0f0f36] hover:bg-gray-100">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Kategori</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {blogCategories
                      .filter((cat) => cat.id !== "all")
                      .map((category) => (
                        <Button
                          key={category.id}
                          variant="ghost"
                          className="w-full justify-between text-left hover:bg-[#F4F4F4]"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </Button>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Butuh Bantuan Digital Marketing?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Konsultasikan strategi digital marketing terbaik untuk UMKM Anda
              bersama tim ahli Dreams Marketing.
            </p>
            <Button
              size="lg"
              className="bg-[#0f0f36] hover:bg-[#2e2e9c] text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Konsultasi Gratis
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
                <div className="w-8 h-8 bg-gradient-to-r from-[#0f0f36] to-[#23238a] rounded-lg"></div>
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

export default Blog;
