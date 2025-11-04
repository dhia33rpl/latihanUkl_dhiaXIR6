'use client';
import React from 'react';

export default function HomePage() {
  return (
    <div className="text-center space-y-4 px-4 py-8">
      <h1 className="text-2xl font-bold text-blue-600">
        Selamat Datang di Aplikasi Presensi
      </h1>
      <p className="text-gray-600">
        Kelola kehadiran dengan mudah, cepat, dan efisien.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Masuk
        </button>
        <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition-colors">
          Presensi
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-blue-500">Presensi Harian</h3>
          <p className="text-gray-600 mt-2">Catat kehadiran kamu setiap hari.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-blue-500">Riwayat Presensi</h3>
          <p className="text-gray-600 mt-2">Lihat daftar kehadiran sebelumnya.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition-shadow">
          <h3 className="font-semibold text-blue-500">Profil Pengguna</h3>
          <p className="text-gray-600 mt-2">Perbarui data diri kamu di sini.</p>
        </div>
      </div>
    </div>
  );
}
