import React, {Component} from 'react'
import "./main.css"
import Header from "../header/header"
import {connect} from "react-redux";
import CenterMode from "../slider/slider";

class Main extends Component {
    state = {
        block2_content: []
    };
    componentDidMount() {
        this.firstButton();
    }

    firstButton = () => {
        const array = [];
        const a = this.props.articles;
        a.map(ar => (
            array.push(ar.title)
        ));
        console.log(array);
        this.setState({
            block2_content: array
        })
    };
    secondButton = () => {
        const array = [];
        const a = this.props.articles;
        a.map(ar => (
            array.push(ar.description)
        ));
        this.setState({
            block2_content: array
        })
    };
    render() {
        const {articles} = this.props;
        const {block2_content} = this.state;
        const firstChild = articles[0];
        return(
            <div className="">
                <Header/>
                <div className="main mt-5 flex-column">
                    <div className="vverh w-100 d-flex">
                        <h4 className="font-weight-bold">Forbes Now</h4>
                        <span className="ml-4 mt-1">Asia Edition</span>
                    </div>
                    <div className="block d-flex mt-4">
                        <div className="block1 d-flex flex-column">
                            <img className="block1_img" src={firstChild.urlToImage} alt="error"/>
                            <a href="/" className="block1_title font-weight-bold">
                                {firstChild.title}
                            </a>
                            <a href="/" className="block1_author text-decoration-none">
                                By <span className="font-weight-bold">{firstChild.author}</span> Forbes Staff
                            </a>
                            <p className="block1_desc">
                                {firstChild.description}
                            </p>
                            <div className="block1-2 d-flex">
                                <div className="block1-2-1 w-50">
                                    <img className="block1-2_img" src={articles[2].urlToImage} alt=""/>
                                    <p className="font-weight-bold">{articles[2].title}</p>
                                    <p>{articles[2].description}</p>
                                </div>
                                <div className="block1-2-2 w-50">
                                    <img className="block1-2_img" src={articles[3].urlToImage} alt=""/>
                                    <p className="font-weight-bold">{articles[3].title}</p>
                                    <p>{articles[3].description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="block2 d-flex flex-column">
                            <div className="block2_buttons">
                                <button onClick={() => this.firstButton()}>Popular</button>
                                <button onClick={() => this.secondButton()}>Editor's Picks</button>
                            </div>
                            <div className="">
                                {block2_content.slice(0, 6).map((b, id) => (
                                    <div className="block2_content" key={id}>
                                        {b}
                                        <p href="/" className="block1_author text-decoration-none mt-3">
                                            By <span className="font-weight-bold">{b.author}</span> Forbes Staff
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="quote">
                        <p className="font-weight-bold">“The bigger you are, the better your opportunity is going to be.”</p>
                        <p><span className="font-weight-bold">Wes Golladay,</span> Analyst at RBC</p>
                    </div>
                    <div className="socials d-flex align-items-stretch w-100">
                        <span className="socials-item">FORBES SOCIAL MEDIA</span>
                        <span style={{fontSize: "22px"}} className="socials-item font-weight-bold">Feeding your feed with success.</span>
                        <div className="socials-item-1 d-flex">
                            <a href="https://www.facebook.com/"><img src="https://image.flaticon.com/icons/png/512/59/59439.png"/></a>
                            <a href="https://www.twitter.com/"><img src="https://cdn.onlinewebfonts.com/svg/img_323492.png"/></a>
                            <a href="https://www.instagram.com/"><img src="https://cdn2.iconfinder.com/data/icons/harmonicons-04/64/instagram-512.png"/></a>
                            <a href="https://www.in.com/"><img src="https://www.iconninja.com/files/820/89/92/black-linkedin-icon.png"/></a>
                            <a href="https://www.youtube.com/"><img src="https://freeiconshop.com/wp-content/uploads/edd/youtube-solid.png"/></a>
                        </div>
                    </div>
                    <CenterMode/>
                    <div style={{marginTop: '100px'}}>a</div>
                </div>
            </div>

        );
    }

}
const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateToProps)(Main);
