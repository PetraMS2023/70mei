function filterProducts(type, element) {
    // Filter products
    const allProducts = document.querySelectorAll('.product-item');
  
    allProducts.forEach(product => {
      if (type === 'all') {
        product.style.display = 'flex';
      } else if (product.classList.contains(type)) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
  
    // Update active button
    const buttons = document.querySelectorAll('.filter button');
    buttons.forEach(button => button.classList.remove('active'));
    
    element.classList.add('active');
  }
  