import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

import '../Resources/Styling/ManageProducts.css';

let _ = require('lodash');

class ManageProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupedProducts: {},
            categories: [],
            products: [],
            catList: [],
            modal: false,
            addProductModal: false,
            editId: '',
            editName: '',
            editPriceUnit: '',
            editPricePerUnit: 0,
            addName: '',
            addCategory: '',
            addPriceUnit: '',
            addPricePerUnit: 0,
            productsEmpty: true,
        };
    };

    // Redering Methods
    // Edit Product Method
    editProduct = () => {
        fetch('http://localhost:1337/editProduct', {
            method: 'PATCH',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.editId,
                name: this.state.editName,
                priceUnit: this.state.editPriceUnit,
                pricePerUnit: this.state.editPricePerUnit
            })
        })
                .then(res => res.json())
                .then(
                    (result) => {
                        if(result.status === 200) {
                            this.toggleModal();
                            this.componentDidMount();
                        }
                    },
                    (error) => {
                        console.log('ERROR editing::', error)
                    }
                );
    };

    // Delete Product Method
    deleteProduct = () => {
        fetch('http://localhost:1337/deleteProduct', {
            method: 'DELETE',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.editId,
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 200) {
                        this.toggleModal();
                        this.componentDidMount();
                    }
                },
                (error) => {
                    console.log('ERROR deleting::', error)
                }
            );
    };

    // Add Product Method
    addProduct = () => {
        console.log('FETCH CALL');
        fetch('http://localhost:1337/createProduct', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.addName,
                category: this.state.addCategory,
                priceUnit: this.state.addPriceUnit,
                pricePerUnit: this.state.addPricePerUnit,
                sellers: []
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 200) {
                        this.toggleAddModal();
                        this.componentDidMount();
                    }
                },
                (error) => {
                    console.log('ERROR deleting::', error)
                }
            );
    };

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

    // Toggling the Bootstrap modal - Add Product Modal
    toggleAddModal = () => {
        this.setState({
            addProductModal: !this.state.addProductModal,
        });
    };

    // Toggling the Bootstrap modal - Edit Product Modal
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
            editId: product.id,
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

    // Handle Add Modal Name input change
    handleAddNameChange = (event) => {
        this.setState({
            addName: event.target.value,
        })
    };

    // Handle Add Modal Category input change
    handleAddCategoryChange = (event) => {
        this.setState({
            addCategory: event.target.value,
        })
    };

    // Handle Add Modal Price Unit input change
    handleAddPriceUnitChange = (event) => {
        this.setState({
            addPriceUnit: event.target.value,
        })
    };

    // Handle Add Modal Name input change
    handleAddPricePerUnitChange = (event) => {
        this.setState({
            addPricePerUnit: event.target.value,
        })
    };

    // Component Lifecycle Methods
    // Component-Did-Mount method
    componentDidMount() {
        // this.setState({
        //     products: [
        //         {
        //             id: '1',
        //             name: 'Apple',
        //             category: 'Fruits',
        //             priceUnit: 'Kilogram',
        //             pricePerUnit: 140,
        //             availability: true,
        //             seller: []
        //         },
        //         {
        //             id: '2',
        //             name: 'Orange',
        //             category: 'Fruits',
        //             priceUnit: 'Kilogram',
        //             pricePerUnit: 120,
        //             availability: true,
        //             seller: []
        //         }, {
        //             id: '3',
        //             name: 'Onion',
        //             category: 'Vegetables',
        //             priceUnit: 'Kilogram',
        //             pricePerUnit: 100,
        //             availability: true,
        //             seller: []
        //         },
        //     ]
        // }, () => this.generateCategories());
        fetch('http://localhost:1337/allProducts',{
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.status === 200) {
                        if(result.allProducts.length !== 0) {
                            let groupedProducts = _.groupBy(result.allProducts, 'category');
                            this.setState({
                                productsEmpty: false,
                                groupedProducts: groupedProducts,
                            });
                        } else {
                            this.setState({
                                productsEmpty: true,
                                groupedProducts: result,
                            });
                        }
                    }
                },
                (error) => {
                    console.log('ERROR FETCHING PRODUCTS::', error);
                }
            )
    }

    // render() method
    render() {
        return(
            <div className='mp-primary-section'>
                {/* Edit Product Modal */}
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
                                    onClick={() => this.editProduct()}
                                >
                                    Edit Product
                                </button>
                                <button
                                    className='modal-delete-btn'
                                    onClick={() => this.deleteProduct()}
                                >
                                    Delete Product
                                </button>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
                {/* Add Product Modal */}
                <MDBContainer>
                    <MDBModal isOpen={ this.state.addProductModal } toggle={() => this.toggleAddModal()}>
                        <MDBModalHeader
                            toggle={() =>this.toggleAddModal()}
                            className='modal-header-text'
                        >
                            Add Product
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <div className='field-section'>
                                    <span className='field-text'>Name:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.addName }
                                    placeholder='Product Name'
                                    className='modal-text-input'
                                    onChange={(event) => this.handleAddNameChange(event)}
                                />
                                <div className='field-section'>
                                    <span className='field-text'>Category:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.addCategory }
                                    placeholder='Product Category'
                                    className='modal-text-input'
                                    onChange={(event) => this.handleAddCategoryChange(event)}
                                />
                                <div className='field-section'>
                                    <span className='field-text'>Price Unit:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.addPriceUnit }
                                    placeholder='Product Price unit'
                                    className='modal-text-input'
                                    onChange={(event) => this.handleAddPriceUnitChange(event)}
                                />
                                <div className='field-section'>
                                    <span className='field-text'>Price per Unit:</span>
                                </div>
                                <input
                                    type='text'
                                    value={ this.state.addPricePerUnit }
                                    placeholder='Product Price per Unit'
                                    className='modal-text-input'
                                    onChange={(event) => this.handleAddPricePerUnitChange(event)}
                                />
                                <button
                                    className='modal-edit-btn'
                                    onClick={() => this.addProduct()}
                                >
                                    Add Product
                                </button>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>
                <div className='d-flex flex-column align-items-center justify-content-center primary-area'>
                    <button
                        className='add-product-btn'
                        onClick={() => this.toggleAddModal()}
                    >
                        Add Product
                    </button>
                    {
                        this.state.productsEmpty &&
                        <div className='no-products-msg'>
                            No Products Available
                        </div>
                    }
                    {
                        !this.state.productsEmpty &&
                        Object.keys(this.state.groupedProducts).map((key) => {
                            return(
                                <div className='product-section'>
                                    <span className='category-title-text'>
                                        { key }:
                                    </span>
                                    <table className='products-table'>
                                        <tr>
                                            <th className='t-name-column'>Name</th>
                                            <th className='t-priceUnit-column'>Price Unit</th>
                                            <th className='t-pricePerUnit-column'>Price Per Unit</th>
                                            <th className='t-options-column'>Options</th>
                                        </tr>
                                        {
                                            this.state.groupedProducts[key].map((product) => {
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
                                            })
                                        }
                                    </table>
                                </div>
                            )
                        })

                        // this.state.catList.map((categoryItem) => {
                        //     return (
                        //         <div className='product-section'>
                        //             <span className='category-title-text'>
                        //                 { categoryItem }:
                        //             </span>
                        //             <table className='products-table'>
                        //                 <tr>
                        //                     <th className='t-name-column'>Name</th>
                        //                     <th className='t-priceUnit-column'>Price Unit</th>
                        //                     <th className='t-pricePerUnit-column'>Price Per Unit</th>
                        //                     <th className='t-options-column'>Options</th>
                        //                 </tr>
                        //             {
                        //                 this.state.products.map((product) => {
                        //                     if(product.category === categoryItem) {
                        //                         return(
                        //                             <tr>
                        //                                 <td className='t-name-column'>{ product.name }</td>
                        //                                 <td className='t-priceUnit-column'>{ product.priceUnit }</td>
                        //                                 <td className='t-pricePerUnit-column'>{ product.pricePerUnit}</td>
                        //                                 <td
                        //                                     className='t-options-column-edit'
                        //                                     onClick={() => this.toggleModalEdit(product)}
                        //                                 >
                        //                                     Edit
                        //                                 </td>
                        //                             </tr>
                        //                         )
                        //                     }
                        //                 })
                        //             }
                        //             </table>
                        //         </div>
                        //     )
                        // })
                    }
                </div>
            </div>
        );
    }
}

export default ManageProducts;
