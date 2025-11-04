import "../styles/globals.css";
import HeaderFooter from "@/components";

export const metadata = {
  title: "Aplikasi Presensi Online",
  description: "Tampilan sederhana aplikasi presensi online",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <HeaderFooter>{children}</HeaderFooter>
      </body>
    </html>
  );
}
