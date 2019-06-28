import React from "react";

class Timer extends React.Component{

    // componentDidMount(){
    //     this.timer = setInterval(this.ticker, 1000)
    // }

    startTimer = () =>{
        // this.setState({
        //     clock : new Date() - this.props.start
        // })

        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
          });


          this.timer = setInterval(() => {
            this.setState({
              timerTime: Date.now() - this.state.timerStart
            });
          }, 1000);


    //    this.componentDidMount();
    // this.timer = setInterval(this.ticker, 1000);
    // this.timer = setInterval(()=> {
    //     this.setState({
    //         clock : new Date() - this.props.start
    //         })
    // }, 1000);
    }


    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };


      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
      };
      
    
    constructor(props){
        super(props);

        // this.state = {
        //     clock : 0
        // };

        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
          };

        
        
    }
    
    

    render(){

        const { timerTime } = this.state;
        // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);


        // var clock = Math.round(this.state.timerTime /1000)
        // console.log(this.props.start);
        return(
            <div>
                <p>You have been on this site</p>
                <div>
                <span>{hours}</span>
                <p>Hour</p>
                <span>{minutes}</span>
                <p>Minute</p>
                <span>{seconds}</span>
                <p>Second</p>
                </div>
                
                
                <button onClick={this.startTimer} className="btn btn-outline-primary">Click Here to Start the Timer</button>
                <button onClick={this.stopTimer} className="btn btn-outline-primary">Click Here to Stop the Timer</button>
                <button onClick={this.resetTimer} className="btn btn-outline-primary">Click Here to Reset the Timer</button>

            </div>
        )
    }
}

export default Timer;