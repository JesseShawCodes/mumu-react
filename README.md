# Mumu
<p align="center">
    <img width="460" src="images/screenshotsGithub/1.jpg">
    <img width="460" src="images/screenshotsGithub/2.jpg">
    <img width="460" src="images/screenshotsGithub/3.jpg">
    <img width="460" src="images/screenshotsGithub/4.jpg">
</p>

## Built with React.js

This is the React Application version of the assignment linked below:
[live](https://JesseShawCodes.github.io/mumu/)
[repo](https://github.com/JesseShawCodes/mumu)


The music lover inside of me wanted to create something that allowed a user to do a simple search for an artist, and in return receive quick links to that artist's music. For this project, I used the last.fm API and the YouTube API. The last.fm API I found was very user friendly for new developers, it was very comprehensive. The YouTube API was also very easy to work with, and since YouTube is one of the ultimate go-to resources for content, it made sense to incorporate their API into this project.

This project incorporates HTML, CSS, Javascript, and jQuery. The last.fm and YouTube API's have been incorporated into the project as well.

This project took about one week from its initial conception, to version 1.0.

## How to use

Mumu is a music search engine that returns the top 3 album results for any artist. Furthermore, YouTube links are also returned to listen to any of those albums.

## Technology

-HTML
-CSS
-Javascript
-jQuery
-AJAX
-Last.fm and YouTube API's (see below)

## API's used

Mumu is powered by the [Last.fm](https://www.last.fm/api) and [YouTube](https://developers.google.com/youtube/) API's.

When a user searches in Mumu, the application makes it's first call to the last.fm API to find the top 3 albums of the artist that the user searches for. From there, mumu then executes a call to the YouTube API and returns links to listen to those top 3 albums.