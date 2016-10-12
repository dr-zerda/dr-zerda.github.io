/**
 * Created by Евгений on 12.10.2016.
 */
var LANGUAGE;

$.redrawLanguage = function (lang) {
    $.ajax({
        url : 'languages/' + lang + '.json', //тянем файл с языком
        dataType : 'json',
        success : function (response) {
            LANGUAGE = response; //записываем в глобальную переменную, а вдруг пригодиться
            $('body').find("[lng]").each(function () //ищем все элементы с атрибутом
            {
                var lng = LANGUAGE[ $(this).attr('lng') ]; //берем нужное значение по атрибуту lng
                var tag = $(this)[0].tagName.toLowerCase();
                switch (tag) //узнаем название тега
                {
                    case "input":
                        $(this).val(lng);
                        break;
                    default:
                        $(this).html(lng);
                        break;
                }
            });
        }
    });
}