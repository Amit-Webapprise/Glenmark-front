$(document).ready(function () {

    //back-top-top
    // jQuery('.back-to-top').click(function () {
    //      jQuery('html, body').animate({scrollTop: 0}, 800);
    //      return false;
    // });

    //menu active class
    // $(".sidebar-link").click(function() {
    //     // Close all open submenu
    //     $(".submenu").not($(this).siblings(".submenu")).slideUp("main");
    //     // Toggle the submenu of the clicked item
    //     $(this).siblings(".submenu").slideToggle("main");
    // });

    // jQuery(function(jQuery) {
    //     var path = window.location.href;
    //     jQuery('#sidebarnav a').each(function() {
    //         if (this.href === path) {
    //             jQuery(this).addClass('active');
    //             jQuery('.sidebar-link.active').parents('li').parent('.submenu').addClass('active');
    //             jQuery('.submenu.active').parents('.sidebar-item').children('.sidebar-link').addClass('active');
    //         }
    //     });
    // });

    //   $(document).ready(function() {

    //     // Toggle filter with slide
    //     $(".open_filter").on("click", function(e) {
    //         e.preventDefault();
    //         $(".filter_view").slideToggle(300);
    //     });

    //     // Close button
    //     $(".close_filter").on("click", function(e) {
    //         e.preventDefault();
    //         $(".filter_view").slideUp(300);
    //     });

    //     // Click outside close
    //     $(document).on("click", function(e) {
    //         if ($(".filter_view").is(":visible") &&
    //             !$(e.target).closest(".filter_box, .open_filter").length) {
    //             $(".filter_view").slideUp(300);
    //         }
    //     });

    // });


    // === Toggle submenu open/close ===
    $(".sidebar-link").click(function (e) {
        let submenu = $(this).siblings(".submenu");

        if (submenu.length > 0) {
            e.preventDefault();

            $(this)
                .closest("ul")
                .find(".submenu")
                .not(submenu)
                .slideUp();

            submenu.slideToggle();

            $(this).toggleClass("open");
        }
    });

    // === Highlight active link and open parents ===
    let path = window.location.href;
    $("#sidebarnav a").each(function () {
        if (this.href === path) {
            $(this).addClass("active");

            $(this)
                .parents(".submenu")
                .each(function () {
                    $(this).show();
                    $(this).siblings(".sidebar-link").addClass("open active");
                });
        }
    });


    //datepicker
    $(function () {
        var start = moment().subtract(29, 'days');
        var end = moment();

        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }

        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end);
    });

    $('tbody').addClass('loading');

  // loading start
$('tbody').addClass('loading');

// simulate API / ajax
setTimeout(function(){

  // ahi normally ajax thi rows update thase
  // $('tbody').html(responseHtml);

  // loading stop
  $('tbody').removeClass('loading');

}, 2000);
    

    //select2
    $('.js-example-basic-single').select2({});
    $(".js-example-basic-multiple").select2({});


    //sidetoggle
    $('.toggle_bar').on('click', '.toggle_bar', function () {
        $('.logout_bt').slideToggle();
    });

    $(document).on("click", ".profile_detiles .dropdown-toggle", function () {
        $(".user_name_detiles").slideToggle();
    });

    // $(".edit_p, .close_p").click(function(){
    //     $(".edit_upload").toggleClass('main');
    //     $(".file_preview").toggleClass('main');
    // });

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    new VenoBox({
        selector: '.my-video-links',
    });

    new VenoBox({
        selector: '.my-pdf-links',
    });


    // Datatable
    $('.data-table-dr').DataTable({
        scrollX: true,
        fixedHeader: false,
        
        // "language": {
        //     "paginate": {
        //         "first": "<i class='fa-solid fa-angles-left'></i>",
        //         "last": "<i class='fa-solid fa-angles-right'></i>",
        //         "next": "Next <i class='fa-solid fa-arrow-right ms-2'></i>",
        //         "previous": "<i class='fa-solid fa-arrow-left me-2'></i> Previous"
        //     }
        // },
        // "dom":
        //     "<'row'<'col-sm-12'f>>" +
        //     "<'row'<'col-sm-12'tr>>" +
        //     "<'row align-items-center mt-2'" +
        //     "<'col-sm-6'p>" +
        //     "<'col-sm-6 text-end'l>" +
        //     ">"
    });

//  $('.data-table-dr').DataTable({
//     scrollX: true,
//     fixedHeader: false,

//     ordering: true,          // ✅ sorting ON
//     order: [[0, 'asc']],     // default sorting (Sr. No)

//     columnDefs: [
//         { orderable: false, targets: [1,3,12] } 
//         // 👆 Action, Photo, QR Code jeva column par sorting OFF
//     ],

//     language: {
//         info: "Showing _START_ to _END_ of _TOTAL_ entries",
//         paginate: {
//             first: "<i class='fa-solid fa-angles-left'></i>",
//             last: "<i class='fa-solid fa-angles-right'></i>",
//             next: "Next <i class='fa-solid fa-arrow-right ms-2'></i>",
//             previous: "<i class='fa-solid fa-arrow-left me-2'></i> Previous"
//         }
//     },

//     dom:
//         "<'row align-items-center mb-2'" +
//             "<'col-md-6'i>" +        // 👈 Showing entries TOP-LEFT
//             "<'col-md-6 text-end'f>" + // Search TOP-RIGHT
//         ">" +
//         "<'row'<'col-sm-12'tr>>" +
//         "<'row align-items-center mt-2'" +
//             "<'col-md-6'p>" +
//             "<'col-md-6 text-end'l>" +
//         ">"
// });



    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });



    $('.rs_date').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        minDate: moment().startOf('day')
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');
    });


    $('.time_rs').daterangepicker({
        timePicker: true,
        timePicker24Hour: false,
        timePickerSeconds: false,
        singleDatePicker: true,
        autoApply: true,
        locale: {
            format: 'hh:mm A'
        }
    }, function (start, end, label) {
        console.log('Selected time: ' + start.format('hh:mm A'));
    });

    $(".time_rs").on('show.daterangepicker', function (ev, picker) {
        picker.container.find(".calendar-table").hide();
        picker.container.find(".calendar-time").css('display', 'block');
    });


    $('.select2').each(function () {
        $(this).select2({
            dropdownParent: $(this).parent(),
        })
    });

    $('.loader').fadeOut();

}); // end ready


// Select2 focus fix
$(document).on('select2:open', () => {
    document.querySelector('.select2-container--open .select2-search__field').focus();
});


// Window Load
$(window).on('load', function () {
    // loader-script
    // $('#myModal').modal('show');
}); // end load


$(window).bind('load', function () { });


// Resize
$(window).on('resize', function () {
    //equalheight('.main_article');
}); // end resize


// Scroll
$(window).on('scroll', function () {
    // ** STICKY OR FIXED JS
    // if ($(this).scrollTop() > 50){  
    //     $('.header').addClass("sticky");
    // }
    // else{
    //     $('.header').removeClass("sticky");
    // }
}); // end scroll
