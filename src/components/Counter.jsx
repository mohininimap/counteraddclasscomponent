import React,{Component} from 'react';

class Counter extends Component{
    state={
        count:0,
        tags:['tag1','tag2','tag3'],
        imageUrl:'https://picsum.photos/200'
    };
    
    // constructor(){
//     super();
//     this.handleIncrement=this.handleIncrement.bind(this);
// }

 //If here we are use simple function then come error Uncaught TypeError: Cannot read properties of undefined (reading 'state') 
 //solution is using arrow function.If we use arrow function then this error is remove or bind event handler in class component



    // handleIncrement(){
    //     console.log("Increment clicked",this.state.count)
    // }

    handleIncrement=()=>{
        // console.log("Increment Clicked",this)
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
       let classes=this.getBadgeClasses();
        return(
            <div>
                {/* <img src={this.state.imageUrl} alt="" /> */}
          <span style={{fontSize:30}} className={classes}>{this.formatCount()}</span>
          <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
          <ul>
           {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
          </ul>
            </div>
           
        )
    }
getBadgeClasses(){
    let classes="badge m-2 badge-";
    classes += this.state.count===0?"warning":"primary";
    return classes;
}

    formatCount(){
        const {count}=this.state;
        const x=<h1>Zero</h1>
return this.state.count===0?x:this.state.count
    }
}

export default Counter;