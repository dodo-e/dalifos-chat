function updateTitle() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; 
  const year = today.getFullYear();

  const newTitle = `اليوم: ${day}/${month}/${year}`; 

  document.title = newTitle;
}


updateTitle();


// setInterval(updateTitle, 24 * 60 * 60 * 1000); // كل 24 ساعة