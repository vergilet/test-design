$(document).ready(function(){

    //nojs
    $('body').removeClass('no-js');

    //------------------------------------------------------------------------//

    //full screen
    $('.full-screen').fullScreen();

    //------------------------------------------------------------------------//

    //fakelink
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------------------------//

    $(document).on('mobileinit', function () {
        $.mobile.ignoreContentEnabled = true;
    });

    //------------------------------------------------------------------------//

    //drop down menu
    //$('.menu li').has('ul').addClass('dropdown');
    //$('.menu li').hover(function(){$('ul',this).slideDown(0);},function(){$('ul',this).slideUp(0);});
    //doubleTapToGo
    //$('.menu > li:has(ul)').doubleTapToGo();


    //------------------------------------------------------------------------//

    //mask
    $('.mask-pin').mask("9999", {placeholder:"4 digit PIN"});
    $('.mask-pin-again').mask("9999", {placeholder:"4 digit PIN again"});
    $('.mask-tel').mask("999-999-9999", {placeholder:"phone"});
    $('.mask-tel-again').mask("999-999-9999", {placeholder:"phone again"});

    //------------------------------------------------------------------------//

    //screens
    var screenSignIn = $('.screen-signin');
    var screenSignUp = $('.screen-signup');
    var screenLinkBank = $('.screen-link-bank');
    var screenNextLinkBank = $('.screen-next-link-bank');
    var screenPrivacy = $('.screen-privacy');
    var screenTerms = $('.screen-terms');
    var elementBreadcrumbsSignUp = $('.breadcrumbs-signup');
    var screenAnalyzing = $('.screen-analyzing');
    var screenAnalyzingNo = $('.screen-analyzing-no-card');
    var elementBreadcrumbsSetup = $('.breadcrumbs-setup');
    var elementGraphic = $('.graphic');
    var screenIncomeEdit = $('.screen-income-edit');
    var screenIncome = $('.screen-income');
    var screenBills = $('.screen-bills');


    $('.go-signup').click(function(){
         screenSignIn
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignUp
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
         .show("slide", {
             direction: "up",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-signin').click(function(){
         screenSignIn
         .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenSignUp
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
         .hide("slide", {
             direction: "up",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-terms').click(function(){
         screenTerms
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.hide-terms').click(function(){
         screenTerms
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-privacy').click(function(){
         screenPrivacy
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.hide-privacy').click(function(){
         screenPrivacy
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.go-next-link-bank').on('click', function(event) {
        event.preventDefault();
        screenLinkBank
        .hide("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenNextLinkBank
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
        .find('li:eq(1)').removeClass('active-last')
        .next('li').addClass('active');
    });

    $('.go-analyzing-no-card').click(function(){
        screenAnalyzingNo
        .show("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            setTimeout(function(){
                $.dialog({
                    buttonText : {
                        ok : 'Restart the analysis'
                    },
                    titleText : 'Oops, something went wrong…',
                    contentHtml : '<p>Please restart the transaction<br> analysis below.</p>'
                });
            }, 2000);
        });
    });
    $('.go-analyzing').click(function(){
        screenAnalyzing
        .show("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            setTimeout(function(){
                $('.timer-text-process').fadeOut(0);
                $('.timer-text-ready').fadeIn(250);
                $('.screen-analyzing').addClass('screen-analyzing-ready');
            }, 2000);
        });
    });
    $('.hide-analyzing').click(function(){
        $('.screen-analyzing').removeClass('screen-analyzing-ready');
        screenAnalyzingNo
        .hide("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            //reset loader
        });
    });
    $('.button-analyzing-ready-back').click(function(){
        $('.screen-analyzing').removeClass('screen-analyzing-ready');
        screenAnalyzing
        .hide("fade", {
        easing: "easeInOutCirc"
        }, 300, function(){
            //reset loader
        });
    });
    $('.go-income').on('click', function(event) {
        screenNextLinkBank
        .hide("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenAnalyzing
        .hide("fade", {
            easing: "easeInOutCirc"
        }, 300);
        screenIncome
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .show("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.income-form span.input-text').click(function(){
         screenIncomeEdit
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });
    $('.go-back-analyzing').click(function(){
        screenAnalyzing
        .show("fade", {
            easing: "easeInOutCirc"
        }, 300);
        screenIncome
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementGraphic
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSetup
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300);
        screenNextLinkBank
        .show("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        elementBreadcrumbsSignUp
         .show("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         elementBreadcrumbsSignUp
        .find('li').removeClass('active-last').addClass('active');
        $('.timer-text-process').fadeOut(0);
        $('.timer-text-ready').fadeIn(250);
        $('.screen-analyzing').addClass('screen-analyzing-ready');
    });
    $('.hide-income-edit').click(function(){
         screenIncomeEdit
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.hide-income-save').click(function() {
        var incomeAmountVal = $('#income-edit-amount').val();
        incomeAmountVal = incomeAmountVal.replace('$', '');
        //console.log(incomeAmountVal);
        $('#income-amount-val').text('$'+incomeAmountVal);
        var incomeFrequencyVal = $('.income-edit-frequency').val();
        $('#income-frequency-val').text(incomeFrequencyVal);
        if ( incomeFrequencyVal == 'every week' ) {
            var incomeWeekVal = $('.income-edit-week select').val();
            $('.income-twice-a-month, .income-month, .income-2week').hide();
            $('.income-week').show();
            $('#income-week-val').text(incomeWeekVal);
        } else if ( incomeFrequencyVal == 'every 2 weeks' ) {
            var income2WeekVal = $('.income-edit-2week:eq(0) select').val();
            var income2Week2Val = $('.income-edit-2week:eq(1) select').val();
            $('.income-twice-a-month, .income-month, .income-week').hide();
            $('.income-2week').show();
            $('#income-2week-val').text(income2WeekVal);
            $('#income-2week2-val').text(income2Week2Val);
        } else if ( incomeFrequencyVal == 'twice a month' ) {
            $('.income-month, .income-week, .income-2week').hide();
            $('.income-twice-a-month').show();
            var incomeTwiceVal1 = $('.income-edit-twice-a-month select:eq(0)').val();
            var incomeTwiceVal2 = $('.income-edit-twice-a-month select:eq(1)').val();
            $('.income-twice-a-month span.input-text:eq(0)').text(incomeTwiceVal1);
            $('.income-twice-a-month span.input-text:eq(1)').text(incomeTwiceVal2);
        } else if ( incomeFrequencyVal == 'once a month' ) {
            var incomeMonthVal = $('.income-edit-month select').val();
            $('.income-twice-a-month, .income-week, .income-2week').hide();
            $('.income-month').show();
            $('#income-month-val').text(incomeMonthVal);
        }
        screenIncomeEdit
         .hide("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
    });

    $('.income-edit-frequency').bind('change', function(event) {

        var thisValue = $(this).val();

        if ( thisValue == 'every week' ) {
            $('.income-edit-week').show();
            $('.income-edit-twice-a-month, .income-edit-month, .income-edit-2week').hide();
        } else if ( thisValue == 'every 2 weeks' ) {
            $('.income-edit-2week').show();
            $('.income-edit-twice-a-month, .income-edit-month, .income-edit-week').hide();
            var val2aMonth = $('.income-edit-select-2week').val();
            $('.income-edit-select-2week2')
                .html('')
                .append('<option value="'+ val2aMonth +', 9/29">'+ val2aMonth +', 9/29</option>')
                .append('<option value="'+ val2aMonth +', 10/6">'+ val2aMonth +', 10/6</option>');
        } else if ( thisValue == 'twice a month' ) {
            $('.income-edit-twice-a-month').show();
            $('.income-edit-week, .income-edit-month, .income-edit-2week').hide();
        } else if ( thisValue == 'once a month' ) {
            $('.income-edit-month').show();
            $('.income-edit-twice-a-month, .income-edit-week, .income-edit-2week').hide();
        }

    });

    $('.income-edit-select-2week').bind('change', function(event) {
        var val2aMonth = $(this).val();
        $('.income-edit-select-2week2')
            .html('')
            .append('<option value="'+ val2aMonth +', 9/29">'+ val2aMonth +', 9/29</option>')
            .append('<option value="'+ val2aMonth +', 10/6">'+ val2aMonth +', 10/6</option>');
    });

    $("#income-edit-amount").maskMoney({
        prefix:'$',
        allowNegative: false,
        thousands:',',
        decimal:'.',
        affixesStay: false,
        precision: 0
    });

    $("#income-edit-amount").bind('change', function(event) {
        console.log($(this).val());
    });

    $('.go-bills').click(function(){
         screenIncome
         .hide("slide", {
             direction: "left",
             easing: "easeInOutCirc"
         }, 300);
         screenBills
         .show("slide", {
             direction: "right",
             easing: "easeInOutCirc"
         }, 300);
         $('<div class="graphic-separator graphic-separator-red"></div>').insertAfter(elementGraphic.find('.graphic-item:eq(24)'));
         $('.graphic-separator-red').slideDown(300);
         elementGraphic
            .find('.graphic-item')
                .each(function(index, el) {
                    if (index > 24 && index < 42) {
                        $(this).find('svg .item-fill').attr('fill','#EC293F');
                    }
                });
        elementBreadcrumbsSetup
        .find('li:eq(0)').removeClass('active-last').addClass('active-next-red')
        .next('li').addClass('active active-last active-red');
    });

    $('.go-back-income').click(function(){
        screenIncome
        .show("slide", {
            direction: "left",
            easing: "easeInOutCirc"
        }, 300);
        screenBills
        .hide("slide", {
            direction: "right",
            easing: "easeInOutCirc"
        }, 300, function(){
            screenBills.find('.panel-bottom').removeClass('active');
        });
        $('.graphic-separator-red').slideUp(300, function(){
            elementGraphic.find('.graphic-separator-red').remove();
        });
        elementGraphic
           .find('.graphic-item')
               .each(function(index, el) {
                   if (index > 24 && index < 42) {
                       $(this).find('svg .item-fill').attr('fill','#FFFFFF');
                   }
               });
        elementBreadcrumbsSetup
        .find('li:eq(0)').addClass('active-last').removeClass('active-next-red')
        .next('li').removeClass('active active-last active-red');
    });




    // $(document).on('swipeleft', function(event) {
    // });

    //------------------------------------------------------------------------//

    //validate
    $("#signin").validate({
        rules: {
            signinPhone: {
                required: true,
                rangelength: [12, 12]
            },
            signinPin: {
                required: true,
                number: true,
                rangelength: [4, 4]
            }
        },
        submitHandler: function(form) {
            //submit
        }
    });

    //------------------------------------------------------------------------//

    //validate
    $("#signup").validate({
        rules: {
            signupPhone: {
                required: true,
                rangelength: [12, 12]
            },
            signupPhoneAgain: {
                required: true,
                rangelength: [12, 12],
                equalTo: "#signupPhone"
            },
            signupPin: {
                required: true,
                number: true,
                rangelength: [4, 4]
            },
            signupPinAgain: {
                required: true,
                number: true,
                rangelength: [4, 4],
                equalTo: "#signupPin"
            }
        },
        submitHandler: function(form) {
            //submit
            screenSignUp
            .hide("slide", {
                direction: "left",
                easing: "easeInOutCirc"
            }, 300);
            screenLinkBank
            .show("slide", {
                direction: "right",
                easing: "easeInOutCirc"
            }, 300);
            elementBreadcrumbsSignUp
            .find('li:eq(0)').removeClass('active-last')
            .next('li').addClass('active active-last');
        }
    });

    //------------------------------------------------------------------------//

    $(document).on('swipeup click', '.panel-bottom:not(".active")', function(event) {
        $(this).addClass('active');
    });
    $(document).on('swipedown', '.panel-bottom.active', function(event) {
        var offsetToSwipe = $(this).find('.panel-bottom-offset').offset().top - $(this).offset().top;
        if ( offsetToSwipe >= 0 ) {
            $(this).removeClass('active');
        }
    });

    //

    //------------------------------------------------------------------------//

    $('.button-show-modal').on('click', function(event) {
        event.preventDefault();
        $.dialog({
            type : 'confirm',
            buttonText : {
                ok : 'Reduce Savings',
                cancel : 'Return on payday'
            },
            titleText : 'Oh no, you’re short $287!',
            contentHtml : '<p>You need an additional $287 to cover upcoming Bills and Spending Money.</p><p>Try reducing your Savings percentage, or come back when you get paid on Friday, June 6.</p>'
        });
    });

    //------------------------------------------------------------------------//

});//document ready

$(window).load(function() {

    //load
    var timerSize = function() {
        var timerWidth = $('body').innerWidth();
        var timerHeight = $('body').innerHeight();

        if ( timerHeight < timerWidth ) {
            $('.timer-wrapper').css({ width: timerHeight });
            $('.timer-text-cell, .loader-wrapper').css({ height: timerHeight-60 });
            $('.loader-wrapper').css({ width: timerHeight-60 });
        } else {
            $('.timer-wrapper').css({ width: timerWidth });
            $('.timer-text-cell, .loader-wrapper').css({ height: timerWidth-60 });
            $('.loader-wrapper').css({ width: timerWidth-60 });
        }
    }
    timerSize();

    $(window).resize(function() {
        timerSize();
    });


});//window load