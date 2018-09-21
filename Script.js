$(document).ready(function () {
    //sub menu profile
    $('.sup-menu').click(function () {
        if ($(this).parent().parent().find('.sub-menu').css('display') == 'none') {
            $('.sub-menu').each(function (index) {
                if ($(this).css('display') == 'block') {
                    $(this).slideToggle();
                }
            })
            $('.sub-menu-2').each(function (index) {
                if ($(this).css('display') == 'block') {
                    debugger;
                    $(this).slideToggle();
                }
            })

        }
    })

    $('.sub-menu-item').click(function () {
        $(this).parent().children('.sub-menu-2').each(function (i) {
            if ($(this).css('display') == 'block') {
                $(this).slideToggle();
            }
        })
    })

    $('.sub-menu-profile').hide();
    $('.menu-profile').click(function () {
        $('.sub-menu-profile').slideToggle();
    })

    //sub menu tax
    $('.sub-menu-tax').hide();
    $('.menu-tax').click(function () {
        $('.sub-menu-tax').slideToggle();
    })

    //sub menu receive
    $('.sub-menu-receive').hide();
    $('.menu-receive').click(function () {
        $('.sub-menu-receive').slideToggle();
    })

    //sub menu bonus
    $('.sub-menu-bonus').hide();
    $('.menu-bonus').click(function () {
        $('.sub-menu-bonus').slideToggle();
    })

    //sub menu evaluate
    $('.sub-menu-evaluate').hide();
    $('.menu-evaluate').click(function () {
        $('.sub-menu-evaluate').slideToggle();
    })

    //sub menu procedure
    $('.sub-menu-procedure').hide();
    $('.menu-procedure').click(function () {
        $('.sub-menu-procedure').slideToggle();
    })

    //sub menu utilities
    $('.sub-menu-utilities').hide();
    $('.menu-utilities').click(function () {
        $('.sub-menu-utilities').slideToggle();
    })

    //$(".menu").click(function () {
    //    $(this).parent().children('.menu-click').removeClass('menu-click');
    //    $(this).addClass('menu-click');
    //})

    //sub menu time manager
    $('.menu-sub-time').hide();
    $('#sub-time-manager').click(function () {
        if ($('.menu-sub-time').css('display') == 'none') {
            $('.menu-sub-time').slideToggle();
        }

    })

    //sub menu time keeping
    $('.menu-sub-timekeeping').hide();
    $('#sub-time-keeping').click(function () {
        if ($('.menu-sub-timekeeping').css('display') == 'none') {
            $('.menu-sub-timekeeping').slideToggle();
        }
    })

    //sub menu time salary
    $('.menu-sub-salary').hide();
    $('#sub-time-salary').click(function () {
        if ($('.menu-sub-salary').css('display') == 'none') {
            $('.menu-sub-salary').slideToggle();
        }
    })

    //sub menu time tax
    $('.menu-sub-tax').hide();
    $('#sub-time-tax').click(function () {
        if ($('.menu-sub-tax').css('display') == 'none') {
            $('.menu-sub-tax').slideToggle();
        }
    })

    //sub menu time insurrance
    $('.menu-sub-insurrance').hide();
    $('#sub-time-insurrance').click(function () {
        if ($('.menu-sub-insurrance').css('display') == 'none') {
            $('.menu-sub-insurrance').slideToggle();
        }
    })

    //sub menu time receive
    $('.menu-sub-receive').hide();
    $('#sub-time-receive').click(function () {
        if ($('.menu-sub-receive').css('display') == 'none') {
            $('.menu-sub-receive').slideToggle();
        }
    })

    //sub menu time educate
    $('.menu-sub-educate').hide();
    $('#sub-time-educate').click(function () {
        if ($('.menu-sub-educate').css('display') == 'none') {
            $('.menu-sub-educate').slideToggle();
        }
    })

    //sub menu time report
    $('.sub-menu-report').hide();
    $('.menu-report').click(function () {
        $('.sub-menu-report').slideToggle();
    })

    //sub menu time catalog
    $('.sub-menu-catalog').hide();
    $('.menu-catagory').click(function () {

        $('.sub-menu-catalog').slideToggle();

    })

    //sub menu system
    $('.menu-sub-system').hide();
    $('.menu-system').click(function () {
        $('.menu-sub-system').slideToggle();
    })

    //Load data
    $.ajax({
        url: "/api/Employee",
        method: "GET",
        dataType: "json",
        async: false,
        success: function (res) {
            var _class = "";
            var _table = "";

            var sum = 0;
            $.each(res, function (i, item) {
                var gender = '';
                if (i % 2 == 0) {
                    _class = "row-grey";
                }
                else {
                    _class = "row-white";
                }
                _table = "<tr class='row-table " + _class + "'>";
                _table = _table + "<td class='EmployeeCode'>" + item.EmployeeCode + "</td>";
                _table = _table + "<td class='EmployeeName'>" + item.EmployeeName + "</td>";
                if (item.Gender == 0) {
                    gender = 'Nam';
                } else {
                    gender = 'Nữ';
                }
                _table = _table + "<td class='gender'>" + gender + "</td>";
                _table = _table + "<td class='DateOfBirth'>" + item.DateOfBirth + "</td>";
                _table = _table + "<td class='LeverTraining'>" + item.LeverTraining + "</td>";
                _table = _table + "<td class='AddressTraining'>" + item.AddressTraining + "</td>";
                _table = _table + "<td class='Major'>" + item.Major + "</td>";
                _table = _table + "<td class='JobPosition'>" + item.JobPosition + "</td>";
                _table = _table + "<td class='WorkUnit'>" + item.WorkUnit + "</td>";
                _table = _table + "<td class='DateTrial'>" + item.DateTrial + "</td>";
                _table = _table + "<td class='DateOfficial'>" + item.DateOfficial + "</td>";
                _table = _table + "<td class='CMT'>" + item.CMT + "</td>";
                _table = _table + "<td class='Passport'>" + item.Passport + "</td></tr>";
                $('#tbody').append(_table);
                sum++;
            })
            $('#sumList').html(sum);
        },
        fail: function (res) {
            alert("Lấy thất bại");
        }

    })
    //Click vào row trong list
    $('.row-table').click(function () {
        if ($(this).hasClass('checking')) {
            $(this).removeClass('checking');
            $('.box-info-employee').find('.EmployeeCode').html('');
            $('.box-info-employee').find('.EmployeeName').html('');
            $('.box-info-employee').find('.gender').html('');
            $('.box-info-employee').find('.DateOfBirth').html('');
            $('.box-info-employee').find('.CMT').html('');
            $('.box-info-employee').find('.Passport').html('');
            $('.box-info-employee').find('.JobPosition').html('');
            $('.box-info-employee').find('.WorkUnit').html('');
            $('.box-info-employee').find('.DateTrial').html('');
        }
        else {
            $(this).parent().children('.checking').removeClass('checking');
            $(this).addClass('checking');
            $('.box-info-employee').find('.EmployeeCode').html($(this).find('.EmployeeCode').html());
            $('.box-info-employee').find('.EmployeeName').html($(this).find('.EmployeeName').html());
            $('.box-info-employee').find('.gender').html($(this).find('.gender').html());
            $('.box-info-employee').find('.DateOfBirth').html($(this).find('.DateOfBirth').html());
            $('.box-info-employee').find('.CMT').html($(this).find('.CMT').html());
            $('.box-info-employee').find('.Passport').html($(this).find('.Passport').html());
            $('.box-info-employee').find('.JobPosition').html($(this).find('.JobPosition').html());
            $('.box-info-employee').find('.WorkUnit').html($(this).find('.WorkUnit').html());
            $('.box-info-employee').find('.DateTrial').html($(this).find('.DateTrial').html());
        }
    });
    //Xóa
    $('#btn-del').click(function () {
        if ($('#tbody').find('.checking').length) {
            if (confirm('Bạn có chắc muốn xóa nhân viên này?')) {
                var id = $('#tbody').find('.checking').children('.EmployeeCode').html();
                $.ajax({
                    url: "/api/Employee/" + id,
                    method: "Delete",
                    data: id,
                    async: false,
                    success: function (res) {
                        alert("Xóa thành công!");
                    },
                    fail: function (res) {
                        alert("Xóa thất bại!");
                    }
                });
            }
            else {
                alert("Bạn chọn không");
            }
        }
        else {
            alert('Bạn chưa chọn nhân viên!');
        }
    })

    //Hiện modal sửa
    $('.row-table').dblclick(function () {
        $('#update-EmployeeCode').val($(this).find('.EmployeeCode').html());
        $('#update-EmployeeName').val($(this).find('.EmployeeName').html());
        if ($(this).find('.gender').html() == 'Nam') {
            debugger;
           $('#men').prop('checked', true);
        }
        else {
            debugger;
            $('#women').prop('checked', true);
        }
        var dateOfBirth = $(this).find('.DateOfBirth').text().split("/");
        $('#update-DateOfBirth').val(dateOfBirth[2] + "-" + dateOfBirth[1] + "-" + dateOfBirth[0]);
        $('#update-LeverTraining').val($(this).find('.LeverTraining').text());
        $('#update-AddressTraining').val($(this).find('.AddressTraining').html());
        $('#update-Major').val($(this).find('.Major').html());
        $('#update-JobPosition').val($(this).find('.JobPosition').html());
        $('#update-WorkUnit').val($(this).find('.WorkUnit').html());
        var dateTrial = $(this).find('.DateTrial').text().split("/");
        $('#update-DateTrial').val(dateTrial[2] + "-" + dateTrial[1] + "-" + dateTrial[0]);
        var dateOfficial = $(this).find('.DateOfficial').text().split("/");
        $('#update-DateOfficial').val(dateOfficial[2] + "-" + dateOfficial[1] + "-" + dateOfficial[0]);
        $('#update-CMT').val($(this).find('.CMT').html());
        $('#update-Passport').val($(this).find('.Passport').html());
        $('#modal-update').modal('show');
    })
    //Thực hiện sửa
    $('#btn-update').click(function () {


    })

})