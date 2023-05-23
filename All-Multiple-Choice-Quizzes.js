javascript:document.getElementsByClassName("start-quiz")[0].click();
for(var i = 1; i <= parseInt(document.getElementsByClassName("total-screens")[0].innerHTML); i++){
    document.querySelectorAll("[data-correct='1']")[i-1].click();
    try{document.getElementsByClassName("more-link visible next-question animated fadeInUp")[i-1].click();}
    catch{}
}
document.getElementsByClassName("more-link see-results visible animated fadeInUp")[0].click();
