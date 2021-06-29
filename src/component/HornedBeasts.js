import React from "react";

class HornedBeasts extends React.Component {

    constructor(props){
        super (props);
        this.state ={
            numberOfClicks:0
        }
    }

    increaseNoOfLike =()=>{
        this.setState({
            numberOfClicks:this.state.numberOfClicks+1
        })
    }



    render() {
        return (
            <div>
                <div>

                    <h2>UniWhal</h2>
                    <img onClick={this.increaseNoOfLike} src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></img>
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                    <p>likes:{this.state.numberOfClicks}</p>

                </div>
                <div>
                    <h2>Rhino Family</h2>
                    <img onClick={this.increaseNoOfLike} src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"></img>
                    <p>Mother (or father) rhino with two babies</p>
                    <p>likes:{this.state.numberOfClicks}</p>


                </div>
                <div>
                    <h2>Unicorn Head</h2>
                    <img onClick={this.increaseNoOfLike} onClick={this.state.numberOfClicks} src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" ></img>
                    <p>Someone wearing a creepy unicorn head mask</p>
                    <p>likes:{this.state.numberOfClicks}</p>


                </div>

            </div>



        )
    }
}


export default HornedBeasts;
