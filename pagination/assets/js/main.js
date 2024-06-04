//Function binh thuong
// const hello = () => {
//     console.log("hello hihi");
// }
// hello();

//IIFE sau khi khởi tạo chạy luôn
// ((name) => {
//     console.log("hello hihi" + " " + name)
// })("Web39")






// // Logic ohan trang
// const apiUrl = "https://jsonplaceholder.typicode.com/posts"

// //B1 call data database
// const getData = async () => {
//     const response = await axios.get(apiUrl);
//     console.log(response.data);
//     return response.data
// }


// //B2 truy cap phan tu
// const curPageEl = document.querySelector("#curPage");
// const dataContainer = document.querySelector("#data");

// //B3 Hien thi danh sach san pham tu api -> UI
// const itemsPerPage = 15;
// let currentPage = 1;
// let totalPages = 0; //So luong phan trang

// const displayData = (data,page) => {
//     currentPage = page;
//     curPageEl.innerHTML = currentPage;
//     dataContainer.innerHTML = '';
// }

//     //xac dinh vi tri bat dau va ket thuc
//     const start = (page - 1) * itemsPerPage;
//     const end = start + itemsPerPage;

//     //Loc du lieu show UI
//     const itemsToDisplay = data.slice(start, end);

//     //show ra UI
//     itemsToDisplay.forEach((item) => {
//         const itemElement = document.createElement("li");
//         itemElement.textContent = item.title;
//         dataContainer.appendChild(itemElement);
//       });



// // IIFE
// (async () => {
//     try {

//         const data = await getData ();

//     if(data){
//     displayData(data,1);
//     }

//     } catch (error) {

//     }
// })()

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const curPageEl = document.querySelector("#curPage");
const dataContainer = document.querySelector("#data");

const fetchData = async (apiUrl) => {
  let response = await axios.get(apiUrl);
  return response.data;
};

const itemsPerPage = 15;
let currentPage = 1;
let totalPages = 0;

const displayData = (data, page) => {
  currentPage = page;
  curPageEl.innerHTML = currentPage;
  dataContainer.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const itemsToDisplay = data.slice(start, end);

  itemsToDisplay.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.textContent = item.title;
    dataContainer.appendChild(itemElement);
  });
};

const createPagination = (data) => {
  const paginationContainer = document.querySelector("#pagNums");
  paginationContainer.innerHTML = "";

  totalPages = Math.ceil(data.length / itemsPerPage);

  if (totalPages > 0) {
    const nextBtn = document.createElement("button");
    const prevBtn = document.createElement("button");

    nextBtn.textContent = "Next";
    prevBtn.textContent = "Prev";

    nextBtn.addEventListener("click", () => {
      if (totalPages >= currentPage + 1) displayData(data, currentPage + 1);
    });

    prevBtn.addEventListener("click", () => {
      if (0 < currentPage - 1) displayData(data, currentPage - 1);
    });

    paginationContainer.insertAdjacentElement("beforebegin", prevBtn);
    paginationContainer.insertAdjacentElement("afterend", nextBtn);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => displayData(data, i));
      paginationContainer.appendChild(button);
    }
  }
};

(async () => {
  try {
    const data = await fetchData(apiUrl);
    displayData(data, 1);
    createPagination(data);
  } catch (err) {
    dataContainer.innerText = "Đã xảy ra lỗi!";
    console.log(err);
  }
})();


