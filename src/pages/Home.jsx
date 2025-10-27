// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockData } from "../mock/data";
import { blogArticles, blogCategories } from "../mock/blogData";

import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Target,
  Palette,
  Globe,
  Share2,
  Star,
  MapPin,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Check,
} from "lucide-react";
import WhatsAppChat from "../components/WhatsAppChat";
import {
  hero,
  packages,
  services,
  portfolio,
  testimonials,
  team,
  contact,
  whatsappChat,
} from "../mock/data";
import { useState, useEffect } from "react";

const iconMap = {
  target: Target,
  palette: Palette,
  globe: Globe,
  "share-2": Share2,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
};

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 Kunci scroll body ketika menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]); // --- Inline data (Visual Creative) ---

  // const contact = {
  //   title: "Hubungi Kami",
  //   subtitle:
  //     "Siap bantu wujudkan website impianmu. Konsultasi gratis tanpa komitmen!",
  //   whatsapp: "081311468814", // display
  //   whatsappApi: "6281311468814", // use for wa.me
  //   email: "hello@visualcreative.id",
  //   address: "Jl. Kreatif No. 99, Bogor, Indonesia",
  //   mapEmbed:
  //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666!2d106.8451!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDIuNCJF!5e0!3m2!1sen!2sid!4v1234567890",
  // };

  // const whatsappChat = {
  //   defaultMessage:
  //     "Halo Visual Creative, saya mau buat website. Bisa bantu jelaskan paketnya?",
  //   chatTitle: "Chat dengan Visual Creative",
  //   placeholder: "Tulis pesan Anda...",
  //   sendButton: "Kirim",
  // };

  // --- Component state & handlers ---
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const nextTestimonial = () =>
    setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (p) => (p - 1 + testimonials.length) % testimonials.length
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Visual Creative!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nPesan: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/${contact.whatsappApi}?text=${encoded}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen text-gray-900 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0f0f36] border-b border-gray-800 shadow-sm">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          {/* === LOGO === */}
          <div className="flex items-center space-x-3">
            <img
              src="img/logo/logo_visual_1.png"
              alt="Visual Creative Logo"
              className="object-contain h-16 w-44"
            />
          </div>

          {/* === DESKTOP NAVIGATION === */}
          <nav className="hidden space-x-8 md:flex">
            {[
              { href: "#home", label: "Beranda" },
              { href: "#services", label: "Layanan" },
              { href: "#portfolio", label: "Portofolio" },
              { to: "/blog", label: "Blog", isLink: true },
              { href: "#about", label: "Tentang" },
              { href: "#contact", label: "Kontak" },
            ].map((item, i) =>
              item.isLink ? (
                <Link
                  key={i}
                  to={item.to}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={i}
                  href={item.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* === BUTTON & MOBILE TOGGLE === */}
          <div className="flex items-center space-x-3">
            <a
              href={`https://wa.me/${contact.whatsappApi}`}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-block"
            >
              <Button className="font-semibold text-black bg-white hover:bg-gray-200">
                Konsultasi Gratis
              </Button>
            </a>

            {/* === MOBILE MENU BUTTON === */}
            <button
              className="p-2 text-white bg-gray-800 rounded md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* === MOBILE OVERLAY & MENU === */}
        <>
          {/* 1. Background Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className={`
            fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden
            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }
          `}
          />

          {/* 2. Sliding Menu Panel */}
          <div
            className={`
            fixed top-0 right-0 z-50 h-screen w-[80%] max-w-[320px]
            bg-[#0f0f36]/95 shadow-2xl border-l border-white/10
            transform transition-transform duration-300 ease-in-out md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}
          `}
          >
            <nav className="flex flex-col h-full px-8 pt-24 pb-8 space-y-6 text-[17px] font-medium text-gray-300">
              {[
                { href: "#home", label: "Beranda" },
                { href: "#services", label: "Layanan" },
                { href: "#portfolio", label: "Portofolio" },
                { to: "/blog", label: "Blog", isLink: true },
                { href: "#about", label: "Tentang" },
                { href: "#contact", label: "Kontak" },
              ].map((item, i) =>
                item.isLink ? (
                  <Link
                    key={i}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-all duration-200 hover:text-white hover:translate-x-1"
                  >
                    {item.label}
                  </a>
                )
              )}

              <div className="flex-grow" />

              <a
                href={`https://wa.me/${contact.whatsappApi}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button className="w-full py-3 text-lg font-semibold text-[#0f0f36] bg-white hover:bg-gray-200 active:scale-[0.98] transition-transform duration-150">
                  💬 Konsultasi Gratis
                </Button>
              </a>
            </nav>
          </div>
        </>
      </header>

      {/* Hero */}
      <section id="home" className="py-20 lg:py-28">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mb-8 text-lg text-gray-600">{hero.subtitle}</p>
              <div className="flex items-center gap-4">
                <a
                  href={`https://wa.me/${
                    contact.whatsappApi
                  }?text=${encodeURIComponent(whatsappChat.defaultMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-[#0f0f36] hover:bg-[#06061d] text-white px-8 py-4"
                  >
                    {" "}
                    {hero.ctaText}{" "}
                  </Button>
                </a>
                <a
                  href="#packages"
                  className="text-sm text-gray-600 hover:underline"
                >
                  Lihat Paket & Harga
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                alt="Visual Creative - website design"
                className="object-cover w-full h-auto shadow-2xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}

      <section id="packages" className="py-20 bg-[#F8FAFC]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold lg:text-4xl text-[#0f0f36]">
              Paket & Harga
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Pilih paket yang sesuai kebutuhan — mulai dari landing page
              sederhana hingga website lengkap.
            </p>
          </div>

          {/* --- PERUBAHAN DI SINI --- */}
          {/* Kembali ke 4 kolom di layar besar (lg) dan 2 di medium (md) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="h-full" // Menambahkan h-full di motion div
              >
                <Card
                  className={`relative flex h-full flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                    p.name.includes("Diamond")
                      ? "bg-gradient-to-b from-[#0f0f36] to-[#252567] text-white border-0"
                      : p.highlight
                      ? "border-2 border-[#0f0f36] bg-white"
                      : "border border-gray-200 bg-white"
                  }`}
                >
                  {/* Wrapper untuk konten atas (deskripsi & fitur) */}
                  <div>
                    {/* Badge "Best Seller" untuk paket highlight */}
                    {p.highlight && !p.name.includes("Diamond") && (
                      <span className="absolute px-3 py-1 text-sm font-semibold text-white bg-[#0f0f36] rounded-full -top-3 right-3">
                        Best Seller
                      </span>
                    )}

                    <CardHeader className="text-center">
                      <Badge
                        className={`mx-auto w-fit ${
                          p.name.includes("Diamond")
                            ? "bg-white text-[#0f0f36]"
                            : "bg-[#0f0f36] text-white"
                        }`}
                      >
                        {p.name}
                      </Badge>
                      <CardTitle
                        className={`mt-4 text-3xl font-bold ${
                          p.name.includes("Diamond")
                            ? "text-white"
                            : "text-[#0f0f36]"
                        }`}
                      >
                        {/* Logika harga yang lebih baik */}
                        {p.price.startsWith("Mulai")
                          ? p.price
                          : `Rp ${p.price}`}
                      </CardTitle>
                      <CardDescription
                        className={`mt-2 ${
                          p.name.includes("Diamond")
                            ? "text-white/90"
                            : "text-gray-600"
                        }`}
                      >
                        {p.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul
                        className={`mb-6 space-y-3 ${
                          p.name.includes("Diamond")
                            ? "text-white/90"
                            : "text-gray-700"
                        }`}
                      >
                        {p.features.map((f, idx) => (
                          // Mengganti bullet point dengan Ikon Check
                          <li key={idx} className="flex items-start space-x-2">
                            <Check
                              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                p.name.includes("Diamond")
                                  ? "text-white"
                                  : "text-[#2e2e9c]"
                              }`}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  {/* Wrapper untuk konten bawah (note & tombol) */}
                  <CardContent>
                    {/* Menampilkan 'note' jika ada di data */}
                    {p.note && (
                      <p
                        className={`mb-4 text-xs italic ${
                          p.name.includes("Diamond")
                            ? "text-white/80"
                            : "text-gray-500"
                        }`}
                      >
                        * {p.note}
                      </p>
                    )}
                    <a
                      href={`https://wa.me/${
                        contact.whatsappApi
                      }?text=${encodeURIComponent(
                        `Halo Visual Creative, saya mau pesan paket ${p.name} (Rp ${p.price}).`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        className={`w-full font-semibold ${
                          p.name.includes("Diamond")
                            ? "bg-white text-[#0f0f36] hover:bg-gray-100"
                            : "bg-[#0f0f36] hover:bg-[#23238a] text-white"
                        }`}
                      >
                        Pesan Paket {p.name}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold lg:text-4xl">
              Layanan Kami
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Layanan lengkap dari desain, pengembangan, hingga optimasi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Target;
              return (
                <motion.div
                  key={service.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                >
                  <Card className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#0f0f36] to-[#23238a] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-600">
                      {service.description}
                    </CardDescription>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#F8FAFC]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold lg:text-4xl text-[#0f0f36]">
              Portofolio Kami
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Beberapa proyek website dan aplikasi yang telah kami selesaikan
              untuk klien kami.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <Card className="flex flex-col justify-between h-full overflow-hidden transition-all duration-300 bg-white border-none shadow-md hover:shadow-xl group">
                  <div>
                    {/* Gambar + overlay */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full transition-transform duration-500 h-52 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 transition duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
                      <div className="absolute bottom-3 left-3">
                        <Badge
                          variant="secondary"
                          className="text-white bg-black/60 backdrop-blur-sm"
                        >
                          {item.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Konten teks */}
                    <CardHeader>
                      <CardTitle className="mt-4 text-lg font-semibold text-[#0f0f36] group-hover:text-[#23238a] transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Tech stack badges */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-2 px-6 pb-3">
                        {item.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-[#E0F2FE] text-[#0f0f36] rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="px-6 pb-6 mt-auto">
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noreferrer"
                      className="block"
                    >
                      <Button className="w-full   bg-[#0f0f36] hover:bg-[#23238a] text-white font-semibold transition-all">
                        Lihat Selengkapnya
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      {/* Blog Preview Section */}
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Blog & Edukasi
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Tips dan insights terbaru seputar digital marketing untuk UMKM
              Indonesia
            </p>
          </div>

          {/* GRID ARTIKEL */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((item) => (
              <div
                key={item.id}
                className="flex flex-col p-4 transition-shadow bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg"
              >
                <img
                  src={item.featuredImage}
                  alt={item.title}
                  className="object-cover w-full mb-4 rounded-lg aspect-video"
                />
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="flex-grow mb-4 text-base text-gray-600">
                  {item.excerpt}
                </p>
                <div className="px-6 pb-6 mt-auto">
                  <a
                    href={`/blog/${item.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Button className="w-full   bg-[#0f0f36] hover:bg-[#23238a] text-white font-semibold transition-all">
                      Lihat Selengkapnya
                    </Button>
                  </a>
                </div>
                {/* <Button
                  href={`/blog/${item.slug}`}
                  className="font-semiboldbg-[#0f0f36] hover:bg-[#23238a] transition-colors"
                >
                  Baca Selengkapnya →
                </Button> */}
              </div>
            ))}
          </div>

          {/* TOMBOL LIHAT SEMUA */}
          <div className="mt-16 text-center">
            <a
              href="/blog"
              className="inline-block px-8 py-3 text-lg font-semibold text-white transition-colors bg-[#0f0f36] hover:bg-[#23238a] rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Lihat Semua Berita
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-[#F8FAFC]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">Testimoni Klien</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Kepercayaan klien adalah prioritas kami.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8 text-center">
              <CardContent>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg italic text-gray-700">
                  "{testimonials[currentTestimonial].testimony}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="object-cover rounded-full w-14 h-14"
                  />
                  <div className="text-left">
                    <p className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].business}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6">
                  <Button variant="outline" size="sm" onClick={prevTestimonial}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextTestimonial}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* About */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <img
                src={team.teamImage}
                alt="Visual Creative team"
                className="object-cover w-full shadow-2xl rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                {team.title}
              </h2>
              <p className="mb-6 text-gray-600">{team.description}</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#0f0f36]">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600">{team.vision}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#23238a]">
                    Misi Kami
                  </h3>
                  <p className="text-gray-600">{team.mission}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#F8FAFC]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold lg:text-4xl">{contact.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {contact.subtitle}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Kirim Pesan
                </CardTitle>
                <CardDescription>
                  Isi form untuk konsultasi gratis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1 resize-none h-28"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0f0f36] hover:bg-[#23238a] text-white"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Informasi Kontak
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0f0f36] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Alamat</h4>
                      <p className="text-gray-600">{contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0f0f36] rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">{contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">WhatsApp</h4>
                      <p className="text-gray-600">{contact.whatsapp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-64">
                  <iframe
                    src={contact.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Visual Creative Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-white bg-[#0f0f36] border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center mb-3 space-x-3">
                <img
                  src="img/logo/logo_visual_1.png"
                  alt="Visual Creative Logo"
                  className="object-contain h-16 w-44"
                />
              </div>
              <p className="text-gray-400">
                Jasa pembuatan website & landing page — cepat, modern, dan
                terjangkau.
              </p>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Landing Page</li>
                <li>Website Multi Halaman</li>
                <li>Integrasi WhatsApp</li>
                <li>Optimasi Kecepatan</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-semibold">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>{contact.address}</p>
                <p>{contact.email}</p>
                <p>{contact.whatsapp}</p>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Visual Creative. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat (floating) */}
      <WhatsAppChat
        phone={contact.whatsappApi}
        defaultMessage={whatsappChat.defaultMessage}
      />
    </div>
  );
};

export default Home;
