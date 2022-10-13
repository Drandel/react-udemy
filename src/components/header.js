import React from "react"



class Header extends React.Component {

    state = {
        title:"The keywords are: ",
        keywords:'',
        count: 0
    }

    inputChange = (e) => {
        this.setState ({ 
            keywords: e.target.value
        })
    }

    addOne = () =>{
        this.setState((state, props) =>({
            count: state.count + 1 
        }))
    }

    render() {
        return(
            <header>
                <div 
                    className="logo"
                    onClick={()=> { console.log("I was clicked!") }}
                >
                    Logo
                </div>

                <input
                    onChange={this.inputChange}
                />
                <br/>
                <div>
                    {this.state.title}
                </div>
                <div>
                    {this.state.keywords}
                </div>
                <br/>
                <div>
                    {this.state.count}
                </div>
                <button
                    onClick={this.addOne}
                >
                    Click me</button>

            </header>
        )
    }
}
export default Header;