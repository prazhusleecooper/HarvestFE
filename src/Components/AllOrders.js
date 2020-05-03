import React, { Component } from 'react';

import '../Resources/Styling/AllOrders.css';
import phone from "../Resources/Images/phone.png";

class AllOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //     order: [
        //         {
        //             id: 'abxabxabxabx',
        //             orderDate: '01/05/2020',
        //             items: [
        //                 {
        //                     id: 'itemidacx',
        //                     name: 'Apple',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 140,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //                 {
        //                     id: 'itemidacx2',
        //                     name: 'Orange',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 120,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx3',
        //                     name: 'Banana',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 100,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx4',
        //                     name: 'Grapes',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 130,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //             ],
        //             totalPrice: 1000,
        //             finalPrice: 1000,
        //             paymentMode: 'COD',
        //             paymentID: 'abc123',
        //             orderStatus: 'order placed',
        //             userName: 'Suresh',
        //             userMobileNo: '1234567890'
        //         },
        //         {
        //             id: 'abxabxabxab2',
        //             orderDate: '01/05/2020',
        //             items: [
        //                 {
        //                     id: 'itemidacx',
        //                     name: 'Apple',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 140,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //                 {
        //                     id: 'itemidacx2',
        //                     name: 'Orange',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 120,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx3',
        //                     name: 'Banana',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 100,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx4',
        //                     name: 'Grapes',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 130,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //             ],
        //             totalPrice: 1000,
        //             finalPrice: 1000,
        //             paymentMode: 'COD',
        //             paymentID: 'abc123',
        //             orderStatus: 'order placed',
        //             userName: 'Ramesh',
        //             userMobileNo: '1234567890'
        //         },{
        //             id: 'abxabxabxab2',
        //             orderDate: '01/05/2020',
        //             items: [
        //                 {
        //                     id: 'itemidacx',
        //                     name: 'Apple',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 140,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //                 {
        //                     id: 'itemidacx2',
        //                     name: 'Orange',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 120,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx3',
        //                     name: 'Banana',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 100,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx4',
        //                     name: 'Grapes',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 130,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //             ],
        //             totalPrice: 1000,
        //             finalPrice: 1000,
        //             paymentMode: 'COD',
        //             paymentID: 'abc123',
        //             orderStatus: 'order placed',
        //             userName: 'Rajesh',
        //             userMobileNo: '1234567890'
        //         },{
        //             id: 'abxabxabxab2',
        //             orderDate: '01/05/2020',
        //             items: [
        //                 {
        //                     id: 'itemidacx',
        //                     name: 'Apple',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 140,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //                 {
        //                     id: 'itemidacx2',
        //                     name: 'Orange',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 120,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx3',
        //                     name: 'Banana',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 100,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 }, {
        //                     id: 'itemidacx4',
        //                     name: 'Grapes',
        //                     category: 'Fruits',
        //                     priceUnit: 'Kilogram',
        //                     pricePerUnit: 130,
        //                     availability: true,
        //                     quantity: 2,
        //                     seller: []
        //                 },
        //             ],
        //             totalPrice: 1000,
        //             finalPrice: 1000,
        //             paymentMode: 'COD',
        //             paymentID: 'abc123',
        //             orderStatus: 'order placed',
        //             userName: 'Mukesh',
        //             userMobileNo: '1234567890'
        //         },
        //     ],
        order: [],
        allOrdersEmpty: true,
        }
    }

    // Rendering Methods
    // Calculate Order Total
    orderTotal = (orderItem) => {
        let total = 0;
        orderItem.items.map(( cartItem) => {
            total += (cartItem.quantity * cartItem.pricePerUnit);
        });
        return total;
    };

    // Displayed data
    displayedData = () => {
        if(!this.state.allOrdersEmpty) {
            return(
                this.state.order.map((orderItem, index = 0) => {
                    return(
                        <div
                            className='d-flex flex-column align-items-center justify-content-center order-box'
                            key={orderItem.id}
                        >
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
                            { new Intl.DateTimeFormat('en-IN').format(orderItem.orderDate) }
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
                        </div>
                    );
                })
            );
        } else if(this.state.allOrdersEmpty) {
            return(
                <div className='no-orders-msg'>
                    No Orders Available
                </div>
            )
        }
    };

    // Component Life Cycle Methods
    componentDidMount() {
        fetch('http://localhost:1337/allOrders',
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 200) {
                        if(result.allOrders.length === 0) {
                            this.setState({
                                allOrderEmpty: true
                            });
                        }
                        else {
                            this.setState({
                                allOrdersEmpty: false,
                                order: result.allOrders,
                            });
                        }
                    }
                },
                (err) => {
                    console.log('THE ERROR IS:::', err);
                }
            );

    }

    render() {
        return(
            <div className='primary-section'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <span className='all-orders-text'>
                        All Orders
                    </span>
                    <hr className='all-orders-hr' />
                    { this.displayedData() }
                </div>
            </div>
        );
    }
}

export default AllOrders;
