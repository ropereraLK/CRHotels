const getProductCategoryList = async () => {
    const categories = [
      "Dairy",
      "Meat",
      "Snacks",
      "Beverages",
      "Breakfast",
      "Fruits",
      "Vegetables",
      "Frozen Foods",
      "Bakery",
      "Canned Goods",
      "Condiments",
      "Grains & Pasta",
      "Cereals",
      "Soups",
      "Spices & Herbs",
      "Health & Wellness",
      "Baby Food",
      "Organic",
      "Vegan",
      "Gluten-Free",
      "Alcoholic Beverages",
      "Pet Food",
      "Cleaning Supplies",
      "Personal Care",
      "Household Items",
      "Beauty & Skincare",
      "Electronics",
      "Toys & Games",
      "Office Supplies",
      "Home Decor",
      "Kitchen Appliances"
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories);
      }, 1000); // Simulate an API call with a 1-second delay
    });
  };
  
  export default getProductCategoryList;
  