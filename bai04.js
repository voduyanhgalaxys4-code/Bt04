
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        // Ket noi MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // Chon database va collection
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // Danh sach sinh vien
        const danhSachSinhVien = [
            {
                masv: 'SV001',
                hoten: 'Nguyen Van An',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Tran Thi Binh',
                tuoi: 21,
                diem: 9.0
            },
            {
                masv: 'SV003',
                hoten: 'Le Van Cuong',
                tuoi: 19,
                diem: 7.5
            }
        ];

        // Them nhieu sinh vien
        const ketQuaThem = await students.insertMany(danhSachSinhVien);
        console.log(`Da them ${ketQuaThem.insertedCount} sinh vien.`);

        // Hien thi danh sach sinh vien
        console.log('\nDANH SACH SINH VIEN:');
        const ketQua = await students.find().toArray();
        console.log(ketQua);

    } catch (error) {
        console.error('Loi:', error);
    } finally {
        // Dong ket noi
        await client.close();
        console.log('\nDa dong ket noi MongoDB.');
    }
}

main();
