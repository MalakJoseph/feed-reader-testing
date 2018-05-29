/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* First test - It tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('Feeds Defined & Not Empty', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Second test - A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs Defined & Not Empty', () => {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* Third test - A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names Defined & Not Empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The Menu', () => {
        let body = document.body,
            menuIcon = document.querySelector('.menu-icon-link');
        /* Fourth test - A test that ensures the menu element is
         * hidden by default.
         */
        it('Hidden Menu by Default', () => {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


        /* Fifth test - A test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('Displayed Menu on First Click', () => {
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
        });

        it('Visible Menu on Second Click', () => {
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
    });



    describe('Initial Entries', () => {
        /* Sixth test - A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach((done) => {
            loadFeed(0, done);
        });


        it('Shows Some Headlines, at Least 1', () => {
            let entryInsideFeed = document.querySelector('.feed').querySelectorAll('.entry');
            expect(entryInsideFeed.length).not.toBe(0);
        });
    });



    describe('New Feed Selection', () => {
        let actualFeed = document.querySelector('.feed'),
            previousFeed;
        /* Seventh test - A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach((done) => {
            loadFeed(0, function() {
                // Saving actual feed as a previous feed
                previousFeed = actualFeed.innerHTML;
                // Loading newer one
                loadFeed(1, done);
            });
        });

        it('A New One Has Been Loaded', () => {
            expect(actualFeed.innerHTML).not.toEqual(previousFeed);
        });
    });
}());
