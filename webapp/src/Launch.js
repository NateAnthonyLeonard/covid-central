import React from 'react';
import './App.css';
import 'react-spinning-wheel/dist/style.css';

import DesktopUserNoticeComponent from './MinorComponents/DesktopUserNoticeComponent'

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import * as Util from './Shared/Util'

const sources = [ 'Facts', 'Stats', 'News', 'Resources' , 'Commentary'];

const textTheme = createMuiTheme({
  palette: {
    primary: { main: "#e91e63", contrastText: "#fff" },
    secondary: { main: "#fff", contrastText: "#000" }
  }
});
  
/*This page will display a form that will redirect the user to different views based on their input. 
It functions with React states and react Redirects*/
class Launch extends React.Component { 

  //the states of emotion and source will be set to null initially until the user had filled out the form.
  constructor() {
    super();
    this.state = {
      emotion: '',
      source: '',
    };
  }

  handleEmotion = emotion => {
    this.setState({ emotion });
  };

  handleSource = newSource => {
    this.setState({source: newSource.target.value});
  };

  render()
  {  
    const isMobile = Util.IsMobileUserAgent()
    var cardSize = undefined
    var covidTitle = undefined
    var submitMargin = '9vh'
    if(isMobile === false)
    {
      cardSize = "40vw"
      covidTitle = "5vw"
      submitMargin = "8vh"

    }
    return (   
      <div> {/* DO NOT REMOVE THIS DIV COMPONENT*/}
        <div className="launchCont" style={{position:'relative'}}>
          <h1 style={{fontSize: covidTitle}}>Covid Central</h1>
          <hr className="solid"></hr>

          <DesktopUserNoticeComponent />

          <div className="newsCont" style={{marginRight: "auto",marginLeft:"auto", width: cardSize}}>

            <MuiThemeProvider theme={textTheme}>
              <div className="newsCardHeader">
                <Typography variant="h5" color="secondary">
                  What is Covid-Central
                </Typography>
              </div>
              
              <hr className="cardDivider" />

              <div className="newsCardBody">
                <Typography variant="body2" color="secondary">
                  COVID-Central is an effort by a group of interns from Florida State University&#39;s Innovation Hub and outside collaborators. Our goal is to provide a centralized hub filled with reliable information, resources, and statistics regarding the outbreak of the COVID-19 virus. 
                  <br></br>
                  <br></br>
                This is an open source project. 
                <br></br>
                <a href="https://github.com/FSUInnovationHub/covid-central" target="_blank" className="github">Github</a>
                </Typography>
              </div>
        
              {/*<Typography variant="h6" color="secondary" style={{marginTop:'2vh', alignSelf:'center'}}>
                Scroll down to start!
    </Typography>*/}
            </MuiThemeProvider>
          </div>

          <h2 className="showMeThe" style={{marginTop: "2vh"}}>show me the</h2>
          <div className="dropdown">
            
            <Select
              style={{width:'auto',display:'block', verticalAlign:'center'}}
              autoWidth={true}
              renderValue={(selected => { return !selected ? "Pick category" : selected})}
              displayEmpty={true}
              value={this.state.source || ''}
              onChange={this.handleSource}>
              { 
                sources.map((label, index) => 
                  <MenuItem key={index} value={label}>{label}</MenuItem>
              )}
            </Select>
           </div>

           <div className="submitBar" style={{marginTop: submitMargin}}>
              <Button 
                  className="submitTxt"
                  variant="text"
                  href={"/" + (this.state.source).toLowerCase()}
                  disabled={this.state.source === ""}>
                  Submit
              </Button>
            </div>
       </div> 
      </div>
      )
  }
}
export default Launch;
