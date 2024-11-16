const getContainer = document.getElementById('container');
const getNewGrid = document.getElementById('newGrid');

getNewGrid.addEventListener('click', newGrid);

let newSize = 16;

function createGrid() {
  for (let i = 0; i < newSize; i++) {
    const getRow = document.createElement('div');
    getRow.classList.add('grid', 'row');
    getContainer.appendChild(getRow);
    // console.log('i' + i);

    for (let j = 0; j < newSize; j++) {
      const getCol = document.createElement('div');
      getCol.classList.add('grid', 'col');
      getRow.appendChild(getCol);
      // console.log('h' + j);
    }
  }
  getHovered();
}

function getHovered() {
  const getHoveredSquare = document.querySelectorAll('.col');

  getHoveredSquare.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.classList.add('hovered');
    });
  });
}

function clearGrid() {
  while (getContainer.firstChild) {
    getContainer.removeChild(getContainer.lastChild);
  }
}

function newGrid() {
  newSize = prompt('Size of new grid? Pick a number above 1 and under 100');
  if (newSize > 1 || newSize < 100) {
    clearGrid();
    createGrid();
  } else {
    alert('invalid choice. Pick again');
    return newGrid();
  }
}

createGrid();
