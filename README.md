## 1. Thông tin bài tập

- Bài thực hành: Bài 4
- Nội dung: Thêm và hiển thị dữ liệu MongoDB
- Database: `qlsinhvien`
- Collection: `students`

## 2. Yêu cầu

- Kết nối đến MongoDB local.
- Sử dụng `insertMany()` để thêm ít nhất 3 sinh viên.
- Sử dụng `find()` để hiển thị danh sách sinh viên.
- Đóng kết nối sau khi hoàn thành.

## 3. Cài đặt và chạy chương trình

### Bước 1: Khởi tạo dự án

```bash
npm init -y
```

### Bước 2: Cài đặt MongoDB Driver

```bash
npm install mongodb
```

### Bước 3: Chạy chương trình

```bash
node bai04.js
```

## 4. Nội dung thực hiện

- Sử dụng `MongoClient` để kết nối MongoDB.
- Tạo database `qlsinhvien`.
- Tạo collection `students`.
- Thêm 3 sinh viên bằng `insertMany()`.
- Truy vấn và hiển thị dữ liệu bằng `find().toArray()`.
- Đóng kết nối bằng `client.close()`.

## 5. Kết quả thực hiện

### Kết quả chạy chương trình

![Kết quả chạy chương trình](images/ket-qua.png)

### Dữ liệu trên MongoDB Compass

![Dữ liệu MongoDB Compass](images/mongodb-compass.png)

## 6. Kết luận

Đã hoàn thành bài thực hành thêm và hiển thị dữ liệu MongoDB bằng Node.js.
Chương trình kết nối thành công, thêm 3 sinh viên, hiển thị danh sách và đóng kết nối.
