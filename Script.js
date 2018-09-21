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

    showList();
    loadFormAdd();
})

function showList() {
    $('#tbody').empty();
    $.ajax({
        url: "/api/Employee",
        method: "GET",
        dataType: "json",
        async: false,
        success: function (res) {
            var _class = "";
            var _table = "";
            console.log(res);
            $.each(res, function (i, item) {
                var gender = '';
                //console.log(i);
                console.log(item);
                if (i % 2 == 0) {
                    _class = "row-grey";
                }
                else {
                    _class = "row-white";
                }
                _table = "<tr class='row-table " + _class + "'>";
                _table = _table + "<td>" + item.EmployeeCode + "</td>";
                _table = _table + "<td>" + item.EmployeeName + "</td>";
                if (item.Gender == 1) {
                    gender = 'Nam';
                } else {
                    gender = 'Nữ';
                }
                _table = _table + "<td>" + gender + "</td>";
                _table = _table + "<td>" + item.DateOfBirth + "</td>";
                _table = _table + "<td>" + item.LeverTraining + "</td>";
                _table = _table + "<td>" + item.AddressTraining + "</td>";
                _table = _table + "<td>" + item.Major + "</td>";
                _table = _table + "<td>" + item.JobPosition + "</td>";
                _table = _table + "<td>" + item.WorkUnit + "</td>";
                _table = _table + "<td>" + item.DateTrial + "</td>";
                _table = _table + "<td>" + item.DateOfficial + "</td>";
                _table = _table + "<td>" + item.CMT + "</td>";
                _table = _table + "<td>" + item.Passport + "</td></tr>";
                $('#tbody').append(_table);
            })
        },
        fail: function (res) {
            alert("Lấy thất bại");
        }
    })
}

function loadFormAdd() {
    $('#btnAdd').click(function () {
        showOrCloseFormAddEmployees('show')
    });

    $('#btnClose').click(function () {
        showOrCloseFormAddEmployees('close')
    });

    setNullItem();

    $('#btnCat').click(function () {
        debugger;
        if (checkRequired($('.txtInput2'))) {
            var arrayString = getInputValue();
            postDataInput(arrayString);
        }
    });

    $('#btnCatThem').click(function () {
        if (checkRequired($('.txtInput2'))) {
            var arrayString = getInputValue();
            postDataInput(postDataInput);

            // Đóng form add và show list nhân viên
            showOrCloseFormAddEmployees('close');
            showList();
        }
    });

    // Kiểm tra các input bắt buộc nhập khi forcus out
    $(".txtInput1").blur(function () {
        checkRequired([$(this)])
    });

    // Kiểm tra ô tên đã được nhập hay chưa?
    $(".txtInput1").blur(function () {
        checkRequiredName($(".txtInput1"));
    });

    // Kiểm tra mã nhân viên đã tồn tại hay chưa?
    $("#employeesID").blur(function () {
        debugger;
        getEmployeesByID($("#employeesID").val().trim());
    })
}

function showOrCloseFormAddEmployees(value) {
    if (value == 'show') {
        $('#listEmployees').addClass('hiddenDiv');
        $('#formAddEmployees').removeClass('hiddenDiv');
    }
    if (value == 'close') {
        $('#listEmployees').removeClass('hiddenDiv');
        $('#formAddEmployees').addClass('hiddenDiv');
    }
}

function setNullItem() {
    $.each($('.txtInput'), function (index, item) {
        item.value = '';
    });
}

function checkRequired(arrayInputRequired) {
    var isValid = true;
    $.each(arrayInputRequired, function (index, item) {
        if (item.value == '') {
            $(item).css("border", "1px solid red");
            $(item).attr("title", "Trường này không được để trống");
            isValid = false;
        }
        else {
            $(item).css("border", " 1px solid #ccc");
        }
    });
    return isValid;
}

function checkRequiredName(arrayInputRequired) {
    var count = 0;
    var name = '';
    $.each(arrayInputRequired, function (index, item) {
        debugger;
        if (item.value == '') {
            count++;
        }
        else {
            name += item.value + " ";
        }
    });
    debugger;
    if (count == 2) {
        $('#name').css("border", " 1px solid #f00");
        $('#name').attr("title", "Trường này không được để trống");
        $('#name').val(name.trim());
    }
    else {
        $('#name').css("border", " 1px solid #ccc");
        $('#name').val(name.trim());
    }
}

function getInputValue() {
    // lấy dữ liệu nhập vào
    var ob = new Array();
    $.each($('.txtInput'), function (index, item) {
        ob.push(item.value.trim());
    });

    return ob;
}

function postDataInput(arrayString) {

    // gửi dữ liệu lên server
    $.ajax({
        url: "/api/Employee",
        method: "POST",
        data: JSON.stringify(arrayString),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (res) {
            if (res == 1) {
                alert("Thêm thành công");
            }
        },
        fail: function (res) {
            alert("Thêm không thành công");
        }
    });
}

function getEmployeesByID(id) {
    if (id != '') {
        $("#employeesID").css("border", " 1px solid #ccc");
        $.ajax({
            url: "/api/Employee/" + id,
            method: "GET",
            dataType: "json",
            async: false,
            success: function (res) {
                debugger;
                if (res > 0) {
                    $('#employeesID').focus();
                    alert("Đã tồn tại mã nhân viên");
                }
            },
            fail: function (res) {
            }
        });
    }
    else {
        $("#employeesID").css("border", " 1px solid #f00");
    }
}
