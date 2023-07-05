const infomationStudent = [
  {
    id: "",
    name: "Nguyen Khac Tai",
    email: "nguyenkhactai@gmail.com",
    phone: "0932423434",
    address: "Da Nang",
    gender: "Nam",
  },
  {
    id: "",
    name: "Nguyen Khac Tu",
    email: "nguyenkhactai@gmail.com",
    phone: "0932423434",
    address: "Quang Tri",
    gender: "nam",
  },
  {
    id: "",
    name: "Nguyen Khac Tuan",
    email: "nguyenkhactai@gmail.com",
    phone: "0932423434",
    address: "Hue",
    gender: "Nu",
  },
  {
    id: "",
    name: "Nguyen Khac Hieu",
    email: "nguyenkhactai@gmail.com",
    phone: "0932423434",
    address: "Quang Binh",
    gender: "Nu",
  },
];
localStorage.setItem("ListLocalStudent", JSON.stringify(infomationStudent));
const ListLocalStudent = JSON.parse(localStorage.getItem("ListLocalStudent"));
function renderInfo(array) {
  const table = document.querySelector("tbody");

  let tableContent = "";

  array.forEach((element, index) => {
    tableContent += `<tr>
    <td>${index + 1}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone}</td>
    <td>${element.address}</td>
    <td>${element.gender}</td>
    <td><button>edit</button><button onclick="handleDelete()">delete</button></td>
    <td></td>
  </tr>`;
  });

  table.innerHTML = tableContent;
}
renderInfo(ListLocalStudent);

function handleDelete(index) {
  ListLocalStudent.splice(index, 1);
  renderInfo(ListLocalStudent);
}
var addButton = document.querySelector(".btn-save");
addButton.addEventListener("click", () => {
  const nameElement = document.querySelector("#full-name").value;
  const emailElement = document.querySelector("#email").value;
  const phoneElement = document.querySelector("#phone-number").value;
  const addressElement = document.querySelector("#home-town").value;
  const gender = selectedGender;

  const newStudent = {
    name: nameElement,
    email: emailElement,
    phone: phoneElement,
    address: addressElement,
    gender: gender,
  };
  ListLocalStudent.push(newStudent);
  renderInfo(ListLocalStudent);
});

var genderRadios = document.getElementsByName("gender");
var selectedGender;
// lap qua cac nut radio
genderRadios.forEach(function (radio) {
  // Thêm sự kiện 'click' cho mỗi nút radio
  radio.addEventListener("click", function () {
    // kiem tra xem nut nao duoc chon
    if (radio.checked) {
      // lay gia tri cua nut dc chon
      selectedGender = radio.value;
    }
  });
});

function searchStudent() {
  const searchValue = document.querySelector("#input-search");
  if (searchValue.value) {
    const studentLook = ListLocalStudent.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(
          searchValue.value.toLowerCase() || searchValue.value == item.id
        );
    });
    renderInfo(studentLook);
  } else {
    renderInfo(ListLocalStudent);
  }
}
function checkValidator(newStudent) {
  const error = {
    isError: false,
    nameMessage: "",
    emailMessage: "",

    phoneMessage: "",
    addressMessage: "",
  };

  if (newStudent.length === 0) {
    error.isError = true;
    error.nameMessage = "Tên không được để trống";
  }
  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (newStudent.email !== regxEmail) {
    error.isError = true;
    error.emailMessage = "Vui long nhap dung dinh dang";
  }
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  if (newStudent.phone !== regexPhoneNumber) {
    error.isError = true;
    error.phoneMessage = "Vui long nhap dung dinh dang so dien thoai";
  }
}

function renderError(error) {
  const nameError = document.querySelector("#name-error");

  nameError.innerHTML = error.nameMessage;
}
