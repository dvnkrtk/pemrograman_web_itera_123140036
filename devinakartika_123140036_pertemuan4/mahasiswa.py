# --- Data awal mahasiswa ---
mahasiswa_list = [
    {"nama": "Devina Kartika", "nim": "123140036", "nilai_uts": 80, "nilai_uas": 85, "nilai_tugas": 90},
    {"nama": "Fathurrahman", "nim": "123140088", "nilai_uts": 75, "nilai_uas": 90, "nilai_tugas": 78},
    {"nama": "Nazwa Aqila", "nim": "123140203", "nilai_uts": 60, "nilai_uas": 65, "nilai_tugas": 70},
    {"nama": "Ramadhan Iqbal", "nim": "123140033", "nilai_uts": 80, "nilai_uas": 88, "nilai_tugas": 92},
    {"nama": "Olivia Gathier", "nim": "123140211", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 58}
]

# --- Fungsi Menghitung Nilai Akhir ---
def hitung_nilai_akhir(mhs):
    return 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]

# --- Fungsi Menentukan Grade ---
def tentukan_grade(nilai_akhir):
    if nilai_akhir >= 80:
        return "A"
    elif nilai_akhir >= 70:
        return "B"
    elif nilai_akhir >= 60:
        return "C"
    elif nilai_akhir >= 50:
        return "D"
    else:
        return "E"

# --- Fungsi Menampilkan Data dalam Bentuk Tabel ---
def tampilkan_data(mahasiswa_list):
    print("=" * 75)
    print(f"{'NIM':<12} {'Nama':<20} {'UTS':<6} {'UAS':<6} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
    print("=" * 75)
    for mhs in mahasiswa_list:
        nilai_akhir = hitung_nilai_akhir(mhs)
        grade = tentukan_grade(nilai_akhir)
        print(f"{mhs['nim']:<12} {mhs['nama']:<20} {mhs['nilai_uts']:<6} {mhs['nilai_uas']:<6} {mhs['nilai_tugas']:<7} {nilai_akhir:<7.2f} {grade:<5}")
    print("=" * 75)

# --- Fungsi Mencari Mahasiswa dengan Nilai Tertinggi/Terendah ---
def cari_mahasiswa_extreme(mahasiswa_list, jenis="tertinggi"):
    if jenis == "tertinggi":
        return max(mahasiswa_list, key=lambda m: hitung_nilai_akhir(m))
    elif jenis == "terendah":
        return min(mahasiswa_list, key=lambda m: hitung_nilai_akhir(m))

# --- Fungsi Menambahkan Data Mahasiswa Baru ---
def tambah_mahasiswa(mahasiswa_list):
    print("\n--- Input Data Mahasiswa Baru ---")
    nama = input("Nama: ")
    nim = input("NIM: ")
    uts = float(input("Nilai UTS: "))
    uas = float(input("Nilai UAS: "))
    tugas = float(input("Nilai Tugas: "))
    mahasiswa_list.append({
        "nama": nama,
        "nim": nim,
        "nilai_uts": uts,
        "nilai_uas": uas,
        "nilai_tugas": tugas
    })
    print("✅ Data berhasil ditambahkan!\n")

# --- Fungsi Filter Mahasiswa Berdasarkan Grade ---
def filter_grade(mahasiswa_list, grade_dicari):
    hasil = []
    for mhs in mahasiswa_list:
        nilai_akhir = hitung_nilai_akhir(mhs)
        if tentukan_grade(nilai_akhir) == grade_dicari.upper():
            hasil.append(mhs)
    return hasil

# --- Fungsi Menghitung Rata-rata Nilai Akhir Kelas ---
def rata_rata_kelas(mahasiswa_list):
    total = sum(hitung_nilai_akhir(m) for m in mahasiswa_list)
    return total / len(mahasiswa_list)

# --- Menu Utama ---
def menu():
    while True:
        print("\n=== MENU PENGELOLAAN NILAI MAHASISWA ===")
        print("1. Tampilkan Data Mahasiswa")
        print("2. Tambah Data Mahasiswa")
        print("3. Cari Mahasiswa Nilai Tertinggi")
        print("4. Cari Mahasiswa Nilai Terendah")
        print("5. Filter Mahasiswa Berdasarkan Grade")
        print("6. Hitung Rata-rata Nilai Kelas")
        print("7. Keluar")

        pilihan = input("Pilih menu (1-7): ")

        if pilihan == "1":
            tampilkan_data(mahasiswa_list)
        elif pilihan == "2":
            tambah_mahasiswa(mahasiswa_list)
        elif pilihan == "3":
            tertinggi = cari_mahasiswa_extreme(mahasiswa_list, "tertinggi")
            print(f"\nMahasiswa Nilai Tertinggi: {tertinggi['nama']} ({hitung_nilai_akhir(tertinggi):.2f})")
        elif pilihan == "4":
            terendah = cari_mahasiswa_extreme(mahasiswa_list, "terendah")
            print(f"\nMahasiswa Nilai Terendah: {terendah['nama']} ({hitung_nilai_akhir(terendah):.2f})")
        elif pilihan == "5":
            grade = input("Masukkan grade yang ingin difilter (A/B/C/D/E): ")
            hasil = filter_grade(mahasiswa_list, grade)
            if hasil:
                tampilkan_data(hasil)
            else:
                print(f"Tidak ada mahasiswa dengan grade {grade.upper()}.")
        elif pilihan == "6":
            print(f"\nRata-rata nilai akhir kelas: {rata_rata_kelas(mahasiswa_list):.2f}")
        elif pilihan == "7":
            print("Terima kasih! Program selesai.")
            break
        else:
            print("❌ Pilihan tidak valid. Silakan coba lagi.")

# --- Jalankan Program ---
if __name__ == "__main__":
    menu()