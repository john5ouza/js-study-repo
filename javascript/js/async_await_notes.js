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


const displayUser = async () => {
  try {
    const user = await loginUser("john@email.com", "225588");
    const videos = await getUserVideos(user.email);
    const videoDetails = await getVideoDetails(videos[0]);
    
    console.log({ videos });
    console.log({ videoDetails });
  } catch (error) {
    console.log({ error });
  };
};

displayUser();