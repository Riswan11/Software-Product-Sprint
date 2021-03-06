// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Computer Science Major', 'Anime Lover', 'Manchester United Fan', 'Student at Alcorn State University'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/**
 * week 2 step 2
 * Another way to use fetch is by using the async and await keywords. This
 * allows you to use the return values directly instead of going through
 * Promises.
 */
async function getDataUsingAsyncAwait() {
  const response = await fetch('/data');
  const quote = await response.text();
  document.getElementById('data-container').innerText = quote;
}

/**
 * week 2 step 3
 * Fetches comments from the servers and adds them to the DOM.
 */
function getCommentList() {
  fetch('/data').then(response => response.json()).then((comList) => {
    // comList is an object, not a string, so we have to
    // reference its fields to create HTML content

    const comListElement = document.getElementById('data-container');
    //comListElement.innerHTML = '';
    //for (let i = 0; i < comList.keys().length; i++){
    //comListElement.appendChild(
    //    createListElement(comList[i]));
    //}
    comList.forEach((line) => {
      comListElement.appendChild(createListElement(line));
    });
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

/**
 * week 3
 * fetches translated comments (get request) and adds it to the DOM.
 */

/** Translates the comments and resends the GET request */
function requestTranslation() {
        const languageCode = document.getElementById('languageCode').value;
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerText = '';

        const params = new URLSearchParams();
        params.append('languageCode', languageCode);

        fetch('/data?' + params.toString()).then(response => response.json()).then((comList) => {
    const comListElement = document.getElementById('data-container');
    comList.forEach((line) => {
      comListElement.appendChild(createListElement(line));
    });
  });

      }
