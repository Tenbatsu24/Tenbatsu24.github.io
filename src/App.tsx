import { Route, Routes, Link } from "react-router-dom";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { HomePage } from "@/pages/Home";
import { ContentPage } from "@/pages/Content";

function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-gradient">404</h1>
      <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Go home
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<ContentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
}
