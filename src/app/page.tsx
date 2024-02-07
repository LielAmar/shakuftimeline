import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticlesWrapper from "@/components/content/ArticlesWrapper";
import StatisticsWrapper from "@/components/content/StatisticsWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <ArticlesWrapper />
      <StatisticsWrapper />

      <Footer />
    </main>
  );
}
