import React, { Component } from "react";
import TITLES from '../data/titles';

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true , rotationDuration: 4000};

    componentDidMount() {
      //  console.log('title has mounted')
        this.fadeTimeout = setTimeout(()=> {
         this.setState({fadeIn: false})  
        }, this.state.rotationDuration/2)
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.fadeTimeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const newTitleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: newTitleIndex , fadeIn: true})
            this.fadeTimeout = setTimeout(()=> {
                this.setState({fadeIn: false})  
               }, this.state.rotationDuration/2)
        }, this.state.rotationDuration);
    }


    render() {
        const {fadeIn, titleIndex} = this.state
        const title = TITLES[titleIndex];
        return (
            <p className={fadeIn ? 'title-fadeIn' : 'title-fadeOut' }>I am {title}</p>
        );
    }
}

export default Title;