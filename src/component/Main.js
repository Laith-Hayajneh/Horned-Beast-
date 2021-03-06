import React from 'react';
import HornedBeasts from './HornedBeasts';
import ArrayPhoto from "./photoArray.json";
// import Form from 'react-bootstrap/Form'
import  "./App.css"
import FormList from './List';




class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0,
            RenderedHorne : ArrayPhoto,
        };
    }

    Filter=(event)=>{
        let value =event.target.value;
        let filteredArray =[]
        filteredArray = ArrayPhoto.filter(element=>{
            if(element.horns == value){return true}
        })


        this.setState({
            RenderedHorne : filteredArray
        })

        if (filteredArray.length == 0){
            this.setState({
                RenderedHorne: ArrayPhoto
            })
        }
    
    
    }

    render() {
        return (
            <div className="Horned">

               <FormList Filter={this.Filter}/>
               {this.state.RenderedHorne.map((item,index)=>{
                   return(
                    <HornedBeasts title={item.title}
                    image_url={item.image_url}
                    description={item.description}
                    key={index}
                    passFundataOfModlee={this.props.passFundataOfModlee}
                    passFunhandleClose={this.props.passFunhandleClose}
                />
                   )
               })}

{/* the old one  */}
                {/* {ArrayPhoto.map((item, i) => {
                    return (
                        <HornedBeasts title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            key={i}
                            passFundataOfModlee={this.props.passFundataOfModlee}
                            passFunhandleClose={this.props.passFunhandleClose}
                        />
                    );
                }

                )} */}


            </div>


        )
    }
}









export default Main;





// import React from "react";
// import HornedBeasts from "./HornedBeasts";

// class Main extends React.Component {
//   render() {
//     return (
//       <div className="HornedBeasts">
//         <HornedBeasts
//           title="UniWhal"
//           imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
//           description="A unicorn and a narwhal nuzzling their horns"
//           num="1"
//         />

//         <HornedBeasts
//           title="Unicorn Head"
//           imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
//           description="Someone wearing a creepy unicorn head mask"
//           num="2"
//         />
//         <HornedBeasts
//           title="Rhino Family"
//           imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
//           description="Mother (or father) rhino with two babies"
//           num="3"
//         />
//       </div>
//     );
//   }
// }
