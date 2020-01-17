import React, { Component } from "react";
import "./slider.css"
import Slider from "react-slick";
import {connect} from "react-redux";

class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
        };
        const {articles} = this.props;
        return (
            <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                    {articles.map(a => (
                        <div>
                            <img className="images" src={a.urlToImage} alt={""}/>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};
export default connect(mapStateToProps)(CenterMode);
