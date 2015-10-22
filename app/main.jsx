"use strict";
import 'style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let initialState = JSON.parse(document.getElementById('initialState').innerHTML);
let recipeTitleArray = []
initialState.forEach(function(item){
	recipeTitleArray=item.title;
});

//var recipes = {{recipes}}

// <div class='row recipe-list'>

// 		<a>
// 		<div class='col-sm-4'>
// 			<div class='well'>
// 				<h3>Recipe Title</h3>
// 				<ul class='list-unstyled'>
// 					<li>ingredient</li>
// 					<li>another ingredient</li>
// 					<li>more ingredients</li>
// 					<li>(maybe a little advice)</li>
// 				</ul>

// 			</div>
// 		</div>
// 		</a>


var RecipeTitle = React.createClass({
	render: function(){
		return (<h3>{this.props.title}</h3>)
	}
});

var RecipeIndIng = React.createClass({
	render: function(){
		return <li>{this.props.indIng}</li>
	}
})

var RecipeIngredients = React.createClass({
	render: function(){
		let indIng = [];
		
		this.props.ingredients.forEach(function(ing){
			indIng.push(<RecipeIndIng indIng={ing} key={ing} />);
		});

		return <ul>{indIng}</ul>
	}
})

var RecipeList = React.createClass({
	thing:function(){
		let thing = this.state.recipes;

		thing.push({"title":"UPDATED","ingredients":["so","much","stuff"],"id":"WHOOO"})
		this.setState({
			recipes: thing
		});
	},

	getInitialState: function(){
		
		return {
			recipes: initialState
		}
	},
	
	render: function(){
		let recipesArray = [];
		
		this.state.recipes.forEach(function(recipe){
			recipesArray.push(
				<div className='col-sm-4'>
					<div className='well'>
						<RecipeTitle title={recipe.title} key={recipe.id} />

						<RecipeIngredients ingredients={recipe.ingredients} key={recipe.title} />
					</div>
				</div>
			);
		})
		return (
		<div className='recipe-list'>
			<div className='col-md-6 col-md-offset-3'>
				{recipesArray}
			<button onClick={this.thing}>Good!</button>
			</div>
		</div>
		);
	}
})










var TextForm = React.createClass({
	render: function(){
		return (
			<form action='/textme' method='post'>
				<textarea className="form-control grocery-list" rows="10"></textarea>
				<button type='submit' className='btn btn-default btn-block'>Text me!</button>
			</form>
		);
	}
});

var TwilioForm = React.createClass({
	render: function(){
		return (
			<div id='twilioForm' className='row'>
				<div className='col-md-6 col-md-offset-3'>
					<div className='well'> 
						<h3>Grocery List</h3>
						<div className='form-group'>
							<TextForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
})

var Profile = React.createClass({
	render: function(){
		return (
			<span>
			<TwilioForm />
			<RecipeList recipeList={initialState}/>
			</span>
		);
	}
});

window.addEventListener('load', function(e){
	if (window.location.pathname === '/profile')
		ReactDOM.render(<Profile />, document.getElementById('container'))
});