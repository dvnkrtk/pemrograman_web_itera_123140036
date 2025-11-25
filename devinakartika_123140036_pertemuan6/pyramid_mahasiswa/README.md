# Aplikasi Manajemen Matakuliah – Pyramid Framework
Aplikasi ini adalah REST API sederhana untuk manajemen data Matakuliah, dibuat menggunakan Pyramid Framework, PostgreSQL, dan SQLAlchemy ORM. API ini menyediakan fitur CRUD (Create, Read, Update, Delete) dan digunakan sebagai tugas praktikum pengembangan API dengan Pyramid.

---

Model Matakuliah terdiri dari:
- **id** (Integer, Primary Key, Auto Increment)  
- **kode_mk** (Text, Unique, Not Null)  
- **nama_mk** (Text, Not Null)  
- **sks** (Integer, Not Null)  
- **semester** (Integer, Not Null)

---

## Cara Instalasi

### Membuat Virtual Environment
```bash
cd pyramid_mahasiswa
python -m venv venv
venv\Scripts\activate
```

### Instalasi Dependensi
```bash
python -m pip install --upgrade pip setuptools
pip install -e ".[testing]"
```

### Konfigurasi Database
Secara default `development.ini` menggunakan SQLite (`sqlite:///pyramid_mahasiswa.sqlite`). Untuk mengganti database, ubah nilai berikut:
```ini
sqlalchemy.url = postgresql+psycopg2://user:pass@localhost:5432/pyramid_mahasiswa
```

---

## Cara Menjalankan

### Menjalankan Migrasi
```bash
alembic -c development.ini upgrade head
initialize_pyramid_mahasiswa_db development.ini  # opsi untuk seed data contoh
```

### Menjalankan Server
```bash
pserve development.ini --reload
```
Server aktif di `http://localhost:6543`. Halaman utama menampilkan dokumentasi singkat beserta daftar endpoint.

## API Endpoints
Server berjalan pada `http://localhost:6543`.