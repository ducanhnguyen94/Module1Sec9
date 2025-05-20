let userName = prompt('Nhap ten');

if (userName == 'Admin') {
    let passWord = prompt('Nhap mat khau');
    if (passWord == 'TheMaster') {
        alert('Welcome');
    } else if (passWord == null) {
        alert('Canceled');
    } else {
        alert('Wrong password')
    }
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you")
}