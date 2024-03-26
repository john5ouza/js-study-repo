const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Error in login!"));
    }

    console.log("User logged!");
    resolve({ email });
  });
};

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUserVideos');
        resolve(["video-01", "video-02", "video-03"])
    }, 2000);
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideoDetails');
        resolve({ title: "video title" });
    }, 2500);
  });
};

// loginUser("john@email.com", "225588")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => getVideoDetails(videos[0]))
//   .catch((error) => console.log({ error }));

// Promise.all
const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Videos from YouTube");
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Posts from Facebook");
  }, 5000);
});

Promise.all([yt, fb]).then((result) => {
  console.log({ result });
});