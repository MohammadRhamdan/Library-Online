const editDataClik = document.getElementById('editDataClick');
const close = document.getElementById('close');

editDataClik.addEventListener('click', function () {
  const editDataIsi = document.querySelector('.editDataIsi');
  const editData = document.querySelector('.editData');
  const inputTextData = document.querySelector('.inputTextData')
  const inputEditData = document.getElementById('inputEditData')
  editDataIsi.style.display = "inline-block";
  editData.style.display = "inline-block";
  // const result = inputTextData.innerText
  // inputEditData.innerText = result;
})

close.addEventListener('click', function () {
  const editData = document.querySelector('.editData');
  editData.style.display = "none"
})



