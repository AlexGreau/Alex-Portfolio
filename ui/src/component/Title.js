import React, { Component } from "react";
import TITLES from '../data/titles';

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
      //  console.log('title has mounted')

        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const newTitleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: newTitleIndex })
        }, 4000);
    }


    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        );
    }
}

export default Title;