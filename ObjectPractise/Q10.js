// 10. Write a JavaScript program to sort an array of JavaScript objects. Go to the editor according to libraryID
// Sample Object :

var library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


 const sortedLibrary =  library.sort((a,b)=>(
    a.libraryID - b.libraryID
  ))

   console.log(sortedLibrary)