
function showEx1() {
    var NAME = prompt("Input Full name author's Exercise:", " Pigal P.B.");
    document.getElementById("p0").innerHTML += "by Author:" + "<u>" + NAME + "<u>" + "<br>";

    var mass = ["<b><u>Основные требования к сайту</u></b>",
        "1. Дизайн. Простой, ненавязчивый, но оригинальный - главные критерии.",
        "2. Грамотный пользовательский интерфейс. Максимально удобный, ориентированный на вашу целевую аудиторию - подумайте, кто будет заходить и что именно будет искать на сайте.",
        "3. Логичная навигация. Основные разделы сайта (Главная| О проекте| FAQ| Контакты| и т. д.) лучше разместить сверху, полезные ссылки, дружественные сайты и т. п.  - в боковом меню.",
        "4. Располагайте ссылки внизу. Даже если они продублированы в другом месте. Это дополнительный способ привлечь внимание.",
        "5. Качественный контент. Все знают: контент - (король).",
        "6. Рубрика (О проекте). Вы не должны быть для читателя абстрактной фигурой. Это отталкивает.",
        "7. Контакты. Это обязательное условие: связь с вами должна быть удобной и самой прямой.",
        "8. Поиск. Настройте его максимально грамотно - (не найдено) на каждый полезный вопрос невероятно раздражает читателей.",
        "9. Регистрация/Подписка. Максимально упрощенная регистрация и подписка располагает к себе любого читателя. Это намного легче обеспечить, если вы работаете на базе WordPress.",
        "10. Карта сайта. Она помогает составить читателю полное представление вашего ресурса, а также способствует индексации страниц.",
        "11. Отделите контент от дизайна. Нtml не дает такой возможности. Используйте  CSS-файлы для того, чтобы поисковики могли, минуя избыточные коды, идентифицировать контент.",
        "12. Используйте XHTML / CSS. Кроме того, коды должны быть точными. Два отличных ресурса проверки кода:  W3C Markup Validation Service,W3C CSS Validation Service.",
        "13. Совместимость браузеров. Идеально, если ваш сайт совместим со всеми браузерами и платформами, с которыми работают ваши читатели.",
        "14. Оптимизация изображений. Уменьшайте изображения, стараясь максимально сохранить при этом качество.",
        "15. Статистика. Она помогает вам в анализе работы вашего сайта."
    ];


    for (var i = 0; i < mass.length; i++) {
        if (i < (mass.length - 1)) {
            document.getElementById("p1").innerHTML += mass[i] + "<br>";
        }
        if (i == (mass.length - 1)) {
            document.getElementById("p1").innerHTML += mass[i];
        }
    }
    document.getElementById("p1").innerHTML += "<br><hr>";
}


function showEx2() {

    var NAME = prompt("Input Full name author's Exercise:", " Kostiuchik A.M.");

    document.getElementById("p3").innerHTML += "<u>" + NAME + "</u>" + " has done it" + "<br>";

    var mass = ["<b><u>Основные требования к сайту</u></b>",
        "1. Теперь рассмотрим требования предъявляемые к веб-сайту. Постараемся перечислить их в порядке значимости.",
        "2. Совместимость с основными версиями браузеров.",
        "3. Минимальный объем HTML-кода.",
        "4. Модификация сайта при минимуме человеко часов.",
        "5. Портабельность сайта.",
        "6. Если сайт не просматривается или отображается некорректно в четвертых версиях браузеров, то теряется значительная часть посетителей.",
        "7. В дальнейшем, после завершения работ над сайтом, его придется поддерживать, т.е. дополнять и изменять.",
        "8. Сайт имел структуру, пример предлагаемой структуры сайта см. выше.",
        "9. Исходный HTML-код должен быть читабельным.",
        "10. Верхние и нижние колонтитулы были вынесены в отдельный файл.",
        "11. CSS (таблицы каскадных стилей), используемые в нескольких документах находились в отдельном файле.",
        "12. Функции JavaScript, используемые в нескольких документах находились в отдельном файле.",
        "13. Гиперсылки имели правильные пути - абсолютные и относительные.",
        "14. В именах файлов и адресах гиперссылок использовались только цифры и буквы английского алфавита нижнего регистра, также допускается использование символа подчеркивания. Все остальные символы русского алфавита, английские символы верхнего регистра значительно могут осложнить поддержку веб-сайта."

    ];


    for (var i = 0; i < mass.length; i++) {
        if (i < (mass.length - 1)) {
            document.getElementById("p2").innerHTML += mass[i] + "<br>";
        }
        if (i == (mass.length - 1)) {
            document.getElementById("p2").innerHTML += mass[i];
        }
    }

}

