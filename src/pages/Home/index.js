import React, {Component} from 'react';
import MySearchBar from "../../components/SearchBar";
import MyContent from "../../components/Content";

class HomePage extends Component {
    state={
        pics: []
    }
    getPics = (pics) => {
       this.setState({
           pics: pics
       })


    };
    render() {
        return (
            <div>
                <MySearchBar getPics={this.getPics}></MySearchBar>
                <MyContent pics={this.state.pics}></MyContent>
                {/*{this.state.pics.id}*/}
            </div>
        );
    }
}

export default HomePage;