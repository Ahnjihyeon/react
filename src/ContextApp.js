import React, { Component, useContext } from 'react'

const MyContext = React.createContext( // context 객체를 만든다.
    {
        bool:true,
        toggleBool: ()=>{},
    }
)

const toggleStyle = (bool) => ({
    backgroundColor: (bool ? '#000' : '#fff'),
    color: (bool? '#fff' : '#000')
})

function Button({bool, toggleBool, children}) {
    return(
        <button onClick={toggleBool} style={toggleStyle(bool)}>
            {children}
        </button>
    )
}

class ContextApp extends Component {
    constructor(props){
        super(props);
        this.toggleBool = () => {
            this.setState({ bool: !this.state.bool });
        };
        this.state={
            bool:true,
            toggleBool: this.toggleBool
        };
    }
    render(){
        //Provider를 이용하여 Context의 변경 사항을 자손들에게 제공.
        // 모든 Customer는 Provider의 value가 변경될 때 마다 재 렌더링 된다.
        return(
            <div>
                <MyContext.Provider value={this.state}>
                    <FunctionWrapper />
                    <ClassWrapper />
                </MyContext.Provider>
            </div>
        )
    }
}

// wrapper start 
function FunctionWrapper(){
    return(
        <>
            <div><FunctionToggleButton /></div>
            <div><HookToggleButton/></div>
        </>
    )
}

function FunctionToggleButton(){
    // MyContext providerdml value 변경 사항 구독
    // Context에서 제일 가까운 Provider의 value 참조
    return(
        <MyContext.Consumer>
            {({ bool, toggleBool })=>(
                <Button {...{toggleBool, bool}}>Function Toggle</Button>
            )}
        </MyContext.Consumer>
    )
}

//Hook의 useContext로 Context 객체의 value를 가져옴.
function HookToggleButton(){
    const {bool, toggleBool} = useContext(MyContext); 
    return(
        <Button {...{toggleBool,bool}}>Hook Toggle</Button>
    );
}

class ClassWrapper extends Component {
    render() {
        return (
            <div>
                <ClassToggleButton/>
            </div>
        )
    }
}


class ClassToggleButton extends Component {
    static contextType = MyContext;
    render(){
        const {bool, toggleBool} = this.context;
        return(
            <Button {... {toggleBool, bool}}>Class Toggle </Button>
        );
    }
}

//wrapper end


export default ContextApp;
