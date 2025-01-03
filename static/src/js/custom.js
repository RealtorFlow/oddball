odoo.define("sh_corpomate_theme.sh_corpomate_bottom_navbar", function (require) {
    "use strict";

    var publicWidget = require("web.public.widget");
    var animations = require('website.content.snippets.animation');

    publicWidget.registry.sh_corpomate_bottom_navbar = animations.Animation.extend({
        selector: "#wrapwrap",
        disabledInEditableMode: true,

        effects: [{
            startEvents: 'scroll',
            update: '_add_remove_top_to_bottom_navbar',
        }],



        /**
         * @constructor
         */
        init: function () {
            this._super(...arguments);
            var self = this;
            this.amount_scrolled = 300;


        },



        //--------------------------------------------------------------------------
        /**
         * Called when the window is scrolled
         *
         * @private
         * @param {integer} scroll
         */
        _add_remove_top_to_bottom_navbar: function (scroll) {
            var self = this;

            var navbar = $(document).find('.js_cls_bottom_nav_bar_wrapper');
            if (navbar.length > 0 && scroll + $("#wrapwrap").innerHeight() >= $("#wrapwrap")[0].scrollHeight - 100) {
                navbar.fadeOut('slow');

            } else if (navbar.length > 0) {
                navbar.fadeIn('slow');
            }

            // $(document).find('.js_cls_sh_corpomate_theme_flag_btn').click(function (event) {

            // })
        },


    });

    // sh_corpomate_theme_section_481 start//
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover();
      });
    $(document).find('.js_cls_sh_corpomate_theme_flag_btn').click(function () {
        $(document).find(".sh_bottom_nav  #sh_corpomate_lang_dropdown_area").slideToggle('slow')

    })

    $(document).find(".sh_header_custom_20 .header_20 > a").click(function (ev) {
        var $shareBtn = $(ev.currentTarget)
        $shareBtn.toggleClass('header_20_links');
        $shareBtn.next('.header_link_share').slideToggle('slow', function() {
            if ($('.header_link_share').is(':hidden')){
                $('.header_link_share').addClass('arrow_animation')
            }
            else{
                $('.header_link_share').removeClass('arrow_animation')
            }
        })
    });

    $("#sh_corpomate_theme_section_481 .testimonial .indicators li").click(function () {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
    });
    $("#sh_corpomate_theme_section_481 .testimonial .tabs li").click(function () {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
    });
    $("#sh_corpomate_theme_section_481 .slider .swiper-pagination span").each(function (i) {
        $(this).text(i + 1).prepend("0");
    });
    // sh_corpomate_theme_section_481 end//
    
    
    
    // sh_corpomate_theme_section_503 start//

    $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_1').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')

        var $img = $(ev.currentTarget);
        $img.addClass('active');
        $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_1').click()
    })
    
    $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_2').click(function (ev) {
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')

        var $img = $(ev.currentTarget);
        $img.addClass('active');
        $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_2').click()
    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_3').click(function (ev) {
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')

        var $img = $(ev.currentTarget);
        $img.addClass('active');
        $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_3').click()
    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_4').click(function (ev) {
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')

        var $img = $(ev.currentTarget);
        $img.addClass('active');
        $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_4').click()
    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_5').click(function (ev) {
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')

        var $img = $(ev.currentTarget);
        $img.addClass('active');
        $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_5').click()
    })


    /* ======================================================= */

    $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_1').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_1').addClass('active')

    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_2').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_2').addClass('active')

    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_3').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_3').addClass('active')

    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_4').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_4').addClass('active')

    })

    $('#sh_corpomate_theme_section_503 .sh_testimonial_custom li#link_5').click(function (ev) {
        
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img').removeClass('active')
        $('#sh_corpomate_theme_section_503 .sh_testimonial_links li img#link_5').addClass('active')

    })

    // sh_corpomate_theme_section_503 end//

    $('#sh_corpomate_theme_section_561 .sh_box #sh_img_1').click(function (ev) {
        $('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item').removeClass('active')
        $($('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item')[0]).addClass('active')
    })
    $('#sh_corpomate_theme_section_561 .sh_box #sh_img_2').click(function (ev) {
        $('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item').removeClass('active')
        $($('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item')[1]).addClass('active')
    })
    $('#sh_corpomate_theme_section_561 .sh_box #sh_img_3').click(function (ev) {
        $('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item').removeClass('active')
        $($('#sh_corpomate_theme_section_561 .sh_testimonial_custom .carousel-inner .carousel-item')[2]).addClass('active')
    })
});






