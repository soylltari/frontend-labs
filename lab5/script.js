// TASK 1

const fullName = document.getElementById("full-name");
const variant = document.getElementById("variant");
const phone = document.getElementById("phone");
const faculty = document.getElementById("faculty");
const address = document.getElementById("address");
const output = document.querySelector(".output");

const formFields = { fullName, variant, phone, faculty, address };

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm(formFields)) {
    output.innerHTML = `
    <p>П.І.Б.: ${formFields.fullName.value}</p>
    <p>Варіант: ${formFields.variant.value}</p>
    <p>Телефон: ${formFields.phone.value}</p>
    <p>Факультет: ${formFields.faculty.value}</p>
    <p>Адреса: ${formFields.address.value}</p>
    `;
  } else {
    alert("Виправте помилки у виділених полях");
  }
});

function validateForm(fields) {
  let isValid = true;

  // Тільки літери, пробіли та апострофи. Довжина 3-40 символів
  const fullNameRegExp = /^[a-zA-Zа-яА-ЯіІїЇєЄ'\s]{3,40}$/;
  // Тільки цифри
  const variantRegExp = /^\d+$/;
  // Формат телефону +380... і максимум лише 10 цифр
  const phoneRegExp = /^\+380\d{9}$/;
  // Тільки літери та пробіли, 3-50 символів.
  const facultyRegExp = /^[a-zA-Zа-яА-ЯіІїЇєЄ\s]{3,50}$/;
  // Мінімум 7 символів, дозволяє літери, цифри, пробіли, коми, крапки та тире.
  const addressRegExp = /^[a-zA-Zа-яА-ЯіІїЇєЄ0-9\s,\.\-]{7,}$/;

  function toggleError(element, isFieldValid) {
    if (!isFieldValid) {
      element.classList.add("error");
      isValid = false;
    } else {
      element.classList.remove("error");
    }
  }

  // ПІБ
  const isFullNameValid = fullNameRegExp.test(fields.fullName.value.trim());
  toggleError(fields.fullName, isFullNameValid);

  // Варіант
  const isVariantValid = variantRegExp.test(fields.variant.value.trim());
  toggleError(fields.variant, isVariantValid);

  // Телефон
  const isPhoneValid = phoneRegExp.test(fields.phone.value.trim());
  toggleError(fields.phone, isPhoneValid);

  // Факультет
  const isFacultyValid = facultyRegExp.test(fields.faculty.value.trim());
  toggleError(fields.faculty, isFacultyValid);

  // Адреса
  const isAddressValid = addressRegExp.test(fields.address.value.trim());
  toggleError(fields.address, isAddressValid);

  return isValid;
}

// TASK 2

const table = document.getElementById("table");
const rows = table.getElementsByTagName("tr");
const cell = document.querySelector(".variant-cell");
const inputColor = document.getElementById("input-color");

let permanentColor = null;

// Функції
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function highlightRows(startIndex) {
  for (let row of rows) {
    row.style.backgroundColor = null;
  }

  for (let i = startIndex; i < rows.length; i += 2) {
    rows[i].style.backgroundColor = inputColor.value;
  }
}

// Обробники подій
cell.addEventListener("mouseenter", () => {
  cell.style.backgroundColor = getRandomColor();
});
cell.addEventListener("mouseleave", () => {
  cell.style.backgroundColor = permanentColor;
});

cell.addEventListener("click", () => {
  permanentColor = inputColor.value;
  cell.style.backgroundColor = permanentColor;
});

for (let i = 0; i < rows.length; i++) {
  rows[i].addEventListener("dblclick", function () {
    highlightRows(i);
  });
}
