import React, {Component} from 'react';
import './index.css';

class MyContent extends Component {
    // http://farm{farm}.static.flickr.com/{server}/{id}_{secret}.jpg
    state={
        picList:[]
    }
    render() {

        //
        // let url = 'http://farm' + farm + '.static.flickr.com/' + server + '/' + id + '_' + secret + '.jpg';
        // console.log(this.props.pics);
        this.props.pics.forEach((item) => {
            let url = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';

            this.state.picList.push(

                <img src={url} alt="" />
            )
        })
        return (
            <div id={'bigDiv'}>
                {/*{this.emptyTheContent}*/}

                {this.state.picList}


            </div>
        );

    }

    emptyTheContent() {
        // $("#div").empty();
        document.getElementById('bigDiv').innerHTML = ""
    }
}

export default MyContent;