# Sistem Manajemen Perpustakaan Sederhana

Program ini merupakan aplikasi Python berbasis **Object-Oriented Programming (OOP)** yang digunakan untuk mengelola koleksi perpustakaan. Pengguna dapat menambahkan buku atau majalah, menampilkan daftar item, dan mencari item berdasarkan ID atau judul.

Program ini dibuat untuk memenuhi tugas praktikum OOP Python dan sudah menerapkan konsep:
- **Abstraction** melalui penggunaan Abstract Class (`LibraryItem`)
- **Encapsulation** dengan private & protected attribute
- **Inheritance** pada class `Book` dan `Magazine`
- **Polymorphism** melalui overriding method `display_info()`

---

## Fitur Program

### 🔹 Manajemen Item
- Tambah Buku (ID, Judul, Penulis)
- Tambah Majalah (ID, Judul, Edisi)
- Menampilkan seluruh item perpustakaan

### 🔹 Pencarian
- Cari item berdasarkan **ID**
- Cari item berdasarkan **judul** (partial match)

### 🔹 Menu Interaktif
Program memiliki menu:

---

## Struktur OOP

### Abstract Class: LibraryItem
- Atribut protected: `_item_id`, `_title`
- Atribut private: `__available`
- Property decorator untuk `available`
- Abstract method: `display_info()`

### Class Book
- Turunan dari `LibraryItem`
- Menambahkan atribut `_author`
- Mengimplementasikan ulang `display_info()`

### Class Magazine
- Turunan dari `LibraryItem`
- Menambahkan atribut `_edition`
- Override `display_info()`

### Class Library
- Menyimpan seluruh item pada list `items`
- Method:
  - `add_item()`
  - `show_all_items()`
  - `search_item()`

---

## Screenshot Program
SS INI

---

## Diagram Class (UML)

```mermaid
classDiagram
    class LibraryItem {
        -_item_id
        -_title
        -__available
        +available
        +display_info()
    }

    class Book {
        -_author
        +display_info()
    }

    class Magazine {
        -_edition
        +display_info()
    }

    class Library {
        +items
        +add_item()
        +show_all_items()
        +search_item()
    }

    LibraryItem <|-- Book
    LibraryItem <|-- Magazine
    Library --> LibraryItem : menyimpan