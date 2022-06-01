var urlInput = document.querySelector('.user-url');

var newImage = document.querySelector('.new-image');

var entryForm = document.querySelector('.journal-entry-form');

var view = document.querySelectorAll('.view');

var all = document.querySelector('.all');

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
});

window.addEventListener('DOMContentLoaded', function (e) {
  var ul = document.querySelector('ul');
  var entriesTest = data.entries;
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

  if (data.view === view[0].getAttribute('data-view')) {
    view[0].classList.remove('hidden');
    view[0].classList.add('active');
    view[1].classList.add('hidden');
    view[1].classList.remove('active');
  } else if (data.view === view[1].getAttribute('data-view')) {
    view[1].classList.remove('hidden');
    view[1].classList.add('active');
    view[0].classList.add('hidden');
    view[0].classList.remove('active');
  }
});

function viewSwap(event) {
  var j = 0;
  var k = 1;
  if (view[j].getAttribute('data-view') === event) {
    view[j].classList.remove('hidden');
    view[j].classList.add('active');
    view[k].classList.add('hidden');
    view[k].classList.remove('active');
    data.view = view[j].getAttribute('data-view');
  } else if (view[k].getAttribute('data-view') === event) {
    view[k].classList.remove('hidden');
    view[k].classList.add('active');
    view[j].classList.add('hidden');
    view[j].classList.remove('active');
    data.view = view[k].getAttribute('data-view');
  }
}

all.addEventListener('click', function (event) {
  var dataView = event.target.getAttribute('data-view');
  viewSwap(dataView);
});
