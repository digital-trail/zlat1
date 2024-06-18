// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener("click", documentActions);

// ! убираем привязку к классам при переключении заголовков подменю
// ? классы с количеством обьектов проставляются автосатически javascript-ом
const menuBlocks = document.querySelectorAll(".sub-menu-catalog__block");
if (menuBlocks.length) {
  menuBlocks.forEach((menuBlock) => {
    const menuBlockItems = menuBlock.querySelectorAll(
      ".sub-menu-catalog__category"
    ).length;
    menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
  });
}

// ! Раскрытие подменю
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest("[data-parent]")) {
    const subMenuId = targetElement.dataset.parent
      ? targetElement.dataset.parent
      : null;
    // ? здесь мы ищем обьект у которого есть дата атрибут с нужной id
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    //  const catalogMenu = document.querySelector(".catalog-header");

    //  ! делает чтоб выпадающее меню исчезало при нажатии на другой пункт меню
    if (subMenu) {
      const activeLink = document.querySelector("._sub-menu-active");
      const activeBlock = document.querySelector("._sub-menu-open");

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove("_sub-menu-active");
        activeBlock.classList.remove("_sub-menu-open");
        document.documentElement.classList.remove("sub-menu-open");
      }
      document.documentElement.classList.toggle("sub-menu-open");
      targetElement.classList.toggle("_sub-menu-active");
      subMenu.classList.toggle("_sub-menu-open");
    } else {
      console.log("Ой-йой, нет такого подменю :(");
    }
    e.preventDefault();
  }
  if (targetElement.closest(".menu-top-header__link_catalog")) {
    // const catalogLink = targetElement.closest(".menu-top-header__link_catalog");
    document.documentElement.classList.add("catalog-open");
    e.preventDefault();
  }

  if (targetElement.closest(".menu-catalog__back")) {
    document.documentElement.classList.remove("catalog-open");
    document.querySelector("._sub-menu-active")
      ? document
          .querySelector("._sub-menu-active")
          .classList.remove("_sub-menu-active")
      : null;
    document.querySelector("._sub-menu-open")
      ? document
          .querySelector("._sub-menu-open")
          .classList.remove("_sub-menu-open")
      : null;
    e.preventDefault();
  }

  if (targetElement.closest(".sub-menu-catalog__back")) {
    // ? эта строка активирует кнопку назад на планшетах и мобилках в меню ,,Каталог товаров,,
    document.documentElement.classList.remove("sub-menu-open");
    document.querySelector("._sub-menu-active")
      ? document
          .querySelector("._sub-menu-active")
          .classList.remove("_sub-menu-active")
      : null;
    document.querySelector("._sub-menu-open")
      ? document
          .querySelector("._sub-menu-open")
          .classList.remove("._sub-menu-open")
      : null;
    e.preventDefault();
  }
}

// ! споллер для фильтра товаров (после уменьшения экрана)
if (document.querySelector(".filter-catalog__title")) {
  document
    .querySelector(".filter-catalog__title")
    .addEventListener("click", function (e) {
      if (window.innerWidth < 922) {
        document
          .querySelector(".filter-catalog__items")
          .classList.toggle("_active");
      }
    });
}

// ================================================================

// function handleSpoiler() {
//   const filterCatalogTitle = document.querySelector(".filter-catalog__title");
//   const filterCatalogItems = document.querySelector(".filter-catalog__items");

//   if (!filterCatalogTitle || !filterCatalogItems) {
//     return; // Если элементы не найдены, выход из функции
//   }

//   // Обработчик события для клика по заголовку спойлера
//   filterCatalogTitle.addEventListener("click", function (e) {
//     if (window.innerWidth < 922) {
//       filterCatalogItems.classList.toggle("_active");
//     }
//   });

//   // Функция для установки начального состояния спойлера в зависимости от ширины экрана
//   function setInitialSpoilerState() {
//     if (window.innerWidth > 1024) {
//       filterCatalogItems.classList.add("_active");
//     } else {
//       filterCatalogItems.classList.remove("_active");
//     }
//   }

//   // Установка начального состояния при загрузке страницы
//   setInitialSpoilerState();

//   // Обработчик события изменения размера окна
//   window.addEventListener("resize", function () {
//     setInitialSpoilerState();
//   });
// }

// // Вызов функции для управления состоянием спойлера
// handleSpoiler();
