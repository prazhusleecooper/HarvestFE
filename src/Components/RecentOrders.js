import React, { Component } from 'react';

import '../Resources/Styling/RecentOrders.css';
import phone from '../Resources/Images/phone.png';

class RecentOrders extends Component {
    constructor(props) {
        super(props);
        console.log('BEFORE STATE');
        this.state = {
            recentOrders: true,
            consolidatedOrders: false,
            order: [],
            cartegories: [],
            products: [],
        };
        console.log('AFTER STATE');
    };

    // Redering Methods
    // Recent Orders Button Clicked
    recentOrdersBtn = () => {
        this.setState({
            recentOrders: true,
            consolidatedOrders: false,
        });
    };

    // Consolidated Orders Button Clicked
    consolidatedOrdersBtn = () => {
        this.setState({
            recentOrders: false,
            consolidatedOrders: true,
        });
    };

    // Displayed Data
    displayedData = () => {
        if(this.state.recentOrders && !this.state.consolidatedOrders) {
            return(this.recentOrders());
        } else if(!this.state.recentOrders && this.state.consolidatedOrders) {
            return (this.consolidatedOrders());
        }
    };

    // Calculate Order Total
    orderTotal = (orderItem) => {
        let total = 0;
        orderItem.items.map(( cartItem) => {
            total += (cartItem.quantity * cartItem.pricePerUnit);
        });
        return total;
    };

    // Render Recent Orders
    recentOrders = () => {
        return(
            this.state.order.map((orderItem) => {
                return(
                    <div className='d-flex flex-column align-items-center justify-content-center order-box'>
                        <div className='d-flex flex-row align-items-center justify-content-between title-section'>
                            <span className='user-name'>
                                { orderItem.userName }
                            </span>
                            <div className='user-phone-section'>
                                <img
                                    src={phone}
                                    className='phone-img'
                                />
                                <span className='user-phone'>
                                    : { orderItem.userMobileNo }
                                </span>
                            </div>
                        </div>
                        <div className='d-flex flex-row align-items-center justify-content-end date-section'>
                            <span className='order-date'>
                                { orderItem.orderDate }
                            </span>
                        </div>
                        <div className='order-list-section'>
                            {
                                orderItem.items.map(( cartItem ) => {
                                    return(
                                        <div className='order-item-section'>
                                            <span className='order-item'>
                                                { cartItem.name } - { cartItem.quantity } - ₹{ cartItem.pricePerUnit * cartItem.quantity }
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <div className='order-total-section'>
                                <span className='order-total-text'>
                                    TOTAL: ₹{ this.orderTotal(orderItem) }
                                </span>
                            </div>
                        </div>
                        <div className='btn-section'>
                            <button className='mark-as-delivered-btn'>
                                Mark as Delivered
                            </button>
                        </div>
                    </div>
                );
            })
        );
    };

    // Render Consolidated orders
    consolidatedOrders = () => {
        return(
            <div>
                {
                    this.state.categories.map((category) => {
                        return(
                            <div className='primary-area '>
                                <div className='category-text-section'>
                                    <span className='category-text'>
                                        {category}:
                                    </span>
                                </div>
                                <table className='items-table'>
                                    <tr>
                                        <th className='name-column'>Name</th>
                                        <th className='qty-column'>Total Quantity</th>
                                        <th className='price-column'>Total Price (₹)</th>
                                    </tr>
                                    {
                                        this.state.products.map((product) => {
                                            if(product.category === category) {
                                                return(
                                                    <tr>
                                                        <td className='name-column'>{product.name}</td>
                                                        <td className='qty-column'>{product.quantity}</td>
                                                        <td className='price-column'>{product.quantity * product.pricePerUnit}</td>
                                                    </tr>
                                                );
                                            }
                                        })
                                    }
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        )
    };

    // Render Total Price
    totalPrice = () => {
        let totalPrice = 0;
        this.state.products.map((product) => {
            totalPrice += (product.quantity * product.pricePerUnit);
        });
        if(this.state.consolidatedOrders) {
            return(
                <div className='total-price-section'>
                <span className='total-price-text'>
                    Total Price:
                    <span className='total-price-amount'>
                        ₹{totalPrice}
                    </span>
                </span>
                </div>
            );
        }
    };

    // Component Lifecycle Methods
    // Component-Did-Mount method
    componentDidMount() {
        this.setState({
            order: [
                {
                    id: 'abxabxabxabx',
                    orderDate: '01/05/2020',
                    items: [
                        {
                            id: 'itemidacx',
                            name: 'Apple',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 140,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                        {
                            id: 'itemidacx2',
                            name: 'Orange',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 120,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx3',
                            name: 'Banana',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 100,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx4',
                            name: 'Grapes',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 130,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                    ],
                    totalPrice: 1000,
                    finalPrice: 1000,
                    paymentMode: 'COD',
                    paymentID: 'abc123',
                    orderStatus: 'order placed',
                    userName: 'Suresh',
                    userMobileNo: '1234567890'
                },
                {
                    id: 'abxabxabxab2',
                    orderDate: '01/05/2020',
                    items: [
                        {
                            id: 'itemidacx',
                            name: 'Apple',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 140,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                        {
                            id: 'itemidacx2',
                            name: 'Orange',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 120,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx3',
                            name: 'Banana',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 100,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx4',
                            name: 'Grapes',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 130,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                    ],
                    totalPrice: 1000,
                    finalPrice: 1000,
                    paymentMode: 'COD',
                    paymentID: 'abc123',
                    orderStatus: 'order placed',
                    userName: 'Ramesh',
                    userMobileNo: '1234567890'
                },
                {
                    id: 'abxabxabxab2',
                    orderDate: '01/05/2020',
                    items: [
                        {
                            id: 'itemidacx',
                            name: 'Apple',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 140,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                        {
                            id: 'itemidacx2',
                            name: 'Orange',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 120,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx3',
                            name: 'Banana',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 100,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx4',
                            name: 'Grapes',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 130,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                    ],
                    totalPrice: 1000,
                    finalPrice: 1000,
                    paymentMode: 'COD',
                    paymentID: 'abc123',
                    orderStatus: 'order placed',
                    userName: 'Rajesh',
                    userMobileNo: '1234567890'
                },
                {
                    id: 'abxabxabxab2',
                    orderDate: '01/05/2020',
                    items: [
                        {
                            id: 'itemidacx',
                            name: 'Apple',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 140,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                        {
                            id: 'itemidacx2',
                            name: 'Orange',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 120,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx3',
                            name: 'Banana',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 100,
                            availability: true,
                            quantity: 2,
                            seller: []
                        }, {
                            id: 'itemidacx4',
                            name: 'Grapes',
                            category: 'Fruits',
                            priceUnit: 'Kilogram',
                            pricePerUnit: 130,
                            availability: true,
                            quantity: 2,
                            seller: []
                        },
                    ],
                    totalPrice: 1000,
                    finalPrice: 1000,
                    paymentMode: 'COD',
                    paymentID: 'abc123',
                    orderStatus: 'order placed',
                    userName: 'Mukesh',
                    userMobileNo: '1234567890'
                },
            ],
        });
        let order = [
            {
                id: 'abxabxabxabx',
                orderDate: '01/05/2020',
                items: [
                    {
                        id: '1',
                        name: 'Apple',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 140,
                        availability: true,
                        quantity: 2,
                        seller: []
                    },
                    {
                        id: '2',
                        name: 'Orange',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 120,
                        availability: true,
                        quantity: 2,
                        seller: []
                    }, {
                        id: '3',
                        name: 'Banana',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 100,
                        availability: true,
                        quantity: 2,
                        seller: []
                    }, {
                        id: '4',
                        name: 'Grapes',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 130,
                        availability: true,
                        quantity: 2,
                        seller: []
                    },
                ],
                totalPrice: 1000,
                finalPrice: 1000,
                paymentMode: 'COD',
                paymentID: 'abc123',
                orderStatus: 'order placed',
                userName: 'Suresh',
                userMobileNo: '1234567890'
            },
            {
                id: 'abxabxabxabx',
                orderDate: '01/05/2020',
                items: [
                    {
                        id: '1',
                        name: 'Apple',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 140,
                        availability: true,
                        quantity: 2,
                        seller: []
                    },
                    {
                        id: '2',
                        name: 'Orange',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 120,
                        availability: true,
                        quantity: 2,
                        seller: []
                    }, {
                        id: '3',
                        name: 'Banana',
                        category: 'Fruits',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 100,
                        availability: true,
                        quantity: 2,
                        seller: []
                    }, {
                        id: '5',
                        name: 'Rice',
                        category: 'Millets',
                        priceUnit: 'Kilogram',
                        pricePerUnit: 130,
                        availability: true,
                        quantity: 2,
                        seller: []
                    },
                ],
                totalPrice: 1000,
                finalPrice: 1000,
                paymentMode: 'COD',
                paymentID: 'abc123',
                orderStatus: 'order placed',
                userName: 'Suresh',
                userMobileNo: '1234567890'
            },

        ];
        let categoriesArray = [];
        let productsArray = [];
        order.map((orderData) => {
            orderData.items.map((item) => {
                if(!categoriesArray.includes(item.category)) {
                    categoriesArray.push(item.category);
                }
                productsArray.push(item);
            });
        });
        let properProducts = [];
        productsArray.map((product) => {
            if(properProducts.length === 0){
                properProducts.push(product);
            } else {
                let flag = false;
                properProducts.map((properProduct) => {
                    if(product.id === properProduct.id) {
                        flag = true;
                        properProduct.quantity += product.quantity;
                    }
                });
                if(flag === false) {
                    properProducts.push(product);
                }
            }
        });
        this.setState({
            categories: categoriesArray,
            products: properProducts,
        })
    }

    // render() method
    render() {
        return(
            <div className='primary-section'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-row align-items-center justify-content-center selection-section'>
                        <button
                            className={(this.state.recentOrders ? 'active-btn' : 'inactive-btn' )}
                            onClick={() => this.recentOrdersBtn()}
                        >
                            Recent Orders
                        </button>
                        <span className='selection-seperator'>l</span>
                        <button
                            className={(this.state.consolidatedOrders ? 'active-btn' : 'inactive-btn' )}
                            onClick={() => this.consolidatedOrdersBtn()}
                        >
                            Consolidated Orders
                        </button>
                    </div>
                    { this.displayedData() }
                    { this.totalPrice() }
                </div>
            </div>
        );
    }
}

export default RecentOrders;
