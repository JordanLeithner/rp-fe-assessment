import React from 'react';  
import '../../scss/styles.css'
import './headernav.css';
import LandSuccess from '../landsuccess/landsuccess.js';
import Reused from '../reused/reused.js';
import WithReddit from '../withreddit/withreddit.js';
import refreshImg from '../../assets/images/refresh.svg'; 


class HeaderNav extends React.Component {  //creating new component called HeaderNav

    handleRefresh = () => {
        this.props.doRefresh();
    };

    filterChange(filterName, isChecked) { 
        this.props.filterChange(filterName, isChecked);
    }

    render() {
        console.log('headerNav', this.props);
        return <div className="checkContainer">
            <div onClick={this.handleRefresh}>
                <img className="refresh" src={refreshImg} alt={"refresh"} />;
            </div>
            <span className="headerItem"> 
                <LandSuccess isChecked = {this.props.filter.success} notifyChange = {(isChecked) => this.filterChange('success', isChecked)} />
            </span>
        
            <span className="headerItem">
                <Reused isChecked = {this.props.filter.reused} notifyChange = {(isChecked) => this.filterChange('reused', isChecked)} />
            </span>
        
            <span className="headerItem">
                <WithReddit isChecked = {this.props.filter.reddit} notifyChange = {(isChecked) => this.filterChange('reddit', isChecked)} />
            </span>
        </div>;
    };
}

export default HeaderNav;  //exporting Nav to anything that imports Nav