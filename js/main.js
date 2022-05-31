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
});
