
var base64;
var origin = {
    r: [[]],
    g: [[]],
    b: [[]],
    width: 0,
    height: 0
}
var edited = {
    r: [[]],
    g: [[]],
    b: [[]],
    width: 0,
    height: 0
}
var snd;

function splitstring(str, l) {
    var strs = [];
    var strlen = str.length;
    var tmp = "";
    for (var i = 0; i < strlen; i++) {
        tmp += str[i];
        if (tmp.length == l) {
            strs.push(tmp);
            tmp = "";
        }
    }
    strs.push(tmp);
    var result = { jml: strs.length, splitted: strs };
    return result;
}

function original() {

    if ($('#image-up').prop('files')[0]) {

        var reader = new FileReader();
        reader.onload = function (e) {
            base64 = e.target.result;
            $('#ori-image').attr('src', base64);
            snd = splitstring(base64, 1000);
            var rv = { length: snd.jml };
            for (var i = 0; i < snd.jml; i++) {
                var label = "str" + i;
                rv[label] = snd.splitted[i];
            }

            $.ajax({

                type: 'POST',
                url: 'controllers/image2matrix.php',
                data: rv,
                success: function (data) {
                    data = JSON.parse(data);
                    $('#edit-image').attr('src', data.base64);
                    $('#progress').show();
                    origin.r = data.r;
                    origin.g = data.g;
                    origin.b = data.b;
                    origin.width = data.width;
                    origin.height = data.height;
                    edited = origin;
                },
                async: false
            });
            var sumor = hitung_origin(origin);
            smooth_mean();
            var sumed = hitung_edited(edited);
            var errorna1 = 100 - ((sumed / sumor) * 100);
            var angka1 = errorna1.toFixed(2);

            console.log(errorna1);
            $('#error1').html('Nilai Error : ' + Math.abs(angka1) + '%');
            $.ajax({

                type: 'POST',
                url: 'controllers/image2matrix.php',
                data: rv,
                success: function (data) {
                    data = JSON.parse(data);
                    $('#edit-image').attr('src', data.base64);
                    $('#progress').show();
                    origin.r = data.r;
                    origin.g = data.g;
                    origin.b = data.b;
                    origin.width = data.width;
                    origin.height = data.height;
                    edited = origin;
                },
                async: false
            });
            var sumor2 = hitung_origin(origin);
            smooth_median();
            var sumed2 = hitung_edited(edited);
            var errorna2 = 100 - ((sumed2 / sumor2) * 100);
            var angka2 = errorna2.toFixed(2);
            console.log(errorna2);
            $('#error2').html('Nilai Error : ' + Math.abs(angka2) + '%');
            $.ajax({

                type: 'POST',
                url: 'controllers/image2matrix.php',
                data: rv,
                success: function (data) {
                    data = JSON.parse(data);
                    $('#edit-image').attr('src', data.base64);
                    $('#progress').show();
                    origin.r = data.r;
                    origin.g = data.g;
                    origin.b = data.b;
                    origin.width = data.width;
                    origin.height = data.height;
                    edited = origin;
                },
                async: false
            });
            var sumor3 = hitung_origin(origin);
            smooth_modus();
            var sumed3 = hitung_edited(edited);
            var errorna3 = 100 - ((sumed3 / sumor3) * 100);
            var angka3 = errorna3.toFixed(2);
            console.log(errorna3);
            $('#error3').html('Nilai Error : ' + Math.abs(angka3) + '%');
            $.ajax({

                type: 'POST',
                url: 'controllers/image2matrix.php',
                data: rv,
                success: function (data) {
                    data = JSON.parse(data);
                    $('#edit-image').attr('src', data.base64);
                    $('#progress').show();
                    origin.r = data.r;
                    origin.g = data.g;
                    origin.b = data.b;
                    origin.width = data.width;
                    origin.height = data.height;
                    edited = origin;
                },
                async: false
            });
            var sumor4 = hitung_origin(origin);
            convulsion_gauss();
            var sumed4 = hitung_edited(edited);
            var errorna4 = 100 - ((sumed4 / sumor4) * 100);
            var angka4 = errorna4.toFixed(2);
            console.log(errorna4);
            $('#error4').html('Nilai Error : ' + Math.abs(angka4) + '%');
        };
        reader.readAsDataURL($('#image-up').prop('files')[0]);
    }
}

function hitung_origin(origin) {
    var sumor = 0;
    for (let i = 0; i < (origin.width - 1); i++) {
        for (let j = 0; j < (origin.height - 1); j++) {
            sumor = sumor + origin.r[i][j] + origin.g[i][j] + origin.b[i][j];
        }
    }
    return sumor;
}

function hitung_edited(edited) {
    var sumed = 0;
    for (let i = 0; i < (edited.width - 1); i++) {
        for (let j = 0; j < (edited.height - 1); j++) {
            sumed = sumed + edited.r[i][j] + edited.g[i][j] + edited.b[i][j];
        }
    }
    return sumed;
}

function brightness(direction) {
    $('#progress').show();
    $.ajax({
        type: 'POST',
        url: 'controllers/brightness.php',
        data: {
            r: JSON.stringify(edited.r),
            g: JSON.stringify(edited.g),
            b: JSON.stringify(edited.b),
            width: edited.width,
            height: edited.height,
            direction: direction
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#edit-image').attr('src', data.base64);
            $('#progress').hide();
            edited.r = data.r;
            edited.g = data.g;
            edited.b = data.b;
            edited.width = parseInt(data.width);
            edited.height = parseInt(data.height);
        },
        async: false
    });
}



function smooth_mean() {
    $('#progress').show();
    $.ajax({
        type: 'POST',
        url: 'controllers/smooth.php',
        data: {
            r: JSON.stringify(edited.r),
            g: JSON.stringify(edited.g),
            b: JSON.stringify(edited.b),
            width: edited.width,
            height: edited.height,
            direction: 'mean'
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#mean-image').attr('src', data.base64);
            $('#progress').hide();
            edited.r = data.r;
            edited.g = data.g;
            edited.b = data.b;
            edited.width = parseInt(data.width);
            edited.height = parseInt(data.height);
        },
        async: false
    });
}
function smooth_median() {
    $('#progress').show();
    $.ajax({
        type: 'POST',
        url: 'controllers/smooth.php',
        data: {
            r: JSON.stringify(edited.r),
            g: JSON.stringify(edited.g),
            b: JSON.stringify(edited.b),
            width: edited.width,
            height: edited.height,
            direction: 'median'
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#median-image').attr('src', data.base64);
            $('#progress').hide();
            edited.r = data.r;
            edited.g = data.g;
            edited.b = data.b;
            edited.width = parseInt(data.width);
            edited.height = parseInt(data.height);
        },
        async: false
    });
}
function smooth_modus() {
    $('#progress').show();
    $.ajax({
        type: 'POST',
        url: 'controllers/smooth.php',
        data: {
            r: JSON.stringify(edited.r),
            g: JSON.stringify(edited.g),
            b: JSON.stringify(edited.b),
            width: edited.width,
            height: edited.height,
            direction: 'modus'
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#modus-image').attr('src', data.base64);
            $('#progress').hide();
            edited.r = data.r;
            edited.g = data.g;
            edited.b = data.b;
            edited.width = parseInt(data.width);
            edited.height = parseInt(data.height);
        },
        async: false
    });
}


function convulsion_gauss(direction) {
    $('#progress').show();
    $.ajax({
        type: 'POST',
        url: 'controllers/convulsion.php',
        data: {
            r: JSON.stringify(edited.r),
            g: JSON.stringify(edited.g),
            b: JSON.stringify(edited.b),
            width: edited.width,
            height: edited.height,
            direction: 'gauss'
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#gauss-image').attr('src', data.base64);
            $('#progress').hide();
            edited.r = data.r;
            edited.g = data.g;
            edited.b = data.b;
            edited.width = parseInt(data.width);
            edited.height = parseInt(data.height);
        },
        async: false
    });
}


