wrapperDiv = document.createElement("div");
wrapperDiv.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");

iframeElement = document.createElement("iframe");
iframeElement.setAttribute("style","width: 100%; height: 100%;");

wrapperDiv.appendChild(iframeElement);

modalDialogParentDiv = document.createElement("div");
modalDialogParentDiv.setAttribute("style","position: absolute; width: 350px; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: auto; text-align: center; top: 149px;");

modalDialogSiblingDiv = document.createElement("div");

modalDialogTextDiv = document.createElement("div"); 
modalDialogTextDiv.setAttribute("style" , "text-align:center");

breakElement = document.createElement("br"); 
imageElement = document.createElement("img"); 
imageElement.src = chrome.extension.getURL("visit-donegood.jpg");

modalDialogAnchor = document.createElement("a");
modalDialogAnchor.setAttribute("href", "http://donegood.co");
modalDialogText = document.createElement("strong"); 
modalDialogText.innerHTML = "Visit DoneGood.co";

modalDialogAnchor.appendChild(modalDialogText);
modalDialogTextDiv.appendChild(modalDialogAnchor);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(breakElement);
modalDialogTextDiv.appendChild(imageElement);

modalDialogSiblingDiv.appendChild(modalDialogTextDiv);
modalDialogParentDiv.appendChild(modalDialogSiblingDiv);

document.body.appendChild(wrapperDiv);
document.body.appendChild(modalDialogParentDiv);