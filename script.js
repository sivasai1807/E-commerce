
        const products = [
            {
                id: 1,
                title: "iPhone 15 Pro Max",
                price: 1199.99,
                category: "smartphones",
                image:"https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.8,
                reviews: 245,
                description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system.",
                specs: {
                    "Display": "6.7-inch Super Retina XDR",
                    "Chip": "A17 Pro",
                    "Storage": "256GB",
                    "Camera": "48MP Main, 12MP Ultra Wide",
                    "Battery": "Up to 29 hours video playback"
                }
            },
            {
                id: 2,
                title: "MacBook Pro 16\"",
                price: 2499.99,
                category: "laptops",
                image:"https://img.freepik.com/premium-vector/realistic-notebook-white-background-vector-illustration_174496-669.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.9,
                reviews: 189,
                description: "Supercharged by M3 Pro and M3 Max chips. Built for all the ways you work and play.",
                specs: {
                    "Display": "16.2-inch Liquid Retina XDR",
                    "Chip": "Apple M3 Pro",
                    "Memory": "18GB Unified Memory",
                    "Storage": "512GB SSD",
                    "Battery": "Up to 22 hours"
                }
            },
            {
                id: 3,
                title: "AirPods Max",
                price: 549.99,
                category: "headphones",
             image:"https://img.freepik.com/free-photo/earphones-with-case-surrounded-by-nature-scene_23-2150165594.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.7,
                reviews: 324,
                description: "High-fidelity audio with Adaptive EQ, Active Noise Cancellation, and spatial audio.",
                specs: {
                    "Driver": "40mm dynamic driver",
                    "Chip": "Apple H1 chip",
                    "Battery": "20 hours listening time",
                    "Features": "Active Noise Cancellation",
                    "Weight": "384.8 grams"
                }
            },
            {
                id: 4,
                title: "Samsung Galaxy S24 Ultra",
                price: 1299.99,
                category: "smartphones",
               image:"https://img.freepik.com/free-photo/smartphone-nature-concept_23-2150246099.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.6,
                reviews: 178,
                description: "Galaxy AI is here. Circle to Search, Live Translate, and Note Assist help you do more than you thought possible.",
                specs: {
                    "Display": "6.8-inch Dynamic AMOLED 2X",
                    "Processor": "Snapdragon 8 Gen 3",
                    "RAM": "12GB",
                    "Storage": "256GB",
                    "Camera": "200MP + 50MP + 12MP + 10MP"
                }
            },
            {
                id: 5,
                title: "Dell XPS 13",
                price: 1199.99,
                category: "laptops",
                image:"https://img.freepik.com/premium-photo/3d-laptop-computer-with-flip-screen-blue-dark-background-3d-illustration-rendering_37129-2652.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.5,
                reviews: 156,
                description: "13th Gen Intel processors and stunning InfinityEdge display in an incredibly compact design.",
                specs: {
                    "Display": "13.4-inch FHD+ InfinityEdge",
                    "Processor": "Intel Core i7-1355U",
                    "RAM": "16GB LPDDR5",
                    "Storage": "512GB PCIe SSD",
                    "Graphics": "Intel Iris Xe"
                }
            },
            {
                id: 6,
                title: "Sony WH-1000XM5",
                price: 399.99,
                category: "headphones",
                image:"https://img.freepik.com/premium-photo/black-wireless-headphones-studio-stock-photos_740012-127.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.8,
                reviews: 412,
                description: "Industry-leading noise canceling with premium sound quality and all-day comfort.",
                specs: {
                    "Driver": "30mm driver unit",
                    "Frequency": "4 Hz-40,000 Hz",
                    "Battery": "30 hours with ANC",
                    "Charging": "Quick charge 3 min for 3 hours",
                    "Weight": "249g"
                }
            },
            {
                id: 7,
                title: "MagSafe Charger",
                price: 39.99,
                category: "accessories",
                image:"https://img.freepik.com/free-photo/back-view-gray-round-clock_187299-46890.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.4,
                reviews: 89,
                description: "Wireless charger that aligns perfectly with iPhone 12 and later for faster wireless charging.",
                specs: {
                    "Compatibility": "iPhone 12 and later",
                    "Power": "Up to 15W wireless charging",
                    "Cable": "1m USB-C integrated cable",
                    "Magnets": "Compatible with MagSafe cases",
                    "Design": "Compact and lightweight"
                }
            },
            {
                id: 8,
                title: "iPad Pro 12.9\"",
                price: 1099.99,
                category: "accessories",
                image:"https://img.freepik.com/free-photo/digital-tablet-screen-smart-tech_53876-96808.jpg?uid=R141127054&ga=GA1.1.358108297.1748324980&semt=ais_hybrid&w=740",
                rating: 4.7,
                reviews: 234,
                description: "The ultimate iPad experience with M2 chip, stunning Liquid Retina XDR display, and all-day battery life.",
                specs: {
                    "Display": "12.9-inch Liquid Retina XDR",
                    "Chip": "Apple M2",
                    "Storage": "128GB",
                    "Camera": "12MP Wide, 10MP Ultra Wide",
                    "Battery": "Up to 10 hours"
                }
            }
        ];

     
        let cart = [];
        let currentProduct = null;

      
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            initializeEventListeners();
            updateCartUI();
        });

        function initializeEventListeners() {
           
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    filterProducts(this.dataset.filter);
                });
            });

            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function() {
                    const category = this.dataset.category;
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
                    filterProducts(category);
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                });
            });

            document.getElementById('searchInput').addEventListener('input', function() {
                searchProducts(this.value);
            });

           
            document.querySelector('.newsletter-form').addEventListener('submit', subscribeNewsletter);
        }

        function loadProducts() {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = '';

            products.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.category = product.category;
            card.innerHTML = `
                <div class="product-image">
                      <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="product-info">
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">(${product.rating}/5 - ${product.reviews} reviews)</span>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            `;

            card.addEventListener('click', function(e) {
                if (!e.target.closest('.add-to-cart')) {
                    openProductModal(product);
                }
            });

            return card;
        }

        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let starsHTML = '';

            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }

            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }

            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }

            return starsHTML;
        }

        function filterProducts(category) {
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function searchProducts(query) {
            const productCards = document.querySelectorAll('.product-card');
            const searchTerm = query.toLowerCase();

            productCards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                if (title.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartUI();
            showSuccessMessage('Product added to cart!');
        }

        function addToCartFromModal() {
            if (currentProduct) {
                addToCart(currentProduct.id);
                closeModal('productModal');
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');

 
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;

          
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toFixed(2);

            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
              <img src="${item.image}" alt="${item.title}" />
                      </div>

                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                            <div class="quantity-controls">
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span class="qty-display">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
                checkoutBtn.disabled = false;
            }
        }

        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('overlay');
            
            cartSidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        }

        function openProductModal(product) {
            currentProduct = product;
            
document.getElementById('modalProductImage').innerHTML = `<img src="${product.image}" alt="${product.title}" />`;

            document.getElementById('modalProductTitle').textContent = product.title;
            document.getElementById('modalProductPrice').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('modalProductDescription').textContent = product.description;
            
           
            const specsContainer = document.getElementById('modalProductSpecs');
            specsContainer.innerHTML = Object.entries(product.specs)
                .map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}:</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('');

            document.getElementById('productModal').style.display = 'block';
            document.getElementById('overlay').classList.add('show');
        }

        function openCheckout() {
         
            const orderItems = document.getElementById('orderItems');
            const orderTotal = document.getElementById('orderTotal');
            
            orderItems.innerHTML = cart.map(item => `
                <div class="order-item">
                    <span>${item.title} x${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            orderTotal.textContent = total.toFixed(2);
            
            document.getElementById('checkoutModal').style.display = 'block';
            document.getElementById('overlay').classList.add('show');
            toggleCart(); 
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.getElementById('overlay').classList.remove('show');
        }

        function closeModals() {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.getElementById('overlay').classList.remove('show');
            
            
            document.getElementById('cartSidebar').classList.remove('open');
        }

        function processOrder(event) {
            event.preventDefault();
            
           
            setTimeout(() => {
                showSuccessMessage('Order placed successfully! Thank you for your purchase.');
                cart = [];
                updateCartUI();
                closeModal('checkoutModal');
             
                event.target.reset();
            }, 1000);
        }

        function subscribeNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            
            showSuccessMessage('Successfully subscribed to newsletter!');
            event.target.reset();
        }

        function showSuccessMessage(message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(successDiv);
            
            setTimeout(() => {
                successDiv.remove();
            }, 3000);
        }


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

      
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }
        });