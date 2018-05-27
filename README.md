# Feed Reader Testing Project


## Table of Contents
* [About the Project](#about-the-project)
* [How to run the Project](#how-to-run-the-project)
* [What Happened Inside](#tests-involved)


### About the Project
* This project aims to learn test-driven development `TDD` by validating codes through multible [tests](#tests-involved) using a popular framework [Jasmine](http://jasmine.github.io/).
* All the work is in `feedreader.js` file in jasmine folder.
* This is the fifth project within Udacity's Front-End Nanodegree program.


### How to run the Project
1. Clone the repository using `git clone https://github.com/MalakJoseph/feed-reader-testing.git`. Then you can open `index.html` in your browser.
2. Download it as a zip folder. Extract it. Open `index.html`.
3. Follow this [link](https://malakjoseph.github.io/feed-reader-testing/) for the online version.


### Tests Involved
1. Test if `allFeeds` is defined and not empty.
2. Test if each feed in the `allFeeds` array contains URL, and that it's not empty.
3. Test if each feed in the `allFeeds` array contains name, and that it's not empty.
4. Test if the menu element is hidden by default.
5. Test if the menu changes visibility when the menu icon is clicked.
6. Test if there's at least one feed when `loadFeed()` is called.
7. Test if the feed's content changed when new feed is loaded.
