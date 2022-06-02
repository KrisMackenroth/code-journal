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

  e.preventDefault();
  if (data.editing !== null) {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing === data.entries[i].EntryId) {
        data.entries[i].title = entryForm.title.value;
        data.entries[i].photoUrl = entryForm.url.value;
        data.entries[i].notes = entryForm.notes.value;
        data.editing = null;
      }
    }
  } else if (data.editing === null) {
    var newObject = {};
    newObject.title = entryForm.title.value;
    newObject.photoUrl = entryForm.url.value;
    newObject.notes = entryForm.notes.value;
    newObject.EntryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.unshift(newObject);
  }
  var dataView = view[1].getAttribute('data-view');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  } journalEntry();
  viewSwap(dataView);
  newImage.setAttribute('src', 'images/placeholder-image-square.jpg');
  entryForm.reset();
});

window.addEventListener('DOMContentLoaded', function (e) {
  journalEntry();
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
  for (var i = 0; i < data.entries.length; i++) {
    if (data.editing === data.entries[i].EntryId) {
      edit.textContent = 'Edit Entry';
      userTitle.setAttribute('value', data.entries[i].title);
      userUrl.setAttribute('value', data.entries[i].photoUrl);
      newImage.setAttribute('src', data.entries[i].photoUrl);
      var text = document.createTextNode(data.entries[i].notes);
      userNotes.appendChild(text);
    }
  }
});

var ul = document.querySelector('ul');

function journalEntry(entry) {
  var entriesTest = data.entries;
  for (var i = 0; i < entriesTest.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('data-entry-id', entriesTest[i].EntryId);
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
    var edit = document.createElement('i');
    edit.classList.add('fas');
    edit.classList.add('fa-pen');
    edit.classList.add('interesting');
    edit.setAttribute('data-entry-id', entriesTest[i].EntryId);
    divText.appendChild(edit);
    divText.appendChild(name);
    var p = document.createElement('p');
    p.classList.add('tiny-box');
    var pText = document.createTextNode(entriesTest[i].notes);
    p.appendChild(pText);
    divText.appendChild(p);
    ul.appendChild(li);
  }
}

function viewSwap(event) {
  var j = 0;
  var k = 1;
  if (view[j].getAttribute('data-view') === event) {
    view[j].classList.remove('hidden');
    view[j].classList.add('active');
    view[k].classList.add('hidden');
    view[k].classList.remove('active');
    userTitle.setAttribute('value', '');
    userUrl.setAttribute('value', '');
    userNotes.textContent = '';
    newImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    data.view = view[j].getAttribute('data-view');
  } else if (view[k].getAttribute('data-view') === event) {
    view[k].classList.remove('hidden');
    view[k].classList.add('active');
    view[j].classList.add('hidden');
    view[j].classList.remove('active');
    userTitle.setAttribute('value', '');
    userUrl.setAttribute('value', '');
    userNotes.textContent = '';
    newImage.setAttribute('src', 'images/placeholder-image-square.jpg');
    data.view = view[k].getAttribute('data-view');
    data.editing = null;
  }
}

all.addEventListener('click', function (event) {
  var dataView = event.target.getAttribute('data-view');
  if (event.target.classList.contains('clickable')) {
    edit.textContent = 'New Entry';
  }
  viewSwap(dataView);
});

var edit = document.querySelector('.entry-title-fun');

var userTitle = document.querySelector('#user-title');
var userUrl = document.querySelector('.user-url');
var userNotes = document.querySelector('#user-notes');

ul.addEventListener('click', function (event) {

  var test = data.entries;
  if (event.target.classList.contains('interesting')) {
    edit.textContent = 'Edit Entry';
    view[0].classList.remove('hidden');
    view[0].classList.add('active');
    view[1].classList.add('hidden');
    view[1].classList.remove('active');
    data.view = view[0].getAttribute('data-view');
    for (var i = 0; i < test.length; i++) {
      if (parseInt(event.target.getAttribute('data-entry-id')) === test[i].EntryId) {
        data.editing = event.target.getAttribute('data-entry-id');
        data.editing = parseInt(data.editing);
        userTitle.setAttribute('value', test[i].title);
        userUrl.setAttribute('value', test[i].photoUrl);
        newImage.setAttribute('src', test[i].photoUrl);
        var text = document.createTextNode(test[i].notes);
        userNotes.appendChild(text);
      }
    }
  }
});
