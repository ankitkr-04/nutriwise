import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      
    </main>
  );
}
