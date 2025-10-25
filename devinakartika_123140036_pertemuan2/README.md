# Goodnotes: Aplikasi Catatan Berwarna Interaktif

**Goodnotes** adalah aplikasi personal dashboard sederhana yang berfokus pada fitur pencatatan interaktif dengan kemampuan kustomisasi warna. Dibangun menggunakan fitur-fitur modern JavaScript (ES6+), aplikasi ini menyimpan data catatan Anda secara lokal menggunakan `localStorage`. 'Goodnotes' ini dibuat oleh devina agar aplikasi untuk menambah catatannya.

## Fitur Utama

* **Pencatatan Interaktif:** Tambah, Edit, dan Hapus catatan dengan mudah.
* **Kustomisasi Warna:** Setiap catatan dapat diberi warna latar belakang unik untuk visualisasi yang menarik dan rapi.
* **Penyimpanan Lokal (Persistence):** Data Anda tetap tersimpan di *browser* Anda berkat `localStorage`.
* **Desain Responsif:** Tampilan yang menarik menggunakan CSS Grid untuk *desktop* dan *mobile*.

---

## Teknologi & Fitur ES6+ yang Digunakan

Proyek ini dibuat untuk praktik implementasi fitur-fitur modern JavaScript (ES6+):

| Fitur ES6+ Wajib | Deskripsi Implementasi |
| :--- | :--- |
| **Classes** | Digunakan untuk membuat *blueprint* objek `Note` dan *manager* aplikasi `DashboardManager`. |
| **`let` & `const`** | Digunakan secara tepat di seluruh *script* untuk deklarasi variabel. |
| **Arrow Functions** | Tiga fungsi panah diimplementasikan untuk utilitas internal dan operasi *array* (`.filter`). |
| **Template Literals** | Digunakan untuk *rendering* dinamis struktur HTML kartu catatan dalam fungsi `renderNotes`. |
| **Async Await / Promises** | Digunakan dalam metode `_loadNotes` untuk mensimulasikan dan menangani pemuatan data secara asinkron dari `localStorage`. |

---

## Cara Penggunaan

Aplikasi ini dapat dijalankan langsung di *browser* modern tanpa perlu *web server* atau *build tools*.

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/dvnkrtk/pemrograman_web_itera_123140036/tree/main/devinakartika_123140036_pertemuan2]
    ```
2.  **Buka File:** Buka folder proyek dan *double-click* pada file `index.html` atau seret ke jendela *browser* Anda.
3.  **Mulai Mencatat:**
    * Isi catatan Anda di area teks.
    * Pilih **warna** yang Anda inginkan.
    * Klik **Tambahkan Catatan**.
    * Gunakan tombol **(Edit)** dan **(Hapus)** pada setiap kartu catatan untuk berinteraksi.
