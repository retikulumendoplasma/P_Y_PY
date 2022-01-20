const listhargabarang = [  
    239000,
    150000,
    320000,
    299000,
    35000,
    250000,
    290000,
    320000,
    349000,
    100000
    ];
/*let listqty=[
    document.getElementById("myNumber").value,
    document.getElementById("myNumber1").value,
    document.getElementById("myNumber2").value,
    document.getElementById("myNumber3").value,
    document.getElementById("myNumber4").value,
    document.getElementById("myNumber5").value,
    document.getElementById("myNumber6").value,
    document.getElementById("myNumber7").value,
    document.getElementById("myNumber8").value,
    document.getElementById("myNumber9").value,
];*/

// GANTIFORMAT DUID
function formatRupiah(angka, prefix) {
    if(angka=="" || angka=="null" || angka==null || angka==undefined){
        return "";
    } else {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
            split   = number_string.split(','),
            sisa    = split[0].length % 3,
            rupiah  = split[0].substr(0, sisa),
            ribuan  = split[0].substr(sisa).match(/\d{3}/gi);
 
        if (ribuan) {
            separator = sisa ? ',' : '';
            rupiah += separator + ribuan.join(',');
        }
 
        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix == undefined ? rupiah : prefix + rupiah;
    }
}

let totalbayar = 0 
/*for (let i = 0; i < listhargabarang.length; i++) {
  totalbayar += listhargabarang[i];
}
document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());*/

/*function updateharganaik(){
    totalbayar = totalbayar + listhargabarang[0];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString()); 
}

function updatehargaturun(){
    totalbayar = totalbayar - listhargabarang[0];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString()); 
}
*/

// PLUS MINUS JUMLAH BARANG
function up(max) {
    if (document.getElementById("myNumber").value < parseInt(max)) {
        document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    totalbayar = totalbayar + listhargabarang[0];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked1_1").checked = true;
    document.getElementById("btnbuy").disabled = false;  

    }
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max
    }
}

function down(min) {
    if (document.getElementById("myNumber").value > parseInt(min)) {
        document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    totalbayar = totalbayar - listhargabarang[0];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
        document.getElementById("defaultChecked1_1").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
         
    }
}

function up1(max) {
    if (document.getElementById("myNumber1").value < parseInt(max)) {
        document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) + 1;
    totalbayar = totalbayar + listhargabarang[1];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked1_2").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber1").value >= parseInt(max)) {
        document.getElementById("myNumber1").value = max
    }
}

function down1(min) {
    if (document.getElementById("myNumber1").value > parseInt(min)) {
        document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) - 1;
    totalbayar = totalbayar - listhargabarang[1];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber1").value <= parseInt(min)) {
        document.getElementById("myNumber1").value = min;  
        document.getElementById("defaultChecked1_2").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up2(max) {
    if (document.getElementById("myNumber2").value < parseInt(max)) {
        document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) + 1;
    totalbayar = totalbayar + listhargabarang[2];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked2_1").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber2").value >= parseInt(max)) {
        document.getElementById("myNumber2").value = max
    }
}

function down2(min) {
    if (document.getElementById("myNumber2").value > parseInt(min)) {
        document.getElementById("myNumber2").value = parseInt(document.getElementById("myNumber2").value) - 1;
    totalbayar = totalbayar - listhargabarang[2];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber2").value <= parseInt(min)) {
        document.getElementById("myNumber2").value = min;
        document.getElementById("defaultChecked2_1").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }  
    }
}

function up3(max) {
    if (document.getElementById("myNumber3").value < parseInt(max)) {
        document.getElementById("myNumber3").value = parseInt(document.getElementById("myNumber3").value) + 1;
    totalbayar = totalbayar + listhargabarang[3];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked3_1").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber3").value >= parseInt(max)) {
        document.getElementById("myNumber3").value = max
    }
}

function down3(min) {
    if (document.getElementById("myNumber3").value > parseInt(min)) {
        document.getElementById("myNumber3").value = parseInt(document.getElementById("myNumber3").value) - 1;
    totalbayar = totalbayar - listhargabarang[3];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber3").value <= parseInt(min)) {
        document.getElementById("myNumber3").value = min;  
        document.getElementById("defaultChecked3_1").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up4(max) {
    if (document.getElementById("myNumber4").value < parseInt(max)) {
        document.getElementById("myNumber4").value = parseInt(document.getElementById("myNumber4").value) + 1;
    totalbayar = totalbayar + listhargabarang[4];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked3_2").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber4").value >= parseInt(max)) {
        document.getElementById("myNumber4").value = max
    }
}

function down4(min) {
    if (document.getElementById("myNumber4").value > parseInt(min)) {
        document.getElementById("myNumber4").value = parseInt(document.getElementById("myNumber4").value) - 1;
    totalbayar = totalbayar - listhargabarang[4];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber4").value <= parseInt(min)) {
        document.getElementById("myNumber4").value = min;  
        document.getElementById("defaultChecked3_2").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up5(max) {
    if (document.getElementById("myNumber5").value < parseInt(max)) {
        document.getElementById("myNumber5").value = parseInt(document.getElementById("myNumber5").value) + 1;
    totalbayar = totalbayar + listhargabarang[5];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked3_3").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber5").value >= parseInt(max)) {
        document.getElementById("myNumber5").value = max
    }
}

function down5(min) {
    if (document.getElementById("myNumber5").value > parseInt(min)) {
        document.getElementById("myNumber5").value = parseInt(document.getElementById("myNumber5").value) - 1;
    totalbayar = totalbayar - listhargabarang[5];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber5").value <= parseInt(min)) {
        document.getElementById("myNumber5").value = min;  
        document.getElementById("defaultChecked3_3").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up6(max) {
    if (document.getElementById("myNumber6").value < parseInt(max)) {
        document.getElementById("myNumber6").value = parseInt(document.getElementById("myNumber6").value) + 1;
    totalbayar = totalbayar + listhargabarang[6];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked4_1").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber6").value >= parseInt(max)) {
        document.getElementById("myNumber6").value = max
    }
}

function down6(min) {
    if (document.getElementById("myNumber6").value > parseInt(min)) {
        document.getElementById("myNumber6").value = parseInt(document.getElementById("myNumber6").value) - 1;
    totalbayar = totalbayar - listhargabarang[6];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber6").value <= parseInt(min)) {
        document.getElementById("myNumber6").value = min;  
        document.getElementById("defaultChecked4_1").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up7(max) {
    if (document.getElementById("myNumber7").value < parseInt(max)) {
        document.getElementById("myNumber7").value = parseInt(document.getElementById("myNumber7").value) + 1;
    totalbayar = totalbayar + listhargabarang[7];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked4_2").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber7").value >= parseInt(max)) {
        document.getElementById("myNumber7").value = max
    }
}

function down7(min) {
    if (document.getElementById("myNumber7").value > parseInt(min)) {
        document.getElementById("myNumber7").value = parseInt(document.getElementById("myNumber7").value) - 1;
    totalbayar = totalbayar - listhargabarang[7];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber7").value <= parseInt(min)) {
        document.getElementById("myNumber7").value = min;  
        document.getElementById("defaultChecked4_2").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up8(max) {
    if (document.getElementById("myNumber8").value < parseInt(max)) {
        document.getElementById("myNumber8").value = parseInt(document.getElementById("myNumber8").value) + 1;
    totalbayar = totalbayar + listhargabarang[8];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked5_1").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber8").value >= parseInt(max)) {
        document.getElementById("myNumber8").value = max
    }
}

function down8(min) {
    if (document.getElementById("myNumber8").value > parseInt(min)) {
        document.getElementById("myNumber8").value = parseInt(document.getElementById("myNumber8").value) - 1;
    totalbayar = totalbayar - listhargabarang[8];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber8").value <= parseInt(min)) {
        document.getElementById("myNumber8").value = min;  
        document.getElementById("defaultChecked5_1").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}

function up9(max) {
    if (document.getElementById("myNumber9").value < parseInt(max)) {
        document.getElementById("myNumber9").value = parseInt(document.getElementById("myNumber9").value) + 1;
    totalbayar = totalbayar + listhargabarang[9];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    document.getElementById("defaultChecked5_2").checked = true;
    document.getElementById("btnbuy").disabled = false

    }
    if (document.getElementById("myNumber9").value >= parseInt(max)) {
        document.getElementById("myNumber9").value = max
    }
}

function down9(min) {
    if (document.getElementById("myNumber9").value > parseInt(min)) {
        document.getElementById("myNumber9").value = parseInt(document.getElementById("myNumber9").value) - 1;
    totalbayar = totalbayar - listhargabarang[9];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
    }
    if (document.getElementById("myNumber9").value <= parseInt(min)) {
        document.getElementById("myNumber9").value = min;  
        document.getElementById("defaultChecked5_2").checked = false;
        if (document.getElementById("myNumber").value == min && document.getElementById("myNumber1").value == min && document.getElementById("myNumber2").value == min && document.getElementById("myNumber3").value == min && document.getElementById("myNumber4").value == min && document.getElementById("myNumber5").value == min && document.getElementById("myNumber6").value == min && document.getElementById("myNumber7").value == min && document.getElementById("myNumber8").value == min && document.getElementById("myNumber9").value == min) {
            document.getElementById("btnbuy").disabled = true;
        }
    }
}
/*if (document.getElementById("defaultChecked1_master1").value == true) {
    if (document.getElementById("myNumber1").value < 0) {
        document.getElementById("myNumber1").value = parseInt(document.getElementById("myNumber1").value) + 1;
    }
}*/

/*function mcbx1(){
    let cbx = document.getElementById("defaultChecked1_master1");
    if (cbx.checked == true) {
        if (document.getElementById("myNumber").value < 0) {
        document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    }
    }
   
}*/



if (typeof(Storage) !== "undefined") {
    console.log("ada")
}

/*if (document.getElementById("defaultChecked1_1").checked == false) {
    totalbayar = totalbayar - listhargabarang[0];
    document.getElementById("totalharga").innerHTML = "IDR " + formatRupiah(totalbayar.toString());
}*/

// DEFAULT UNCHECKED
$(document).ready(function() {
    $('#defaultChecked1_master1').prop('checked', false);
    $('#defaultChecked1_1').prop('checked', false);
    $('#defaultChecked1_2').prop('checked', false);
    $('#defaultChecked2_master2').prop('checked', false);
    $('#defaultChecked2_1').prop('checked', false);
    $('#defaultChecked3_master3').prop('checked', false);
    $('#defaultChecked3_1').prop('checked', false);
    $('#defaultChecked3_2').prop('checked', false);
    $('#defaultChecked3_3').prop('checked', false);
    $('#defaultChecked4_master4').prop('checked', false);
    $('#defaultChecked4_1').prop('checked', false);
    $('#defaultChecked4_2').prop('checked', false);
    $('#defaultChecked5_master5').prop('checked', false);
    $('#defaultChecked5_1').prop('checked', false);
    $('#defaultChecked5_2').prop('checked', false);

    var checkBoxess = $('body .cb');
    checkBoxess.change(function () {
    $('#btnbuy').prop('disabled', checkBoxess.filter(':checked').length < 1);
    });

    /*$('.checkbox').click(function () {

   if ($('.checkbox:checked').length >= 1) { 
        $('#btnbuy').prop("disabled", true);
       }
   else {
        $('#btnbuy').prop("disabled", false);
        }
    });*/

    // MASTER1
    $("#defaultChecked1_master1").change(function () {
      $(".cb1").prop('checked', $(this).prop("checked"));
    });
    $('.cb1').on('click', function () {
      if ($('.cb1:checked').length == $('.cb1').length) {
        $('#defaultChecked1_master1').prop('checked', true);
      } else {
        $('#defaultChecked1_master1').prop('checked', false);
      }
    });

    $('#up').on('click', function () {
      if ($('.cb1:checked').length == $('.cb1').length) {
        $('#defaultChecked1_master1').prop('checked', true);
      } else {
        $('#defaultChecked1_master1').prop('checked', false);
      }
    });

    $('#down').on('click', function () {
      if ($('.cb1:checked').length == $('.cb1').length) {
        $('#defaultChecked1_master1').prop('checked', true);
      } else {
        $('#defaultChecked1_master1').prop('checked', false);
      }
    });

    $('#up1').on('click', function () {
      if ($('.cb1:checked').length == $('.cb1').length) {
        $('#defaultChecked1_master1').prop('checked', true);
      } else {
        $('#defaultChecked1_master1').prop('checked', false);
      }
    });

    $('#down1').on('click', function () {
      if ($('.cb1:checked').length == $('.cb1').length) {
        $('#defaultChecked1_master1').prop('checked', true);
      } else {
        $('#defaultChecked1_master1').prop('checked', false);
      }
    });

    // MASTER2
    $("#defaultChecked2_master2").change(function () {
      $(".cb2").prop('checked', $(this).prop("checked"));
    });
    $('.cb2').on('click', function () {
      if ($('.cb2:checked').length == $('.cb2').length) {
        $('#defaultChecked2_master2').prop('checked', true);
      } else {
        $('#defaultChecked2_master2').prop('checked', false);
      }
    });

    $('#up2').on('click', function () {
      if ($('.cb2:checked').length == $('.cb2').length) {
        $('#defaultChecked2_master2').prop('checked', true);
      } else {
        $('#defaultChecked2_master2').prop('checked', false);
      }
    });

    $('#down2').on('click', function () {
      if ($('.cb2:checked').length == $('.cb2').length) {
        $('#defaultChecked2_master2').prop('checked', true);
      } else {
        $('#defaultChecked2_master2').prop('checked', false);
      }
    });

    // MASTER3
    $("#defaultChecked3_master3").change(function () {
      $(".cb3").prop('checked', $(this).prop("checked"));
    });
    $('.cb3').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#up3').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#down3').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#up4').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#down4').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#up5').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    $('#down5').on('click', function () {
      if ($('.cb3:checked').length == $('.cb3').length) {
        $('#defaultChecked3_master3').prop('checked', true);
      } else {
        $('#defaultChecked3_master3').prop('checked', false);
      }
    });

    // MASTER4
    $("#defaultChecked4_master4").change(function () {
      $(".cb4").prop('checked', $(this).prop("checked"));
    });
    $('.cb4').on('click', function () {
      if ($('.cb4:checked').length == $('.cb4').length) {
        $('#defaultChecked4_master4').prop('checked', true);
      } else {
        $('#defaultChecked4_master4').prop('checked', false);
      }
    });

    $('#up6').on('click', function () {
      if ($('.cb4:checked').length == $('.cb4').length) {
        $('#defaultChecked4_master4').prop('checked', true);
      } else {
        $('#defaultChecked4_master4').prop('checked', false);
      }
    });

    $('#down6').on('click', function () {
      if ($('.cb4:checked').length == $('.cb4').length) {
        $('#defaultChecked4_master4').prop('checked', true);
      } else {
        $('#defaultChecked4_master4').prop('checked', false);
      }
    });

    $('#up7').on('click', function () {
      if ($('.cb4:checked').length == $('.cb4').length) {
        $('#defaultChecked4_master4').prop('checked', true);
      } else {
        $('#defaultChecked4_master4').prop('checked', false);
      }
    });

    $('#down7').on('click', function () {
      if ($('.cb4:checked').length == $('.cb4').length) {
        $('#defaultChecked4_master4').prop('checked', true);
      } else {
        $('#defaultChecked4_master4').prop('checked', false);
      }
    });

    // MASTER5
    $("#defaultChecked5_master5").change(function () {
      $(".cb5").prop('checked', $(this).prop("checked"));
    });
    $('.cb5').on('click', function () {
      if ($('.cb5:checked').length == $('.cb5').length) {
        $('#defaultChecked5_master5').prop('checked', true);
      } else {
        $('#defaultChecked5_master5').prop('checked', false);
      }
    });

    $('#up8').on('click', function () {
      if ($('.cb5:checked').length == $('.cb5').length) {
        $('#defaultChecked5_master5').prop('checked', true);
      } else {
        $('#defaultChecked5_master5').prop('checked', false);
      }
    });

    $('#down8').on('click', function () {
      if ($('.cb5:checked').length == $('.cb5').length) {
        $('#defaultChecked5_master5').prop('checked', true);
      } else {
        $('#defaultChecked5_master5').prop('checked', false);
      }
    });

    $('#up9').on('click', function () {
      if ($('.cb5:checked').length == $('.cb5').length) {
        $('#defaultChecked5_master5').prop('checked', true);
      } else {
        $('#defaultChecked5_master5').prop('checked', false);
      }
    });

    $('#down9').on('click', function () {
      if ($('.cb5:checked').length == $('.cb5').length) {
        $('#defaultChecked5_master5').prop('checked', true);
      } else {
        $('#defaultChecked5_master5').prop('checked', false);
      }
    });

}); 
// akhir jquery


// checkBoxess.change(); // or add disabled="true" in the HTML
/*if (document.getElementById('checkeddefaultChecked1_1').) {
        const btnbeli = document.getElementById("btnbuy");
        btnbeli.disabled =false;
}*/
