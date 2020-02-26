import React, { Component } from 'react';
import {} from "react-bootstrap"

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Wrapper>
                <Title>Projects</Title>
                {this.state.projects}

            </Wrapper>
         );
    }
}
 
export default Project;


// render() {
//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         {this.state.friends.map(friend => (
//           <FriendCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>
//     );
//   }