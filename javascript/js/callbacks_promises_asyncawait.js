// Callback
/**
    // Definição da função loginUser que simula um processo de login assíncrono
      const loginUser = (email, password, callback) => {
    // Simulação de um atraso de 1500 milissegundos (1.5 segundos) para o processo de login
      setTimeout(() => {
      // Mensagem indicando que o usuário foi logado com sucesso
        console.log("user logged!");
      // Chamada da função de callback com um objeto contendo o email do usuário
        callback({ email });
      }, 1500);
    };

  // Chamada da função loginUser com parâmetros email, senha e uma função de callback
    const user = loginUser("john@email.com", "225588", (user) => {
      // Impressão no console de um objeto contendo as informações do usuário recebidas como argumento da função de callback
        console.log({ user });
    });
*/

// Promises
/**
  // Função para simular o login do usuário
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

  // Função para simular a obtenção de vídeos associados ao usuário
    const getUserVideos = (email) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("getUserVideos");
          resolve(["video-01", "video-02", "video-03"]);
        }, 2000);
      });
    };

  // Função para simular a obtenção de detalhes de vídeo
    const getVideoDetails = (video) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("getVideoDetails");
          resolve({ title: "video title" });
        }, 2500);
      });
    };

  // Encadeamento de promessas para realizar o login, obter vídeos e detalhes de vídeo
    loginUser("john@email.com", "225588")
      .then((user) => getUserVideos(user.email))
      .then((videos) => getVideoDetails(videos[0]))
      .catch((error) => console.log({ error }));

  // ------

  // Promise.all

  // Criação de uma promessa para obter vídeos do YouTube
    const yt = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Videos from YouTube");
      }, 2000);
    });

  // Criação de uma promessa para obter posts do Facebook
    const fb = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Posts from Facebook");
      }, 5000);
    });

  // Promise.all espera que todas as promessas fornecidas sejam resolvidas
    Promise.all([yt, fb]).then((result) => {
      // Quando todas as promessas forem resolvidas, o resultado será um array contendo os valores resolvidos de cada promessa na mesma ordem em que foram passadas
      console.log({ result });
    });
*/

// Async/Await
/**
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
        resolve(["video-01", "video-02", "video-03"]);
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

 */