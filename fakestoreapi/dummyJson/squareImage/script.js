// https://dummyjson.com/image/SIZE
fetch('https://dummyjson.com/image/15')
.then(response => response.blob()) // Convert response to blob
.then(blob => {
  console.log('Fetched image blob:', blob);
})
// Blob {size: SIZE, type: 'image/png'}
