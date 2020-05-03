import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

import '../Resources/Styling/ManageProducts.css';

class ManageProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            catList: [],
            modal: false,
            editName: '',
            editPriceUnit: '',
            editPricePerUnit: 0,
        };
    };

    // Redering Methods


    // Non-Rendering Methods
    // Generating the categories
    generateCategories = () => {
        console.log('THE STATE PROD from gen cate::', this.state.products);
        let catArray = [];
        this.state.products.map((item) => {
            if(!catArray.includes(item.category)) {
                catArray.push(item.category);
            }
        });
        this.setState({
            catList: catArray
        }, () => {
            console.log('uipdated cat arr;:', this.state.catList);
        });
    };

    // Toggling the Bootstrap modal
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal,
            editName: '',
            editPriceUnit: '',
            editPricePerUnit: 0,
        });
    };

    // Toggling the Bootstrap modal - When Edit is pressed
    toggleModalEdit = (product) => {
        this.setState({
            editName: product.name,
            editPriceUnit: product.priceUnit,
            editPricePerUnit: product.pricePerUnit,
            modal: !this.state.modal,
        });
    };

    // Handle Modal Name input change
    handleNameChange = (event) => {
        this.setState({
            editName: event.target.value,
        })
    };

    // Handle Modal Price Unit input change
    handlePriceUnitChange = (event) => {
        this.setState({
            editPriceUnit: event.target.value,
        })
    };

    // Handle Modal Name input change
    handlePricePerUnitChange = (event) => {
        this.setState({
            editPricePerUnit: event.target.value,
        })
    };

    // Component Lifecycle Methods
    // Component-Did-Mount method
    componentDidMount() {
        this.setState({
            products: [
                {
                    id: '1',
                    name: 'Apple',
                    category: 'Fruits',
                    priceUnit: 'Kilogram',
                    pricePerUnit: 140,
                    availability: true,
                    seller: []
                },
                {
                    id: '2',
                    name: 'Orange',
                    category: 'Fruits',
                    priceUnit: 'Kilogram',
                    pricePerUnit: 120,
                    availability: true,
                    seller: []
                }, {
                    id: '3',
                    name: 'Onion',
                    category: 'Vegetables',
                    priceUnit: 'Kilogram',
                    pricePerUnit: 100,
                    availability: true,
                    seller: []
                },
            ]
        }, () => this.generateCategories());
    }

    // render() method
    render() {
        return(
            <div className='mp-primary-section'>
                <MDBContainer>
                    <MDBModal isOpen={ this.state.modal } toggle={() => this.toggleModal()}>
                        <MDBModalHeader
                            toggle={() =>this.toggleModal()}
                            className='modal-header-text'
                        >
                            Edit Product
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='field-section'>
                                    <span className='field-text'>Name:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.editName }
                                    placeholder='Product Name'
                                    className='modal-text-input'
                                    onChange={(event) => this.handleNameChange(event)}
                                />
                                <div className='field-section'>
                                    <span className='field-text'>Price Unit:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.editPriceUnit }
                                    placeholder='Product Price unit'
                                    className='modal-text-input'
                                    onChange={(event) => this.handlePriceUnitChange(event)}
                                />
                                <div className='field-section'>
                                    <span className='field-text'>Price per Unit:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.editPricePerUnit }
                                    placeholder='Product Price per Unit'
                                    className='modal-text-input'
                                    onChange={(event) => this.handlePricePerUnitChange(event)}
                                />
                                <button
                                    className='modal-edit-btn'
                                >
                                    Edit Product
                                </button>
                                <button
                                    className='modal-delete-btn'
                                >
                                    Delete Product
                                </button>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
                <div className='d-flex flex-column align-items-center justify-content-center primary-area'>
                    {
                        this.state.catList.map((categoryItem) => {
                            return (
                                <div className='product-section'>
                                    <span className='category-title-text'>
                                        { categoryItem }:
                                    </span>
                                    <table className='products-table'>
                                        <tr>
                                            <th className='t-name-column'>Name</th>
                                            <th className='t-priceUnit-column'>Price Unit</th>
                                            <th className='t-pricePerUnit-column'>Price Per Unit</th>
                                            <th className='t-options-column'>Options</th>
                                        </tr>
                                    {
                                        this.state.products.map((product) => {
                                            if(product.category === categoryItem) {
                                                return(
                                                    <tr>
                                                        <td className='t-name-column'>{ product.name }</td>
                                                        <td className='t-priceUnit-column'>{ product.priceUnit }</td>
                                                        <td className='t-pricePerUnit-column'>{ product.pricePerUnit}</td>
                                                        <td
                                                            className='t-options-column-edit'
                                                            onClick={() => this.toggleModalEdit(product)}
                                                        >
                                                            Edit
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })
                                    }
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ManageProducts;
