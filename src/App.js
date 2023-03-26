import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component {
    // Initial state of task:
    state = { task: '' };

    componentDidMount() {
        this.fetchTasks();
    }
    
    fetchTasks = () => {
        axios.get('https://www.boredapi.com/api/activity/')
          .then((response) => {
            // Getting API data:
            const { activity, type, participants, link } = response.data;
            // console.log(activity, type, participants);
      
            // Populating initial task state with actual task:
            this.setState({ 
              activity: activity,
              type: type,
              participants: participants,
              link: link
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      render() {
        const { activity, type, participants, link } = this.state;
      
        return (
          <div className="container">
            <h1 className="heading"><u>Here is a random task for you:</u></h1>
            <h4 className="txt">Activity:</h4> <p>{activity}.</p>
            <h4 className="txt">Type:</h4> <p>{type}</p>
            <h4 className="txt">Participants:</h4> <p>{participants}</p>
            {/* Will show the link only if the value of link parameter is not null: */}
            {link && <p className="resource">Resource: <a href={link} target='_blank'> Click here! </a></p>}
            <button className="button" onClick={this.fetchTasks}><span>Change Task</span></button>
          </div>
        );
      }
}

export default App;