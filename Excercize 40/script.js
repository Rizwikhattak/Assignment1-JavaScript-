// Excercize 40:
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// Solution:

const make_album = function (artistName, albumTitle, numberTracks = 10) {
  const albumnObj = {
    artist_name: artistName,
    album_title: albumTitle,
    number_tracks: numberTracks,
  };
  return albumnObj;
};

const make_album2 = function (artistName, albumTitle, numberTracks) {
  const albumnObj = {
    artist_name: artistName,
    album_title: albumTitle,
    number_tracks: numberTracks,
  };
  return albumnObj;
};
console.log(make_album("Billie Ellish", "Happier than ever"));

console.log(make_album("Neffex", "Careless"));

console.log(make_album("NF", "Mansion", 20));

console.log(make_album2("Ed Sheran", "Divide", 40));
