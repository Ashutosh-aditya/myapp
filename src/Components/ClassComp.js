import React from "react";

class ClassComp2 extends React.Component{
    render(){
        return <p>This is a default Class Component</p>
    }
}
export default ClassComp2; //default export can be renamed during import
// named export can't be renamed

// next is Named export
export class ClassComp extends React.Component{
    render(){
        return <p>This is a named exported Class Component</p>
    }
}
export class ClassComp1 extends React.Component{
    render(){
        return <p>This is another named exported Class Component</p>
    }
}