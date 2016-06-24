import React from 'react';
import ReactDom from 'react-dom';
import searchBar from './components/searchBar';

//AIzaSyAFHryn_-SnxLhXJa0GRGze_vTwqD87kZ8
const API_KEY = 'AIzaSyAFHryn_-SnxLhXJa0GRGze_vTwqD87kZ8';
/*
create a new componenet and this component should
produce some html.
*/
const App = () => {
  return (<div>
    <searchBar />
          </div>
 );
}
//Take this component and put it on the page in the dome
ReactDom.render(<App />, document.querySelector('.container'));
