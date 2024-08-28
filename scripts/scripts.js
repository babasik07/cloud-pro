//Menu
function setupDropdownHover(toggleId, menuId) {
    var toggle = document.getElementById(toggleId);
    var menu = document.getElementById(menuId);

    // Открываем меню при наведении на триггер или само меню
    toggle.addEventListener('mouseover', function() {
        menu.classList.add('show');
    });
    menu.addEventListener('mouseover', function() {
        menu.classList.add('show');
    });

    // Скрываем меню при уходе курсора с триггера и меню
    toggle.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover') && !toggle.matches(':hover')) {
                menu.classList.remove('show');
            }
        }, 100);
    });
    menu.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover') && !toggle.matches(':hover')) {
                menu.classList.remove('show');
            }
        }, 100);
    });
}
//Buton
function setActiveButton(activeButtonId, inactiveButtonId) {
    // Активная кнопка
    document.getElementById(activeButtonId).classList.add('bg-primary-main', 'text-white-default');
    document.getElementById(activeButtonId).classList.remove('text-primary-main', 'hover:bg-grey-hover');

    // Неактивная кнопка
    document.getElementById(inactiveButtonId).classList.remove('bg-primary-main', 'text-white-default');
    document.getElementById(inactiveButtonId).classList.add('text-primary-main', 'hover:bg-grey-hover');
}

function togglePlans(showClass, hideClass) {
    // Показать выбранные планы
    document.querySelectorAll('.' + showClass).forEach(function(plan) {
        plan.classList.remove('hidden');
    });

    // Скрыть невыбранные планы
    document.querySelectorAll('.' + hideClass).forEach(function(plan) {
        plan.classList.add('hidden');
    });
}

// Инициализация всех выпадающих меню
setupDropdownHover('dropdownToggle1', 'dropdownMenu1');
setupDropdownHover('dropdownToggle2', 'dropdownMenu2');
setupDropdownHover('dropdownToggle3', 'dropdownMenu3');

// Установка обработчиков для кнопок
document.getElementById('linuxButton').addEventListener('click', function() {
    setActiveButton('linuxButton', 'windowsButton');
    togglePlans('linux-plan', 'windows-plan');
});

document.getElementById('windowsButton').addEventListener('click', function() {
    setActiveButton('windowsButton', 'linuxButton');
    togglePlans('windows-plan', 'linux-plan');
});