import { Component } from "react";
import PasswordList from '../PasswordList'
import {v4 as uuidv4} from 'uuid'
import "./index.css"
const colorList = ['yellow', 'green', 'orange', 'blue']

const defaultPasswords = [
  {
    id: uuidv4(),
    websitename: 'Gmail',
    username: 'john.doe@gmail.com',
    password: 'JohN@1234!',
    intital: 'G',
    classname: 'green',
  },
  {
    id: uuidv4(),
    websitename: 'Facebook',
    username: 'john_fb',
    password: 'Fb!secure@2024',
    intital: 'F',
    classname: 'blue',
  },
  {
    id: uuidv4(),
    websitename: 'Netflix',
    username: 'john.netflix',
    password: 'WatchNow2024*',
    intital: 'N',
    classname: 'orange',
  },
  {
    id: uuidv4(),
    websitename: 'GitHub',
    username: 'john-dev',
    password: 'CodeMaster#909',
    intital: 'G',
    classname: 'yellow',
  },
  {
    id: uuidv4(),
    websitename: 'Amazon',
    username: 'john.amazon',
    password: 'Amz1234!Buy',
    intital: 'A',
    classname: 'green',
  },
]

class PasswordManager extends Component{
    state={
        websitename:'',
        username:'',
        password:'',
        isShow:false,
        isTrue:false,
        passwordsList:defaultPasswords,
        searchInput:''
    }

    changewebsitename=(event)=>{
        this.setState({websitename:event.target.value})
    }
    changeusername=(event)=>{
        this.setState({username:event.target.value})
    }
    changepasswod=(event)=>{
        this.setState({password:event.target.value})

    }
    showpassword=(event)=>{
        if(event.target.checked){
            this.setState({isShow:true});
            console.log(this.state.isShow)
        }else{
              this.setState({isShow:false});
                console.log(this.state.isShow)
        }

    }
    onsubmitclicked=(event)=>{
        event.preventDefault()
        const {websitename,username,password,isShow,isTrue}=this.state
       
        const intital = websitename.slice(0,1).toUpperCase()
        const classname=colorList[Math.floor(Math.random()*5)]

        const newPassword={
            id:uuidv4(),
            websitename,
            username,
            password,
            
            intital,
            classname

        }
        this.setState(prevState=>({
            passwordsList:[...prevState.passwordsList,newPassword],
            websitename:'',
            password:'',
            username:'',
            isShow:false

        }))
    }
    updatesearchlist=(event)=>{
        const {searchInput}=this.state
        this.setState({searchInput:event.target.value})
        console.log(searchInput)


    }
    onDelete=(id)=>{
        const {passwordsList}=this.state
        const updatedResults=passwordsList.filter(each=>each.id!=id)
        this.setState({passwordsList:updatedResults})
    }



    render(){
        const {passwordsList,searchInput}=this.state
                const {websitename,username,password,isShow}=this.state
                const  updatedpasswordsList=passwordsList.filter(each=>each.websitename.toUpperCase().includes(searchInput.toUpperCase()))

        return(
            <div className="container">
                <div className="passwordmanagerlogo">
                    <img className="logoItem" src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "/>


                </div>

                <div className="topSection">

                            <div className="formcontainer">
                                <h1 className="addnewpassword">Add New Password</h1>


                                    <form  onSubmit={this.onsubmitclicked}>
                                        <div className="websitenameDiv">
                                            <label htmlFor="website"><img className="inputimages" src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"/></label>

                                              <input placeholder="Enter Website Name" id="website" value={websitename} onChange={this.changewebsitename} className="website-name"/>
                                        </div>

                                        <div className="usernameDiv">
                                            <label htmlFor="username"><img className="inputimages" src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"/></label>
                                                <input placeholder="Enter Username" id="username" value={username} className="username" onChange={this.changeusername}/>
                                        </div>
                                        <div className="password">
                                            <label htmlFor="password"><img className="inputimages" src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"/></label>


                                            <input placeholder="Enter Password" id="password" value={password} className="passwordtext" onChange={this.changepasswod}/>
                                        </div>

                                    <button className="button" type="submit">Add</button>

                                    </form>
                            </div>


                            <div className="imagecontainer">
                                <img className="key-image" src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"/>
                            </div>


                </div>

                <div className="bottomSection">
                    <div className="header">
                        <div className="heading">
                            <h1>Your Passwords <span  className="password-count">{passwordsList.length}</span></h1>
                            
                        </div>
                        <div className="searchpassword">
                            <img src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png " className="searchicon"/>
                              <input placeholder="Search password" onChange={this.updatesearchlist}/>
                        </div>

                    </div>
                    <div className="listcontainer">
                        <div className="checkboxdiv">

                                <input  className="checkbox" onChange={this.showpassword} id="checkbox" type="checkbox"/>
                                <label className="checkboxlabel" htmlFor="checkbox">Show Password</label>
                        </div>

                              

                        <div className="password-list-container">

                            {updatedpasswordsList.map(each=>(

                                <PasswordList delteItemTriggered={this.onDelete} isShow={isShow} key={each.id} eachItem={each} />
                            ))}
                        </div>

                    </div>
                </div>


             
            </div>


        )
    }
}

export default PasswordManager