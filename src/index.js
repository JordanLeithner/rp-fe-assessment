import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import App from './app/app'
import '../src/scss/styles.css';



/*Creates variables for each column data type (rocket name, rocket type, etc.), and searches through api_info.js to find each item*/

/*const badge = '<img class="table-img badge" src="../src/assets/images/badge.png" alt="Badge One" />';*/

/*const rocketName = 'add the rocket_name here';*/
const rocketName = React.createClass({
  render: function() {
    var rocketNameInfo = data.content.rocketNameInfo.map(function(rni){
      return ({rni.rocket_name});
    });

    return ({rocketNameInfo})
  }
}); 
)

/*const rocketType = 'add the rocket_type here';*/
const rocketType = React.createClass({
  render: function() {
    var rocketTypeInfo = data.content.rocketTypeInfo.map(function(rti){
      return ({rti.rocket_type});
    });

    return ({rocketTypeInfo})
  }
}); 
)

/*const launchDate = 'add the launch_date_utc here';*/
const launchDate = React.createClass({
  render: function() {
    var launchDateInfo = data.content.launchDateInfo.map(function(ldi){
      return ({ldi.launch_date_utc});
    });

    return ({launchDateInfo})
  }
}); 
)

/*const launchDetails = 'add the launch_failure_details here';*/
const launchDetails = React.createClass({
  render: function() {
    var launchDetailsInfo = data.content.launchDetailsInfo.map(function(ldti){
      return ({ldti.launch_failure_details});
    });

    return ({launchDetailsInfo})
  }
}); 
)

/*const flightNum = 'add the flight_number here';*/
const flightNum = React.createClass({
  render: function() {
    var flightNumInfo = data.content.flightNumInfo.map(function(fni){
      return ({fni.flight_number});
    });

    return ({flightNumInfo})
  }
}); 
)

/*const article = '<img class="table-img article" src="../src/assets/images/link.svg" alt="Article Link" />';


/*Shared classes for styling*/
const smallClass = 'small';
const medClass = 'med';
const largeClass = 'large';


/*Creates functions for each column type to output information from variables created above*/
function Badge () {
    return (
        <div className={smallClass}>{ badge }</div>
    );
}
function RocketName () {
    return (
        <div className={medClass}>{ rocketName }</div>
    );
}
function RocketType () {
    return (
        <div className={medClass}>{ rocketType }</div>
    );
}
function LaunchDate () {
    return (
        <div className={medClass}>{ launchDate }</div>
    );
}
function LaunchDetails () {
    return (
        <div className={largeClass}>{ launchDetails }</div>
    );
}
function FlightNum () {
    return (
        <div className={smallClass}>{ flightNum }</div>
    );
}
function Article () {
    return (
        <div className={smallClass}>{ article }</div>
    );
}


/*Pulls together all functions from above to compile data into each row*/
const spacexRow = (
  <div className="table-row">
    <Badge />
    <RocketName />
    <RocketType />
    <LaunchDate />
    <LaunchDetails />
    <FlightNum />
    <Article />
  </div>
);

/*Prints out each row*/
ReactDOM.render(
  spacexRow,
  document.getElementById('spacex-row')
);
