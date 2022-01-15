import {SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';
import './index.css';
import React, {Component} from 'react';
import axios from "axios";

class MySearchBar extends Component {
    state = {
        value: ''
    };

    componentDidMount() {
        this.autoFocusInst.focus();
    }

    onChange = (value) => {
        this.setState({value});
    };
    clear = () => {
        this.setState({value: ''});
    };

    render() {
        return (<div>

            <SearchBar
                placeholder="please input...."
                ref={ref => this.autoFocusInst = ref}
                name={'searchbar'}
                value={this.state.value}
                onChange={this.onChange}
            />
            <WhiteSpace/>
            <WingBlank>
                <Button
                    onClick={this.handleClick}
                >Search</Button>
            </WingBlank>
        </div>);
    }

    handleClick = () => {

        let message = this.state.value;
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e2\n' +
            '79ce8e361736&format=json&nojsoncallback=1&safe_search=1&text=' +
            message).then(res => {
            // console.log(res.data.photos.photo[0]);

            this.props.getPics(res.data.photos.photo)
            }
        ).catch(error => {
            console.log(error);

        });


    };
}

export default MySearchBar;