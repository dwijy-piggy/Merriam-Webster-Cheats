javascript:document.getElementsByClassName("start-quiz")[0].click();
for(var i = 1; i <= 10; i++){
    var a = document.getElementsByTagName("input")[i];
    a.value = a.getAttribute("data-aid");
    document.getElementsByClassName("choice choice-1")[i-1].setAttribute("class", "choice choice-1");
    document.getElementsByClassName("choice choice-1")[i-1].click();
    try{document.getElementsByClassName("more-link visible next-question animated fadeInUp")[i-1].click()}
    catch{}
}
