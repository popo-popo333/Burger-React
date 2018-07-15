import React, {Component}  from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/BuildControls/Buildcontrols';
import classes from './BurgerBuilder.css';
const ingredientsPrice= {
    cheese : 20, 
    bacon :15,
    salad :10,
    meat :20,
}
let msg= null;
class BurgerBuilder extends Component{

state = {
        ingredients : {
            cheese : 0, 
            bacon :0,
            salad :0,
            meat :0 ,
        },  
        totalPrice: 4,
    }
    
    addIngredientHandler = (type) => {
        msg=null;
        const oldCount=this.state.ingredients[type];
        const newCount= oldCount + 1 ;
        
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = newCount;
        const priceAddition = ingredientsPrice[type];
        const oldp = this.state.totalPrice;
        const updatedPrice = oldp + priceAddition;
        console.log(oldp);
        this.setState(
           {
                ingredients :  updateIngredients,
                totalPrice : updatedPrice,
           }
           
        )
    }
 
    removeIngredientHandler = (type) => {
        console.log('executed');
        const updateIngredients = {
            ...this.state.ingredients
        }
        if( updateIngredients[type] > 0 ){
            const cost = this.state.totalPrice;
            
            const updatedPrice = cost - ingredientsPrice[type];
            const newCount = updateIngredients[type]- 1 ;
            updateIngredients[type] = newCount;
            this.setState(
                    {
                        ingredients: updateIngredients,
                        totalPrice : updatedPrice,
                    }
            )
            msg=null;
        }
        else{
            alert("You have not added "+type);
            this.setState(
                {
                    ingredients: updateIngredients,
                }
        )
        }
    }
     
    render()
    {
        return(
            <Aux>
                
                <Burger ingredients={this.state.ingredients} />
                <div className={classes.TotalPrice}> Total Price: {this.state.totalPrice}</div>
                <Buildcontrols addIng ={this.addIngredientHandler} removeIng={this.removeIngredientHandler}  />
            </Aux>
        );
    }
}

export default BurgerBuilder;