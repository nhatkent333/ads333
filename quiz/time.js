function monthDateFormatted() {
  const date = new Date();

  const years = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);


  return `${years}`;
}

for (let i = 0; i < 6; i++) {
	document.getElementById('date' + i).innerHTML = monthDateFormatted();
}
