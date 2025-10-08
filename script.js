function format(command) {
  document.execCommand(command, false, null);
}

function formatBlock(tag) {
  document.execCommand('formatBlock', false, tag);
}

function changeColor(color) {
  document.execCommand("foreColor", false, color);
}

function saveNote() {
  const content = document.getElementById("editor").innerHTML;
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "note.html";
  link.click();
}
