import React, {Component} from 'react';
import axios from 'axios';


class Products extends Component {

	state = {
		storeProducts: []
	}

	componentDidMount() {
		//Get products
		axios({
			method: 'get',
			url: 'https://tienda.trucksrepair.cl/wp/wp-json/wc/v3/products',
			auth: {
				username: 'ck_39960bd588efc9e8672456706065627f6e73987e',
				password: 'cs_f7d8b5e96c8f579f48165f595614802ca9714c05'
			}
		})
		.then( response => {
			console.log('Store products:', response.data);
			this.setState({
				storeProducts: response.data
			});
		});
	}


	render() {
		if ( this.state.storeProducts.length > 0 ) {
			const products = this.state.storeProducts.map( product => {
				return (
					<div key={product.id} product={product}>
						<div className="productImage">

							<img src={product.images[0].src} alt={product.images[0].name} width="200" />

						</div>

						<div className="productName">{product.name}</div>

						<div className="productPrice">${product.price}</div>

						<div className="productCategories">{product.categories}</div>

					</div>
				)

			});

			return <div class="container mt-2">
			<h1>sdsdsd</h1><button type="button" class="btn btn-primary">Primary</button>

			{products}

			</div>

			;

		} else {
			return "Loading...";
		}


	}

}

export default Products;




