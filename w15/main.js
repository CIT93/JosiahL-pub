


const getPosts = async () => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    if (data.length) {
      onSuccess(data);
    } else {
      console.log('error on return value');
    }
  } catch (error) {
    onError(error);
  }
};

const displayPosts = posts => {
  // filter HOF
  const filterPostsArr = posts.filter(post => post.userId === 1 && post.title.length > 17);
  console.log(filterPostsArr);

  // map
  const mappedPostsArr = filterPostsArr.map(post => {
    return post.body.length;
  });
  console.log(mappedPostsArr);

const total = mappedPostsArr.reduce((sum, len) => sum +len, 0)
console.log(total)

const avg = total/mappedPostsArr.length;
console.log(avg)
// how would you calculate avg?




  //console.log(posts);

  // forEach
  // posts.forEach(post => {
  //   console.log(post);
  // });
};


const onError = err => {
  console.log('Error ${err}');
}