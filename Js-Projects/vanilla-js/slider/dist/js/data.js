const fetchAdsMock = new Promise((resolve, reject) => {
  setTimeout(() => {
    const statusObj = { status: 200 };

    const { status } = statusObj;

    if (status == 200) {
      resolve([
        [
          {
            img: "https://source.unsplash.com/random",
            product: "Linon Jacket Slim Fit",
            category: "Suits",
            price: `$79 `,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Linon Jacket Slim Fit",
            category: "Suits",
            price: `$79 `,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Linon Jacket Slim Fit",
            category: "Suits",
            price: `$79 `,
          },
        ],
        [
          {
            img: "https://source.unsplash.com/random",
            product: "Ribbed Cardigan",
            category: "New Arrival",
            price: `$22`,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Ribbed Cardigan",
            category: "New Arrival",
            price: `$22`,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Ribbed Cardigan",
            category: "New Arrival",
            price: `$22`,
          },
        ],
        [
          {
            img: "https://source.unsplash.com/random",
            product: "Windproof Jacket",
            category: "Jacket",
            price: `$29`,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Windproof Jacket",
            category: "Jacket",
            price: `$29`,
          },
          {
            img: "https://source.unsplash.com/random",
            product: "Windproof Jacket",
            category: "Jacket",
            price: `$29`,
          },
        ],
      ]);
    } else {
      reject(` Request failed with ${status}. Could not fetch ads`);
    }
  }, 300);
});

export default fetchAdsMock;
