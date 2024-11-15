const getContainer = document.getElementById('container');

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const getRow = document.createElement('div');
    getRow.classList.add('grid', 'row');
    getContainer.appendChild(getRow);
    // console.log('i' + i);

    for (let j = 0; j < 16; j++) {
      const getCol = document.createElement('div');
      getCol.classList.add('grid', 'col');
      getRow.appendChild(getCol);
      // console.log('h' + j);
    }
  }
}

createGrid();

const getHoveredSquare = document.querySelectorAll('.col');

getHoveredSquare.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.classList.add('hovered');
  });
});
