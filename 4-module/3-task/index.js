function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];

    const { available } = row.lastElementChild.dataset;
    if (available === 'true') {
      row.classList.add('available');
    }
    else if (available === 'false') {
      row.classList.add('unavailable');
    }
    else {
      row.hidden = true;
    }

    const gender = row.cells[2].textContent;
    if (gender === 'm') {
      row.classList.add('male');
    }
    else if (gender === 'f') {
      row.classList.add('female');
    }

    const age = row.cells[1].textContent;
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
