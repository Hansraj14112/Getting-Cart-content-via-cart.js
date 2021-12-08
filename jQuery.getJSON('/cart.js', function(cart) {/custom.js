jQuery.getJSON('/cart.js', function(cart) {
   // now have access to Shopify cart object
   alert('There are now ' + cart.item_count + ' items in the cart.');
} );
