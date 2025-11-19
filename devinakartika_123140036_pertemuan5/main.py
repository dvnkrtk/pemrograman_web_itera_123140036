from abc import ABC, abstractmethod

class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id        # protected
        self._title = title            # protected
        self.__available = True        # private

    @property
    def available(self):
        return self.__available

    @available.setter
    def available(self, value):
        self.__available = value

    @abstractmethod
    def display_info(self):
        pass

class Book(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self._author = author

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[BOOK] ID: {self._item_id} | Judul: {self._title} | Penulis: {self._author} | Status: {status}")

class Magazine(LibraryItem):
    def __init__(self, item_id, title, edition):
        super().__init__(item_id, title)
        self._edition = edition

    def display_info(self):
        status = "Tersedia" if self.available else "Dipinjam"
        print(f"[MAGAZINE] ID: {self._item_id} | Judul: {self._title} | Edisi: {self._edition} | Status: {status}")


class Library:
    def __init__(self):
        self.items = []

    def add_item(self, item):
        self.items.append(item)
        print("Item berhasil ditambahkan!\n")

    def show_all_items(self):
        if not self.items:
            print("Belum ada item di perpustakaan.\n")
            return
        print("\n=== DAFTAR ITEM PERPUSTAKAAN ===")
        for item in self.items:
            item.display_info()
        print()

    def search_item(self, keyword):
        found = False
        for item in self.items:
            if keyword.lower() in item._title.lower() or keyword == item._item_id:
                item.display_info()
                found = True
        if not found:
            print("Item tidak ditemukan.\n")

def main():
    library = Library()

    while True:
        print("""
===== SISTEM PERPUSTAKAAN SEDERHANA =====
1. Tambah Buku
2. Tambah Majalah
3. Tampilkan Semua Item
4. Cari Item (berdasarkan ID/Judul)
5. Keluar
""")

        pilihan = input("Pilih menu (1-5): ")

        if pilihan == "1":
            item_id = input("Masukkan ID Buku : ")
            title = input("Masukkan Judul   : ")
            author = input("Masukkan Penulis : ")
            library.add_item(Book(item_id, title, author))

        elif pilihan == "2":
            item_id = input("Masukkan ID Majalah : ")
            title = input("Masukkan Judul      : ")
            edition = input("Masukkan Edisi      : ")
            library.add_item(Magazine(item_id, title, edition))

        elif pilihan == "3":
            library.show_all_items()

        elif pilihan == "4":
            keyword = input("Masukkan ID atau Judul: ")
            library.search_item(keyword)

        elif pilihan == "5":
            print("Program selesai. Terima kasih!")
            break

        else:
            print("Pilihan tidak valid!\n")

if __name__ == "__main__":
    main()