$(document).ready(function() {
    /* ГЕНЕРАЦИЯ РАЗМЕТКИ (FEES, ORDERS etc.) */
    /* МОИ ЗАКАЗЫ */
    var myorders = [{
        "id": 847461,
        "website": "image/yt.svg",
        "link": "youtube",
        "name": "Лайки живыe",
        "quality": "Среднее качество",
        "url": "vk.com/itpedia_youtube",
        "date": "6 мая",
        "time": "12:28",
        "start": 100,
        "done": 889,
        "status": "Выполнено",
        "count": "1000",
        "percent": "89",
        "sum": 654
    }, {
        "id": 847462,
        "website": "image/vk.svg",
        "link": "youtube",
        "name": "Лайки живыe",
        "quality": "Высокое качество",
        "url": "vk.com/itpedia_youtube",
        "date": "6 мая",
        "time": "12:28",
        "start": 100,
        "done": 889,
        "status": "Выполнено",
        "count": "1000",
        "percent": "50",
        "sum": 654
    }, {
        "id": 847467,
        "website": "image/tk.svg",
        "link": "youtube",
        "name": "Комменты",
        "quality": "Низкое качество",
        "url": "vk.com/itpedia_youtube",
        "date": "3 мая",
        "time": "12:28",
        "start": 100,
        "done": 300,
        "status": "Выполнено",
        "count": "1000",
        "percent": "33",
        "sum": 1024
    }]
    $.each(myorders, function(key, value) {
        var array = value;
        $('.order_history_items').append($("<div/>", { class: 'order_history_item' })
            .append($("<p class='order_id'>" + array.id + "</p>")) //добавляем ID
            .append("<div class='order_history_service'>"));
        $currentOrder = $('.order_history_item:contains(' + array.id + ')'); //находим текущий заказ по ID
        $currentOrder.attr('id', array.id) //присваиваем ID в качестве аттрибута для упрощения выбора
        $("<img>").attr('src', array.website).appendTo($('#' + array.id).find('.order_history_service')); //добавляем изображение;
        $("<div>").appendTo($('#' + array.id).find('.order_history_service')) //добавляем пустой div с контентом
            .append(("<p class='order_history_services_text'>" + array.name + "</p>"))
            .append("<a class='order_history_link'>" + 'www.' + array.url + "</a>") //добавляем ссылку
        $("<span class='order_history_quality'>" + array.quality + "</span>").appendTo($('#' + array.id).find('.order_history_services_text')) //добавляем качество накрутки
        $('#' + array.id).find('.order_history_link').attr('href', 'https://' + array.url) //добавляем качество накрутки
        $("<div>", { class: 'order_data' }).append("<p class='order_data_month'>" + array.date + "</p>") //добавляем дату
            .append("<span class='order_data_time'>" + array.time + "</span>") //добавляем время
            .appendTo($('#' + array.id))
        $("<div>", { class: 'order_start' }).append("<p class='order_start_text'>" + array.start + "</p>") //добавляем Старт
            .appendTo($('#' + array.id))
        $("<div>", { class: 'order_progress' }).appendTo($('#' + array.id))
        $("<div>", { class: 'order_progress_status' }).appendTo($('#' + array.id).find('.order_progress'))
        $("<p>", { class: 'order_progress_count' }).appendTo($('#' + array.id).find('.order_progress_status'))
            .append("<span class='order_progress_current'>" + array.done + ' из ' + "</span>") //добавляем кол - во завершенных пунктов
            .append("<span class='order_progress_current'>" + array.count + "</span>") //добавляем кол - во завершенных пунктов
        $("<p class='order_progress_status_text'>" + array.status + "</p>").appendTo($('#' + array.id).find('.order_progress_status')) //добавляем статус
        $("<div>", { class: 'order_progress_bar' }).append("<div class='order_progress_bar_pr'>").appendTo($('#' + array.id).find('.order_progress'))

        /* Прогресс - бар*/
        $('#' + array.id).find('.order_progress_bar_pr').css('width', array.percent + '%');
        /**/
        $("<div>", { class: 'order_price' }).append("<p class='order_price_text'>" + array.sum + '₽').appendTo($('#' + array.id))
    });

    /* УСЛУГИ: СОРТИРОВКА  */
    $('.fees_sorter_item').click(function() { //по клику на любую кнопку платформы
        var currentPlatform = $(this).attr('id'); //узнаем ID
        if ($(this).attr('id') == 'all') { //если ID 'all' (кнопка "Все") - показываем все
            $('.fees_item').show();
        } else {
            $('.fees_sorter_item_hr').css('width', '0%');
            $(this).find('.fees_sorter_item_hr').css('width', '100%');
            $('.fees_item').show();
            $('.fees_item').not('#' + currentPlatform + '_block').hide(); //иначе скрываем все кроме тарифов, у которых ID = currentPlatform + '_block'. Пример - vk_block
        }
    });
    /* УСЛУГИ: ПОДРОБНЕЕ */
    var tariff_info = {
        "website": "vk",
        "type": "likes",
        "order_info": {
            "icon": "images/icons/like.svg",
            "name": "Лайки",
            "id": 532,
            "status": "not_active",
            "price": 400,
            "price_per": 1000
        },
        "order_subtleties": {
            "quality_type": [{
                "icon": "image/fees/offers.svg",
                "text": "Офферы",
                "quality_type_id": "offers"
            }, {
                "icon": "image/fees/cool.svg",
                "text": "Живые",
                "quality_type_id": "real"
            }],
            "quality": [{
                "text": "Низкое",
                "quality_id": "low"
            }, {
                "text": "Среднее",
                "quality_id": "medium"
            }],
            "description": [{
                    "icon": "image/icons/smile.svg",
                    "text": "Моментальный старт"
                }, {
                    "icon": "image/icons/smiling.svg",
                    "text": "Без списаний"
                },
                {
                    "icon": "image/icons/rocket.svg",
                    "text": "Скорость 5k / день"
                }
            ]
        },
        "link_example": "vk.com/",
        "min_count": 100,
        "max_count": 100000,
        "inputs": [{
                "name": "link",
                "text": "Вставьте ссылку"
            },
            {
                "name": "count",
                "text": "Введите количество"
            }
        ],
        "price_per_one": 0.4
    }
    var quality_type = [tariff_info.order_subtleties.quality_type]
    var quality = [tariff_info.order_subtleties.quality]
    var description = [tariff_info.order_subtleties.description]

    tariffInfoBuild()

    function tariffInfoBuild() {
        $('.popup_fees').append("<div class='tariff_info_body'>" + "</div>");
        $("<div>", { class: 'tariff_info_header' }).appendTo(".tariff_info_body");
        $("<div>", { class: 'tariff_info_name' }).append("<p>" + tariff_info.order_info.name + '<span>' + tariff_info.order_info.id + '</span>' + "</p>")
            .appendTo('.tariff_info_header');
        $("<div>", { class: 'tariff_info_status' }).appendTo(".tariff_info_name")
        $("<div>", { class: 'tariff_status' }).appendTo(".tariff_info_status")
        $("<p>" + tariff_info.order_info.status + "</p>").appendTo(".tariff_info_status")
        if (tariff_info.order_info.status == 'active') {
            $('.tariff_info_status > p').text('Активен')
        } else if (tariff_info.order_info.status == 'not_active') {
            $('.tariff_info_status > p').text('Не активен')
            $('.tariff_status').css('background', 'red');
        }
        $("<div>", { class: 'tariff_info_price' }).appendTo(".tariff_info_header");
        $("<p class='tariff__info_price'>" + tariff_info.order_info.price + ' ₽' + "</p>").appendTo(".tariff_info_price");
        $("<p class='tariff__info_count'>" + 'Цена за ' + tariff_info.order_info.price_per + "</p>").appendTo(".tariff_info_price");
        $("<hr>", { class: 'tariff_info_hr' }).appendTo('.tariff_info_body');
        $("<div>", { class: 'tariff_info_buttons' }).appendTo('.tariff_info_body');

        $.each(quality_type[0], function(key, value) {
            $("<button>").append($("<img>").attr('src', quality_type[0][key].icon).attr('id', quality_type[0][key].quality_type_id))
                .append('<span>' + quality_type[0][key].text)
                .appendTo('.tariff_info_buttons');
        });

        $('<p class="quality_title">Качество</p>').appendTo('.tariff_info_body')
        $("<div>", { class: 'tariff_info_quality' }).appendTo('.tariff_info_body')

        $.each(quality[0], function(key, value) {
            $($("<button>" + quality[0][key].text + "</button>").attr('id', quality[0][key].quality_id)).appendTo('.tariff_info_quality')
        });

        $("<div>", { class: 'tariff_info_cards' }).appendTo('.tariff_info_body')
        $.each(description[0], function(key, value) {
            $("<button class='tariff_info_card'>").append($("<img>").attr('src', description[0][key].icon)).append("<span>" + description[0][key].text)
                .appendTo('.tariff_info_cards')
        });
        $("<hr>", { class: 'tariff_info_hr' }).appendTo('.tariff_info_body');
        $($("<div>", { class: 'tariff_info_count' })
            .append('<p class="tariff_info_prelink_title">Количество</p>')
            .append("<p class='tariff_info_count_text'>" + 'Минимум ' + '<span>' + tariff_info.min_count + '</span>' + ' максимум ' + '<span>' + tariff_info.max_count + '</span>')).appendTo('.tariff_info_body')
        $("<hr>", { class: 'tariff_info_hr' }).appendTo('.tariff_info_body');
        $($("<div>", { class: 'tariff_info_prelink' })
                .append("<p class='tariff_info_prelink_title'>" + 'Пример ссылки' + "</p>")
                .append("<p class='tariff_info_prelink_link'>" + tariff_info.link_example + '..' + "</p>"))
            .appendTo('.tariff_info_body');
        $("<hr>", { class: 'tariff_info_hr' }).appendTo('.tariff_info_body');
        $(`<div class="tariff_info_link">
    <p class="tariff_info_prelink_title">Ссылка</p>
    <input class="link_input" oninput="linkUpdate()" type="link">
    <div class="tariff_link_status">
        <div class="tariff_link_status_icon">
            <img src="image/fees/question.svg" alt="">
        </div>
        <div class="tariff_link_loading"></div>
    </div>
</div>`)
            .appendTo('.tariff_info_body');
        selectedCount = 10; //кол - во 
        var offerPrice = selectedCount * tariff_info.price_per_one;
        $($("<p class='price_calc'>" + selectedCount + ' шт х ' + tariff_info.price_per_one + ' руб = ' + offerPrice + ' руб' + "</p>")).appendTo('.tariff_info_link')

        /* Прочий код (инпуты и т.д) */

        $(' <button class="tariff_offer_button">Заказать</button>').appendTo('.tariff_info_link')

    };
    /* /* УСЛУГИ: СПИСОК УСЛУГ */

    var tarifs = [{
        "vk": [{
            "icon": "image/icons/heart.svg",
            "platform": "vk",
            "name": "Лайки",
            "description": [{
                "icon": "image/icons/smile.svg",
                "text": "Моментальный старт"
            }, {
                "icon": "image/icons/guarantee.svg",
                "text": "Без списаний"
            }, {
                "icon": "image/icons/smiling.svg",
                "text": "Без списаний"
            }],
            "price": 0.01
        }],
        "tk": [{
            "icon": "image/icons/heart.svg",
            "platform": "vk",
            "name": "Подписота",
            "description": [{
                "icon": "image/icons/smile.svg",
                "text": "Фальш - старт"
            }, {
                "icon": "image/icons/guarantee.svg",
                "text": "Без списаний"
            }, {
                "icon": "image/icons/smiling.svg",
                "text": "Без списаний"
            }],
            "price": 0.01
        }],
        "yt": [{
                "icon": "image/icons/smile.svg",
                "platform": "yt",
                "name": "Лайки",
                "description": [{
                        "icon": "image/icons/smile.svg",
                        "text": "Моментальный старт"
                    },
                    {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний1"
                    }, {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний"
                    }
                ],
                "price": 0.07
            },
            {
                "icon": "image/icons/smile.svg",
                "platform": "yt",
                "name": "Лайки",
                "description": [{
                        "icon": "image/icons/smile.svg",
                        "text": "Моментальный старт"
                    },
                    {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний1"
                    }, {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний"
                    }
                ],
                "price": 400
            }, {
                "icon": "image/icons/smile.svg",
                "platform": "yt",
                "name": "Лайки",
                "description": [{
                        "icon": "image/icons/smile.svg",
                        "text": "Моментальный старт"
                    },
                    {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний1"
                    }, {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний"
                    }
                ],
                "price": 400
            }, {
                "icon": "image/icons/smile.svg",
                "platform": "yt",
                "name": "Лайки",
                "description": [{
                        "icon": "image/icons/smile.svg",
                        "text": "Моментальный старт"
                    },
                    {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний1"
                    }, {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний"
                    }, {
                        "icon": "image/icons/smiling.svg",
                        "text": "Без списаний"
                    }
                ],
                "price": 400
            }
        ]
    }];

    currentArray = tarifs[0]
    mainArray = [];
    arrayDesc = [];
    $.each(tarifs[0], function(key, value) {
        a = currentArray[key]
        $.each(a, function(key, value) {
            mainArray.push(a[key]);
        });
    });
    $.each(mainArray, function(key, value) {
        var array = value;
        uID = key;
        $('.fees__items').append($("<div/>", { class: 'fees_item', id: array.platform + '_block' })
            .append($("<div/>", { class: 'fees_item_name' })
                .append($("<img>").attr('src', array.icon)) //добавляем картинку
                .append($("<p>" + array.name + "</p>"))) //добавляем название услуги
            .append($($("<div/>", { class: 'fees_item_desc', id: uID })))
            .append($("<div/>", { class: 'fees_item_price' }).append("<p>" + array.price + ' рублей' + "</p>"))
            .append($("<button>", { class: 'fees_item_button' }).text('Подробнее')))
        arrayDesc.push(mainArray[key].description)
    })
    index = -1;
    $.each(arrayDesc, function(key, value) {
        currentMassive = [];
        currentMassive = arrayDesc[key];
        index++;
        $.each(currentMassive, function(key, value) {
            console.log(index);
            $($('#' + index)).append($("<div class='fees_desc_item'>").append($("<img>").attr('src', currentMassive[key].icon)).append("<p>" + currentMassive[key].text + "</p>"))
        });
    });

    $('#copy').click(function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('.link_copy').attr('value')).select();
        document.execCommand("copy");
        $temp.remove();
        $('.link_copy').attr('value', 'Ссылка успешно скопирована!')
    });

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл


    /* Профиль: моб меню */
    var mobDropdown = $('.mb_header_dropdown')
    $('.mob_dropdown_menu').click(function() {
        if (mobDropdown.hasClass('mb_header_active')) {
            mobDropdown.addClass('mb_header_inactive');
            mobDropdown.removeClass('mb_header_active');
        } else {
            mobDropdown.removeClass('mb_header_inactive');
            mobDropdown.addClass('mb_header_active');
        }
    });

    /* ТЕМНАЯ ТЕМА */
    $('#dark_theme').click(function() {
        $('link[href="style/style.css"]').attr('href', 'style/style_dark.css');
        $('#white_theme').css('display', 'flex')
        $(this).css('display', 'none')
    });
    $('#white_theme').click(function() {
        $('link[href="style/style_dark.css"]').attr('href', 'style/style.css');
        $('#dark_theme').css('display', 'flex')
        $(this).css('display', 'none')
    });
    /* Главная страница */

    /* Кнопки регистрации / авторизации */
    var userAuth = 0;
    if (userAuth == 1) { //свое условие
        $('.header__body_buttons > button').not('#landing_profile').hide();
        $('#landing_profile').css('display', 'block');
    }

    /*FEES*/
    var profileMenu = $('.profile__menu');
    $('.navbar__profile, .profile__menu').hover(function() {
        profileMenu.removeClass('profile_menu_inactive')
        profileMenu.addClass('profile_menu_active')
    }, function() {
        profileMenu.removeClass('profile_menu_active');
        profileMenu.addClass('profile_menu_inactive')
    });

    /* Модальное окно (тарифы) */

    $(document).ready(function($) {
        $('.fees_item_button').click(function() {
            $('.popup-fade').fadeIn();
            return false;
        });
        // Клик по ссылке "Закрыть".
        $('.popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });

        // Закрытие по клавише Esc.
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });

        // Клик по фону, но не по окну.
        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });

    /* Качество */

    var qualityButton = $('.tariff_info_quality > button')
    qualityButton.click(function() {
        $(qualityButton).removeClass('tariff_info_quality_active');
        $(this).addClass('tariff_info_quality_active');
    });

    /* Показ пароля */

    function showPassword() {
        if ($('.auth_password > input').attr('type') == 'password') {
            $('.auth_password > input').attr('type', 'text');
        } else {
            $('.auth_password > input').attr('type', 'password');
        };
    }

    /* Сообщения ошибки или успеха */


    function error_messageHide() {
        $('.error').addClass('msg_inactive').removeClass('msg_active');
    }

    function error_messageShow() {
        $('.error').removeClass('msg_inactive').addClass('msg_active');
    }


    function success_messageHide() {
        $('.success').addClass('msg_inactive').removeClass('msg_active');
    }

    function success_messageShow() {
        $('.success').removeClass('msg_inactive').addClass('msg_active');
    }

    /* Неверный пароль или логин */

    function wrongPassword() {
        $('.error_text').text('Ошибка: Логин или пароль введен не правильно!')
        error_messageShow();
        setTimeout(error_messageHide, 4000)
    }

    /* Восстановление пароля: Код был выслан на указанную почту*/

    function recoveryCode() {
        $('.success_text').text('Ссылка была выслана на указанную електронную почту!')
        success_messageShow();
        setTimeout(success_messageHide, 4000)
    }

    /* Кнопка изменение пароля */
    function changePasswordButton() {
        var change_password = $('#change_password').val();
        var check_password = $('#check_password').val();
        if (change_password == check_password) {
            changePassword()
        } else {
            failPasswordCheck();
        }
    }

    /* Пароль был успешно изменен */

    function changePassword() {
        $('.success_text').text('Ваш пароль был успешно изменен!')
        success_messageShow();
        setTimeout(success_messageHide, 4000)
    }

    /* Пароли не совпадают */

    function failPasswordCheck() {
        $('.error_text').text('Ошибка: Пароли не соответствуют друг другу!')
        error_messageShow();
        setTimeout(error_messageHide, 4000)
    }

    /* Профиль: меню */

    $('.profile_menu_item').hover(function test() {
        menuIconPath = $(this).find('img').attr('src').replace('.svg', '');
        $(this).find('img').attr('src', menuIconPath + '_white.svg');

    }, function() {
        $(this).find('img').attr('src', menuIconPath + '.svg');
    });



    /* Профиль: пополнить */

    $('.payment_method_item').click(function() {
        $('.payment_method_choise').attr('style', 'display: none');
        $('.payment_method_item').removeClass('payment_way_active')
        $(this).addClass('payment_way_active');
        $(this).find('.payment_method_choise').attr('style', 'display: block');
    });

    /* Профиль: помощь */

    $('.support_contact_card').hover(function test() {
        menuSupportPath = $(this).find('img').attr('src').replace('.svg', '');
        $(this).find('img').attr('src', menuSupportPath + '_white.svg');

    }, function() {
        $(this).find('img').attr('src', menuSupportPath + '.svg');
    });

    $('.support_faq_item').click(function() {
        $(this).toggleClass('support_faq_item_active');
        $(this).find('.support_faq_answer').toggleClass('support_answer_active');

    });
    $('#toggle_switch').click(function() {
        if (!$('.api_toogle').data('status')) {
            $('.api_toogle').html('Нельзя взаимодействовать с API по ключу');
            $('.api_toogle').data('status', true);
        } else {
            $('.api_toogle').html('Можно взаимодействовать с API по ключу');
            $('.api_toogle').data('status', false);
        }
    });

    if ($('body').width() < 601) {
        $("html").attr("style", "overflow-x: hidden")
        $("body").attr("style", "overflow-x: hidden")
        $('.payment_name').attr('style', '')
        $('.payment_method_item_fake').hide();
        $('.settings_mail_code > input').attr('style', '');
    } else {
        $("html").attr("style", "")
        $("body").attr("style", "")
        $('.payment_method_item_fake').show();
        $('.payment_name').attr('style', 'font-size: 20px')
    }

    /* Моб меню */
    $('.mob_menu_dropdown').hide();
    $('.hamburger_block >button').click(function() {
        if ($('.mob_menu').hasClass('mob_menu_active')) {
            setTimeout(menuHide, 400)


            function menuHide() {
                $('.mb_header_navbar img').attr('src', 'image/landing/logotype.png')
                $('.mb_navbar__register').css('color', 'rgb(39, 39, 39)');
                $('.mb_navbar__register').css('border', '2px solid rgb(39, 39, 39)')
                $("html").attr("style", "")
                $("body").attr("style", "")
                $('.mob_menu_dropdown').hide(0);
            }
        } else {
            setTimeout(menuShow, 100)

            function menuShow() {
                $('.mb_header_navbar img').attr('src', 'image/landing/logotype_white.png');
                $('.mb_navbar__register').css('color', 'white');
                $('.mb_navbar__register').css('border', '2px solid white')
                $("html").attr("style", "overflow: hidden")
                $("body").attr("style", "overflow: hidden")
                $('.mob_menu_dropdown').show(500);
            }
        }
        $('.hamburger').toggleClass('is-active');
        $('.mob_menu').toggleClass('mob_menu_active');
    });
    /* Офферы - живые */
    var tariffButton = $('.tariff_info_buttons > button')
    tariffButton.click(function() {
        $(tariffButton).removeClass('tariff_info_button_active');
        $(this).addClass('tariff_info_button_active');
    });
    /* Профиль: настройки */
    var mailVerified = 0;
    if (mailVerified == 1) {
        $('.settings_mail').hide();
        $('.mail_confirmed').show();
    } else {
        return false;
    }
});