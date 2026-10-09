function update(previewPic) {
  // 3.1 & 3.2 Ghi log kiểm tra sự kiện và thông tin thuộc tính
  console.log("Di chuột vào hình ảnh món ăn thành công!");
  console.log("Alt text: ", previewPic.alt);
  console.log("Source URL: ", previewPic.src);

  // Lấy phần tử div hiển thị bằng querySelector
  let displayDiv = document.querySelector("#image");

  // 3.3 Cập nhật văn bản
  displayDiv.textContent = previewPic.alt;

  // 3.5 Cập nhật hình nền
  displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  // Lấy phần tử div hiển thị bằng querySelector
  let displayDiv = document.querySelector("#image");

  // 4.1 Xóa hình nền (trả về url ban đầu)
  displayDiv.style.backgroundImage = "url('')";

  // 4.2 Khôi phục lại văn bản ban đầu
  displayDiv.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
