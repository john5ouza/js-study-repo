const loginUser = (email, password, onSuccess, onError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("Error on login!"));
    }

    console.log("user logged!");
    onSuccess({ email });
  }, 1500);
};

const getUserVideos = (email, callback) => {
  setTimeout(() => {
    callback(["video-01", "video-02", "video-03"])
  }, 2000);
};

const getVideoDetails = (video, callback) => {
  setTimeout(() => {
    callback({ title: "video title" });
  }, 2500);
};

const user = loginUser(
  "john@email.com",
  "225588",
  (user) => {
    getUserVideos(user.email, (videos) => {
      console.log({ videos });
        getVideoDetails(videos[0], (videoDetails) => {
          console.log({ videoDetails });
        });
    });
    console.log({ user });
  },
  (error) => {
    console.log({ error });
  }
);