export default function Products() {
    return (
        <div className="products">
            <h2>Products</h2>
            <div className="product-list">
                <div className="product-item">
                    <img src="https://via.placeholder.com/150" alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>Description of Product 1</p>
                    <p>$10.00</p>
                </div>
                <div className="product-item">
                    <img src="https://via.placeholder.com/150" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Description of Product 2</p>
                    <p>$20.00</p>
                </div>
                {/* Add more products as needed */}
            </div>
        </div>
    )
}