import { ContentForm } from "@/components/contentForm";
import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import { ServicesSection } from "@/components/servicesSection";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-white">
      <ToastContainer/>
      <HeaderComponent />
      <ContentForm />
      <ServicesSection />
      <FooterComponent />
    </main>
  );
}
