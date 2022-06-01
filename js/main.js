var urlInput = document.querySelector('.user-url');

var newImage = document.querySelector('.new-image');

var entryForm = document.querySelector('.journal-entry-form');

urlInput.addEventListener('input', function (event) {

  var test = event.target.value;

  newImage.setAttribute('src', test);
});

entryForm.addEventListener('submit', function (e) {
  var newObject = {};
  newObject.title = entryForm.title.value;
  newObject.photoUrl = entryForm.url.value;
  newObject.notes = entryForm.notes.value;
  newObject.EntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObject);
  var secondContainer = document.querySelector('.entries-button');
  var firstContainer = document.getElementById('first-container');
  secondContainer.classList.remove('hidden');
  firstContainer.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', function (e) {
  var ul = document.querySelector('ul');
  var storage = localStorage.getItem('Entries');
  var obj = JSON.parse(storage);
  var entriesTest = obj.entries;
  for (var i = 0; i < entriesTest.length; i++) {
    var allEntries = journalEntry(entriesTest[i]);
    ul.appendChild(allEntries);
  }
  function journalEntry(entry) {
    var li = document.createElement('li');
    var divRow = document.createElement('div');
    divRow.classList.add('row');
    li.appendChild(divRow);
    var divColumnFullHalf = document.createElement('div');
    divColumnFullHalf.classList.add('column-full');
    divColumnFullHalf.classList.add('column-half');
    divRow.appendChild(divColumnFullHalf);
    var image = document.createElement('img');
    image.classList.add('new-image');
    image.setAttribute('src', entriesTest[i].photoUrl);
    image.setAttribute('alt', 'placeholder');
    divColumnFullHalf.appendChild(image);
    var divText = document.createElement('div');
    divText.classList.add('column-full');
    divText.classList.add('column-half');
    divText.classList.add('text-input');
    divRow.appendChild(divText);
    var name = document.createElement('h1');
    var nameText = document.createTextNode(entriesTest[i].title);
    name.appendChild(nameText);
    divText.appendChild(name);
    var p = document.createElement('p');
    var pText = document.createTextNode(entriesTest[i].notes);
    p.appendChild(pText);
    divText.appendChild(p);
    return li;
  }
});

var anchor = document.querySelector('.anchor');

var clickButton = document.querySelector('.click-button');

clickButton.addEventListener('click', function (event) {
  var secondContainer = document.querySelector('.entries-button');
  var firstContainer = document.getElementById('first-container');
  secondContainer.classList.add('hidden');
  firstContainer.classList.remove('hidden');
});

anchor.addEventListener('click', function (event) {
  var secondContainer = document.querySelector('.entries-button');
  var firstContainer = document.getElementById('first-container');
  secondContainer.classList.remove('hidden');
  firstContainer.classList.add('hidden');
});
