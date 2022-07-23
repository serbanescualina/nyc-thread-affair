export default (req, res) => {
  res.status(200).json([
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/image/products/product-01a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/image/products/product-02a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/image/products/product-03a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/image/products/product-05a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/image/products/product-06a.jpg',
    },
  ]);
};
