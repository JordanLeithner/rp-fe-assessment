import React from 'react'; 
import '../../scss/styles.css'
import './launchentry.css';
import badgeImage from '../../assets/images/badge.png';
import articleImage from '../../assets/images/link.svg';
import classnames from 'classnames';

class LaunchEntry extends React.Component {  //creating new component called LaunchEntry
    shouldBeVisible() {
        const success = this.props.entry.rocket.first_stage.cores[0].land_success || false;  //must specify index of cores because its an array
        if (success !== this.props.filter.success) {
            return false;
        }

        const reused = this.props.entry.rocket.first_stage.cores[0].reused || false;  //must specify index of cores because its an array
        if (reused !== this.props.filter.reused) {
            return false;
        }

        const reddit = this.props.entry.links.reddit_launch !== null;
        if (reddit !== this.props.filter.reddit) {
            return false;
        }

        return true; 
    };
    
    render() {
        console.log('hello I am launchEntry', {entry: this.props.entry});
        return <div className={classnames('tableRow', { 'hiddenRow' : !this.shouldBeVisible() })}>
            <span className="small"><img className="tableImg badge" src={badgeImage} alt="Badge One" /></span>
            <span className="med">{this.props.entry.rocket.rocket_name}</span>
            <span className="med">{this.props.entry.rocket.rocket_type}</span>
            <span className="med">{this.props.entry.launch_date_utc}</span>
            <span className="large">{this.props.entry.details}</span>
            <span className="small">{this.props.entry.flight_number}</span>
            <span className="small"><a href={this.props.entry.links.article_link}><img className="tableImg article" src={articleImage} alt="Article Link" /></a></span>
        </div>;
    };
}

export default LaunchEntry;  //exporting LaunchEntry to anything that imports LaunchEntry

//<div><pre>{JSON.stringify(this.props.entry, null, 2)}</pre></div> -> debugs api stuff
//console.log('hello I am launchEntry', this.props.entry); comes after render