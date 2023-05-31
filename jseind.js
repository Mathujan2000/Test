var generateTable = document.getElementById('generate-table');
var tableContainer = document.getElementById('table-container');

function geneerTabel() {
  var cols = document.getElementById('cols').value;
  var rows = document.getElementById('rows').value;

  if (cols === "" || rows === ""){
    alert("Voer een nummer in rows en colunms om een grid te maken.");
    return;
  }
  if(cols > 99 || rows > 99){
    alert("Voer een getal in, kleiner dan 100");
    return;
  }


  let table = `<table>`;
  for (let i = 0; i < rows; i++) {
    table += `<tr>`;
    for (let j = 0; j < cols; j++) {
      table += `<td></td>`;
    }
    table += `</tr>`;
  }
  table += `</table>`;

  tableContainer.innerHTML = table;

    var cells = document.getElementsByTagName('td');
    var klueren = ["red", "green", "blue"];
    var currentColor = 0;

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = klueren[currentColor];
            currentColor = (currentColor + 1) % klueren.length;
            setTimeout(() => {
            {
                this.style.backgroundColor = "red";
            }
            setTimeout(() => {
            {
                this.style.backgroundColor = "green";
            }
            setTimeout(() => {
            {
                this.style.backgroundColor = "blue";
            }
            setTimeout(() => {
              {
                this.style.backgroundColor = "greenyellow";
            }
          },1000)
        },750)
      },500)
    },250)
        });
    }
};
