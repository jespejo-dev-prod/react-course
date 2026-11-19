const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // !quiero mi dinero!!

    reject("Mi amigo se perdió");
  }, 2000); // 2 seg
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Pues a seguir sin el dinero!");
  });
