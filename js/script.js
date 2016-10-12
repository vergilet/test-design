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
            //
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
        if ( incomeFrequencyVal == 'every week' || incomeFrequencyVal == 'every 2 weeks'  ) {
            var incomeWeekVal = $('.income-edit-week select').val();
            $('.income-twice-a-month, .income-month').hide();
            $('.income-week').show();
            $('#income-week-val').text(incomeWeekVal);
        } else if ( incomeFrequencyVal == 'twice a month' ) {
            $('.income-month, .income-week').hide();
            $('.income-twice-a-month').show();
            var incomeTwiceVal1 = $('.income-edit-twice-a-month select:eq(0)').val();
            var incomeTwiceVal2 = $('.income-edit-twice-a-month select:eq(1)').val();
            $('.income-twice-a-month span.input-text:eq(0)').text(incomeTwiceVal1);
            $('.income-twice-a-month span.input-text:eq(1)').text(incomeTwiceVal2);
        } else if ( incomeFrequencyVal == 'once a month' ) {
            var incomeMonthVal = $('.income-edit-month select').val();
            $('.income-twice-a-month, .income-week').hide();
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

        if ( thisValue == 'every week' || thisValue == 'every 2 weeks'  ) {
            $('.income-edit-week').show();
            $('.income-edit-twice-a-month, .income-edit-month').hide();
        } else if ( thisValue == 'twice a month' ) {
            $('.income-edit-twice-a-month').show();
            $('.income-edit-week, .income-edit-month').hide();
        } else if ( thisValue == 'once a month' ) {
            $('.income-edit-month').show();
            $('.income-edit-twice-a-month, .income-edit-week').hide();
        }

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
        $('.panel-bottom').addClass('active');
    });
    $(document).on('swipedown click', '.panel-bottom.active .panel-bottom-dragg', function(event) {
        $('.panel-bottom').removeClass('active');
    });

    //------------------------------------------------------------------------//

    $('.button-show-modal').on('click', function(event) {
        event.preventDefault();
        console.log('click');
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