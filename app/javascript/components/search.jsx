import React from 'react'
import axios from 'axios';

export default class Search extends React.Component {

    getProducts(){

        const url = 'http://127.0.0.1:3000/products.json';

        axios.get(url)
          .then((response) => {

            const data = response.data
            console.log(data)

            this.props.allProductsLifter(data)

          }).catch((error)=>{
            console.log(error);
          })
      }

    selectProduct(index){

        const productURL = "products/"+index+".json"

        axios.get(productURL)
          .then((response) => {

            const data = response.data
            console.log("data", data)

            this.props.singleProductLifter(data)

          }).catch((error)=>{
            console.log(error);
          })
      }

    render(){

        const allProducts = this.props.products.map((product, index)=>{

            return <a className="btn" onClick={(e)=>{this.selectProduct(index+1)}} key={index}>{product.name}</a>

        })

        return(
            <div>
                <button onClick={()=>{this.getProducts()}}>Get all Products</button>
                {allProducts}
            </div>
        )
    }
}