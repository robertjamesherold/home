const productPageData = {
  data: {
    products: [
          {
              product: {
                  id: '1',
                  name: 'Sample Product',
                  price: 29.99,
                  category: 'Electronics',
                  description: 'A great product for testing.',
                  rating: { score: 4.5, reviews: 10 },
                  inStock: true,
                  link: 'sample-product',
                  details: {
                      title: 'Product Details',
                      tab: [ {
                          tabtitle: 'Details',
                          tabcontent: {
                              Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                              Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                          }
                      },
                      {
                          tabtitle: 'Details',
                          tabcontent: {
                              Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                              Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                          }
                      }, {
                          tabtitle: 'Details',
                          tabcontent: {
                              Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                              Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                          }
                      }
                      ],
      
                  },
              },
          },
            
      {
        product: {
          id: '2',
          name: 'Another Product',
          price: 59.99,
          category: 'Home',
          description: 'Another great product for testing.',
          rating: { score: 4.5, reviews: 10 },

          inStock: false,
              link: 'another-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '3',
          name: 'Third Product',
          price: 19.99,
          category: 'Books',
          description: 'A fascinating book for testing.',
          rating: { score: 4.5, reviews: 10 },
          inStock: true,
              link: 'third-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '4',
          name: 'Fourth Product',
          price: 39.99,
          category: 'Clothing',
          description: 'A stylish shirt for testing.',
          rating: { score: 4.5, reviews: 10 },
          inStock: true,
          image: '/images/fourth-product.jpg',
              link: 'fourth-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '5',
          name: 'Fifth Product',
          price: 89.99,
          category: 'Gadgets',
          description: 'A cool gadget for testing.',
          rating: { score: 4.5, reviews: 10 },
          inStock: false,
              link: 'fifth-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '6',
          name: 'Sixth Product',
          price: 24.99,
          category: 'Toys',
          description: 'A fun toy for testing.',
          rating: { score: 4.5, reviews: 10 },
          inStock: true,
              link: 'sixth-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '7',
          name: 'Seventh Product',
          price: 49.99,
          category: 'Kitchen',
          description: 'A useful kitchen appliance for testing.',
          rating: { score: 4.5, reviews: 10 },
          inStock: true,
              link: 'seventh-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
      {
        product: {
          id: '8',
          name: 'Eighth Product',
          price: 34.99,
          category: 'Sports',
          description: 'A great product for sports enthusiasts.',
          rating: { score: 4.5, reviews: 10 },
          inStock: true,
              link: 'eighth-product',
            details: {
                  title: 'Product Details',
                  tab: [ {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  },
                  {
                      tabtitle: 'Details',
                      tabcontent: {
                          Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                          Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }, { tabtitle: 'Details',
                      tabcontent: {
                      Eigenschaften: [ 'Feature 1', 'Feature 2', 'Feature 3' ],
                      Wert: [ 'Value 1', 'Value 2', 'Value 3' ],
                      }
                  }
                    ],          
        },  
        },
      },
    ],
  },
};

export default productPageData;
