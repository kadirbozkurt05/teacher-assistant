import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, GraduationCap, Sparkles, Users, BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Öğretmenler için Yenilikçi Araçlar
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Modern Eğitim Asistanınız
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sınıf öğretmenlerine özel hazırlanmış dijital araçlarla eğitimi daha etkili ve 
                eğlenceli hale getirin. Zaman kazanın, yaratıcılığınızı artırın.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                  <Link to="/syllables">Hemen Başlayın</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">Daha Fazla Bilgi</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80"
                alt="Sınıf ortamı"
                className="relative rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Özelliklerimiz</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Öğretmenlere özel tasarlanmış araçlarımızla eğitimi daha verimli hale getirin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-primary/5">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hece Çalışması</h3>
              <p className="text-muted-foreground">
                Kelimeleri hecelerine ayırarak öğrencileriniz için özel çalışma materyalleri oluşturun.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-primary/5">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kolay Kullanım</h3>
              <p className="text-muted-foreground">
                Kullanıcı dostu arayüz ile hızlıca materyaller hazırlayın ve yazdırın.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-primary/5">
              <BookCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Yakında Gelecek</h3>
              <p className="text-muted-foreground">
                Yeni özellikler ve araçlar eklenmeye devam edecek. Takipte kalın!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Eğitimde Yeni Nesil Yaklaşım
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Öğrencilerinizin öğrenme sürecini kolaylaştırmak için modern araçları kullanın.
              Zamandan tasarruf edin, daha etkili öğretim materyalleri hazırlayın.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
              <Link to="/syllables">Hemen Deneyin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}