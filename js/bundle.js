/*FUNCTIONS*/

/*END:FUNCTIONS*/
var links = document.getElementsByClassName("-js-goto-innerpage");
var i;
for (i = 0; i < links.length; i++) {  
  links[i].addEventListener("click", function() {    
    document.location.href = "https://mitrofan4ik.github.io/github-page/";
  });
}

var linksBack = document.getElementsByClassName("-js-goto-startpage");

for (var i = 0; i < linksBack.length; i++) {  
  linksBack[i].addEventListener("click", function() {    
    document.location.href = "https://mitrofan4ik.github.io/github-page2/";
  });
}