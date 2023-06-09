const fileInput = document.getElementById("fileInput");
// get result dom elements here
// pull in separate js parsers here and apply results to dom elements
function parseFile(input) {
  console.log(input);
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    alert(`File name: ${file.name} with ${reader.result.split("\n").length} rows`);
  }
}
