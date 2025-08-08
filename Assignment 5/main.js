/*
Name: Your Name
File: main.js
Date: 08 August 2025
Description: JavaScript for showing/hiding comments and adding new comments.
*/

// Show/hide comments
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', function () {
  const isHidden = commentWrapper.style.display === 'none';
  commentWrapper.style.display = isHidden ? 'block' : 'none';
  showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  showHideBtn.setAttribute('aria-expanded', isHidden);
});

// Add new comment
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  if (!nameField.value.trim() || !commentField.value.trim()) {
    alert('Please fill in both fields before submitting.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameField.value;
  commentPara.textContent = commentField.value;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}
