const bai1 = document.querySelector("#bai1");
bai1.addEventListener("click", () => {
  const palindromeValue = document.querySelector("#isPalindrome").value;
  let indexFirst = 0;
  let indextLast = palindromeValue.length - 1;

  if (palindromeValue.length >= 2) {
    while (indextLast > indexFirst) {
      if (palindromeValue[indexFirst] != palindromeValue[indextLast]) {
        alert("Không phải là chuỗi đối xứng");
        return false;
      }
      indexFirst++;
      indextLast--;
    }
    alert("Là chuỗi đối xứng");
    return true;
  } else {
    alert("Nhập 3 ký tự trở lên");
  }
});

function bai2() {
  const inputValue = document.querySelector("#format-character").value;
  let result = "";

  result = inputValue;

  const words = result.split(" "); // tach chuoi ra cac phan tu

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word[0] === word[0].toUpperCase()) {
      words[i] = word[0].toLowerCase() + word.slice(1);
    } else {
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  }

  result = words.join(" "); // ghep cai tu lai thanh 1 chuoi moi

  const resultElement = document.querySelector("#result_2");
  resultElement.innerHTML = result;
}

function bai3() {
  const deposits = parseFloat(prompt("Nhập số tiền cần gửi:"));
  const numberMonth = parseInt(prompt("Nhập số tháng gửi tiền:"));

  const annualInterestRate = 0.07; // 7% lãi suất/năm
  const monthlyInterestRate = annualInterestRate / 12; // Lãi suất/tháng

  const amountReceived = deposits * (1 + monthlyInterestRate) ** numberMonth;

  const result = document.querySelector("#result_3");
  result.innerHTML =
    "Số tiền bạn sẽ nhận được sau " +
    numberMonth +
    " tháng gửi là: " +
    amountReceived.toFixed(2);
}

function bai4() {
  const inputValue = document.querySelector("#result-arr").value;
  const arr = inputValue.split(",");
  let arrResult = [];
  let temp;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    arrResult.push(arr[i]);
  }
  const resultElement = document.querySelector("#result_4");
  resultElement.innerHTML = arrResult;
}

function bai5() {
  let employees = ["Nguyen Khac Tai", "Truong Tuan Tu", "Nguyen Huy Ha"];

  function employeeRender(employees) {
    const renderEmployeesElement = document.querySelector(
      ".employees-container"
    );
    let employeeContent = "";

    employees.forEach((element, index) => {
      employeeContent += ` 
         <li>${element}<button onclick="handleEdit(${index})">Edit</button>
          <button onclick="handleDelete(${index})">Delete</button> </li>
            `;
    });
    renderEmployeesElement.innerHTML = employeeContent;
  }
  employeeRender(employees);
}

// xóa nhân viên
//   function handleDelete(index) {
//     employees.splice(index, 1);
//     renderEmployees();
//   }
//   // thêm nhân viên
//   function handleAdd() {
//     const inputEmployee = document.querySelector(".input-employee");
//     const inputEmployeeValue = inputEmployee.value;
//     employees.push(inputEmployeeValue);
//     inputEmployee.value = "";
//     renderEmployees();
//   }
//   // Update nhân viên
//   let index;
//   function handleEdit(i) {
//     index = i;
//     const updateEmployees = document.querySelector(".update-employees");
//     updateEmployees.value = employees[i];
//     updateEmployees.setAttribute("id", i);
//   }
//   function handleUpdate(i) {
//     const updateEmployees = document.querySelector(".update-employees");
//     const updateEmployeesValue = updateEmployees.value;
//     let id = Number(updateEmployees.getAttribute("id"));
//     // let updateEmployeesContent = updateEmployeesValue
//     if (updateEmployees == "") {
//       return;
//     } else {
//       employees.splice(id, 1, updateEmployeesValue);
//     }
//     renderEmployees();
//   }
