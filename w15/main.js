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
  const filterPostsArr = posts.filter(post => post.userId === 1 && post.title.length > 10);
  console.log(filterPostsArr);
  // console.log(posts);
  // forEach
  // posts.forEach(post => {
  //   console.log(post);
  // })
};

const onError = err => {
  console.log(`Error ${err}`);
};

const onSuccess = async posts => {
  displayPosts(posts);
};

const start = () => {
  getPosts();
};