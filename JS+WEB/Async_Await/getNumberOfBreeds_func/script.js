// function getNumberOfBreeds() {
//   return new Promise((resolve, reject) => {
//     axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
//         console.log(response);
//         const numOfBreeds = Object.keys(response.data.message).length;
//         resolve(numOfBreeds)
//       }).catch(err => reject(err));
//   })
// }

async function getNumberOfBreeds() {
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  const numOfBreeds = Object.keys(response.data.message).length;

  // how to reject an async function? (after validation)
  // throw new Error('....')

  return numOfBreeds;
}

// getNumberOfBreeds().then()
getNumberOfBreeds().then((numOfBreeds) => console.log(numOfBreeds));

async function getDataSequential() {
  const user = await fetch('/api/user/1').then(r => r.json());
  const posts = await fetch('/api/posts/1').then(r => r.json());
  const comments = await fetch('/api/comments/1').then(r => r.json());
  return { user, posts, comments };
}

// await Promise.all()
async function getDataParallel() {
  const [user, posts, comments] = await Promise.all([
    fetch('/api/user/1').then(r => r.json()),
    fetch('/api/posts/1').then(r => r.json()),
    fetch('/api/comments/1').then(r => r.json())
  ]);
  return { user, posts, comments };
}