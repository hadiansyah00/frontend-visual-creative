import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ArrowLeft, Calendar, MapPin, User, Target, TrendingUp, Star, ExternalLink } from 'lucide-react';
import { portfolioDetails } from '../mock/portfolioData';

export const PortfolioDetail = () => {
  const { id } = useParams();
  const portfolio = portfolioDetails[parseInt(id)];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Portfolio yang Anda cari tidak tersedia.</p>
          <Button asChild className="bg-[#E50914] hover:bg-[#C4070F] text-white">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#E50914] to-[#004AAD] rounded-lg"></div>
            <h1 className="text-2xl font-bold text-gray-900">Dreams Marketing</h1>
          </div>
          <Button asChild variant="outline" className="border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-[#F4F4F4] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#004AAD] text-white mb-4 text-sm px-4 py-1">
              {portfolio.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              {portfolio.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              {portfolio.overview}
            </p>
            
            {/* Project Info */}
            <div className="grid md:grid-cols-4 gap-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <User className="h-5 w-5 text-[#E50914]" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Klien</p>
                  <p className="text-sm">{portfolio.client}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-[#E50914]" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Lokasi</p>
                  <p className="text-sm">{portfolio.location}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Calendar className="h-5 w-5 text-[#E50914]" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Durasi</p>
                  <p className="text-sm">{portfolio.duration}</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Target className="h-5 w-5 text-[#E50914]" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Kategori</p>
                  <p className="text-sm">{portfolio.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tantangan</h2>
            <Card className="bg-[#F4F4F4] border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {portfolio.challenge}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Before & After</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <Card className="overflow-hidden border-0 shadow-xl bg-white">
                <div className="relative">
                  <img 
                    src={portfolio.beforeAfter.before.image} 
                    alt="Before"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive" className="bg-gray-600">
                      BEFORE
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {portfolio.beforeAfter.before.description}
                  </p>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="overflow-hidden border-0 shadow-xl bg-white">
                <div className="relative">
                  <img 
                    src={portfolio.beforeAfter.after.image} 
                    alt="After"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#25D366] text-white">
                      AFTER
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {portfolio.beforeAfter.after.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Strategi yang Digunakan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {portfolio.strategy.map((item, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#E50914] to-[#004AAD] rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#E50914] transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Hasil yang Dicapai</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.results.map((result, index) => (
                <Card 
                  key={index} 
                  className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-[#25D366] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-[#E50914] mb-2">
                      {result.value}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {result.metric}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Testimoni Klien</h2>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "{portfolio.testimonial.text}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 text-lg">
                    {portfolio.testimonial.author}
                  </p>
                  <p className="text-gray-600">
                    {portfolio.testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Gallery Proyek</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#E50914] to-[#004AAD]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Siap Mencapai Hasil Serupa untuk Bisnis Anda?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Konsultasikan strategi digital marketing yang tepat untuk UMKM Anda bersama tim Dreams Marketing.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#E50914] hover:bg-gray-100 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E50914] to-[#004AAD] rounded-lg"></div>
                <h3 className="text-xl font-bold">Dreams Marketing</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Partner terpercaya UMKM Indonesia dalam transformasi digital marketing untuk pertumbuhan bisnis berkelanjutan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Advertising</li>
                <li>Branding & Design</li>
                <li>Website Development</li>
                <li>Social Media Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Jl. Merdeka No. 123, Jakarta Pusat 10110</p>
                <p>info@dreamsmarketing.com</p>
                <p>+6281234567890</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Dreams Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioDetail;