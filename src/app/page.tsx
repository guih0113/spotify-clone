import { Sidebar } from '@/components/Sidebar';
import { NavButtons } from '@/components/NavButtons';
import { FirstSection } from '@/components/FirstSection';
import { SecondSection } from '@/components/SecondSection';
import { Footer } from '@/components/Footer';

export default function Home() {                                                                                                                                                                      
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />  
        <main className="flex-1 p-6">
          <NavButtons/>

          <FirstSection/>

          <SecondSection/>
        </main>
      </div>

      <Footer/>
    </div>
  );
}
