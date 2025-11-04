"use client";

export default function HeaderFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Aplikasi Presensi Online</h1>
          <nav className="space-x-4">
            <a href="/homepage" className="hover:underline">Home</a>
            <a href="/attendance" className="hover:underline">Presensi</a>
            <a href="/history" className="hover:underline">Riwayat</a>
            <a href="/users" className="hover:underline">Pengguna</a>
            <a href="/profile" className="hover:underline">Profil</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-3 mt-8">
        <p>© 2025 Aplikasi Presensi Online. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
