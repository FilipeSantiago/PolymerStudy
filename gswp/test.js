$("#pirateCaptureBox .content .action a").click();

var beRich = function(){
    $("#pirateCaptureBox .content .action a").click();
    x = setTimeout("beRich()", 3000*60);
}();