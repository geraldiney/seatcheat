import React, { Component } from "react";
import Layout from "./Layout";
import SaveGroup from "./SaveGroup";

class SeatingRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
        scrambledGroup: []
    };
    this.fetchParticipants=this.fetchParticipants.bind(this);
  }


  componentWillMount(){

    // this.props.fetch().then(data=>{
    //   this.setState({
    //     scrambledGroup:data
    //   });
    // })  
    this.fetchParticipants();
  };

  fetchParticipants(){
    this.props.fetch().then(data=>{
      this.setState({
        scrambledGroup:data
      });
    })  
  }
  
  render() {
    
    return <div>
     <Layout participants={this.state.scrambledGroup} seatsPerRow={this.props.seatsPerRow} currentUser={this.props.currentUser} />
     <div >
            <SaveGroup participants={this.props.participants} 
                        addGroup={this.props.addGroup} 
                        showGroupOptions={this.props.showGroupOptions}
                        fetch={this.fetchParticipants}/>
          </div>
     </div>
  }
}

export default SeatingRender;
