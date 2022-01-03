function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}
function dragging(event) {
  document.getElementById("demo").innerHTML = " p 元素正在拖动";
}
function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "p 元素已被拖动";
}