function toggleThis(e,n){var g=e.className.split(" "),l=g.indexOf(n);g.length>=2?(g.splice(l),e.className=g.join()):(g.push(n),e.className=g.join(" "))}function parentToggle(e,n){toggleThis(e.parentNode,n)}function nextSiblingToggle(e,n){toggleThis(e.nextElementSibling,n)}function prevSiblingToggle(e,n){toggleThis(e.previousElementSibling,n)}function idToggle(e,n){toggleThis(document.getElementById(e),n)}function tagNameToggle(e,n,g){for(var l=document.getElementsByTagName(e),t=0;t<l.length;t++)var o=l[g];toggleThis(o,n)}function tabToggle(e,n){elIndex=e;for(var g=document.getElementsByClassName(n),l=0;l<g.length;l++)g[l].className=n;return g[elIndex-1].className+=" active",!1}console.log("toggle.js ready");
