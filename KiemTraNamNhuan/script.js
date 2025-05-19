let year = +prompt('Nhap nam can kiem tra:');

if (year % 400 == 0) {
    alert('Nam Nhuan')
} else if (year % 4 == 0 && year % 100 !== 0) {
    alert('Nam Nhuan');
} else {
    alert('Khong phai nam nhuan')
}