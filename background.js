chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
      null, {code:"var headhtml=document.head.innerHTML; var st='.goog-tooltip{	display:none!important;}.goog-tooltip:hover{display:none!important;}.goog-text-highlight{background-color:transparent!important;border:none!important;box-shadow:none!important;}'; var sty ='<style type=\"text/css\">'+st+'</style>'; document.head.innerHTML = headhtml+sty"});
});





