import React,{ Component } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Personal } from "./cvForm/personal";
import profilepic from "./components/utilities/profile.svg";
import {Experience} from "./cvForm/experienceSection";
import {Education} from "./cvForm/educationSection";
import {Button} from "./components/utilities/button";
import {CvPreview} from "./cvPreview/CVpreview";
import { exampleCv} from "./components/exampleCV";
import { emptyCV } from "./components/emptyCV";



class App extends Component {
  constructor(props){
    super(props);
    this.state = emptyCV;
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleChangeEducation =  this.handleChangeEducation.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.loadExample = this.loadExample.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange (e) {
    let { name, value, type } = e.target;
    if (type==="file") {
      this.handleChangeFile(e);
      return
    }
    this.setState(state => ({
      personalInfo : {...state.personalInfo, [name] : value}
    }))
  }

  handleChangeFile(e) {
    let {name, files } = e.target;
    let file = files[0];
    if (!file)  return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState(state => ({
        personalInfo: {...state.personalInfo, [name] : fileReader.result}
      }))
    }
    fileReader.readAsDataURL(file);
  }


  handleChangeExperience(e, id) {
    const { name, value} = e.target;
    const { experience } = this.state;
    this.setState(state => {
      const newExp = experience.map(item => {
          if (item.id === id ) {
             return {...item, [name] : value}
         }
        return item;
      })
      return {...state, experience : [...newExp]}
    })
  }
 
  handleAddExperience() {
    this.setState(state => ({
      experience : [...state.experience, {
        id: uuidv4(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }]
    }))
  }

  handleDeleteExperience(id) {
    this.setState(state => {
      const newEx = state.experience.filter(item => item.id !== id)
      return {...state, experience : [...newEx]}
    })
  }

  handleChangeEducation(e, id) {  
    const { name, value} = e.target;
    const { education } = this.state;
    this.setState(state => {
      const newEdu = education.map(item => {
            if (item.id === id ) {
          return {...item, [name] : value}
        }
        return item;
      })
      return {...state, education : [...newEdu]}
    })
  }

  handleAddEducation() {
    this.setState(state => ({
      education : [...state.education, {
          id: uuidv4(),
          universityName: '',
          city: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        }]
    }))
  }

  handleDeleteEducation(id) {
    this.setState(state => {
      const newEd = state.education.filter(item => item.id !== id)
      return {...state, education : [...newEd]}
    })
  }


  loadExample() {
    this.setState(exampleCv);
  }

  reset() {
    this.setState(emptyCV);
  }


  render(){

    return (
      <MyDiv>
        <Div>
          <Personal personalInfo={this.state.personalInfo} onChange={this.handleChange}/>
          <Experience experience={this.state.experience} onChange={this.handleChangeExperience} onAdd={this.handleAddExperience} onDelete={this.handleDeleteExperience}/>
          <Education education={this.state.education} onChange={this.handleChangeEducation} onAdd={this.handleAddEducation} onDelete={this.handleDeleteEducation}/>
          <Button text="Load Example" onClick={this.loadExample} loadBtn/>
          <Button text="Reset" onClick={this.reset} resetBtn/>
        </Div>
        <CvPreview
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
          education={this.state.education} />
      </MyDiv>
    );
  }
}

const Div = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 1.5rem;
width: 40vw;
border-radius: 10px;
background-color: #dcdedc;
margin-right:  0 auto;
`
const MyDiv = styled.main`
display: flex;
justify-content: space-around;
width: 100vw;
`
export default App;
