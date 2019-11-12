/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

//this is our first test suite, contains set of tests.
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
//first test to make sure that allFeeds variable has been defined and not empty.
         it('urls are defined', function(){
           for (var i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           };
         });
//test that loops through each feed in allFeeds object and ensure it has URL defined and that url not empty.
        it('names are defined', function(){
           for (var i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
         }}
       );
    });
//and this test also loop through each feed to ensure name has defined and not empty.


describe('The menu', function(){
//new test suite

        it('menu element hidden', function(){
           expect($('body').hasClass('menu-hidden')).toEqual(true);    //check if body hasClass of menu-hidden, got this from app.js
         });
//a test to ensure the menu elemenet is hidden by defualt

       it('menu changes when clicked', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
        });
//a test to ensure menu changes visibility when menu icon is clicked. and should didplay when clicked and hide when clicked again.

   describe('Initial Entries', function(){

       beforeEach(function (done){
         loadFeed(0, function(){
           done();
         });
       });
    });
//a test to ensure when loadFeed function is called and complete the work.
  describe('New Feed Selection', function(){
      var start;
      var end;
      
       beforeEach(function (done){
         $('.feed').empty();
         loadFeed(0,function(){
           start = $('.feed').find(allFeeds.url);
           done();
         });
         loadFeed(1, function(){
           end = $('.feed').find(allFeeds.url);
           done();
         });
       });
  });

}());
