import React from 'react';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

const MOVES = new Array(9);

class Square extends React.Component {
  render() {
    return (
      <div onClick={this.props.clicked}
        className="square"
        style={squareStyle}>{this.props.val}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        winner: "None",
        moves: MOVES,
        count: 0,
        nextPlayer: "O"
    }
  }

  match = (one, two, three) => {
      if(one === two && two === three && two !== undefined){
          this.setState({
              winner: two
          })
      }
  }

  addMove = (index) => {
    const newMoves = [...this.state.moves];
    if(this.state.moves[index] === undefined && this.state.winner === 'None'){      
      let next;
      if(this.state.count % 2 === 0){
        newMoves[index] = 'O';
        next = "X";
      }
      else{
        newMoves[index] = 'X';
        next = "O";
      }
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count+1,
          moves: newMoves,
          nextPlayer: next
        }
      })
    }

    let one1 = newMoves[0];
    let one2 = newMoves[1];
    let one3 = newMoves[2];
    let one4 = newMoves[3];
    let one5 = newMoves[4];
    let one6 = newMoves[5];
    let one7 = newMoves[6];
    let one8 = newMoves[7];
    let one9 = newMoves[8];
    
    if( this.match(one1, one2, one3) || this.match(one4, one5, one6) || this.match(one7, one8, one9) || this.match(one1, one4, one7) || this.match(one2, one5, one8) || this.match(one3, one6, one9) || this.match(one1, one5, one9) || this.match(one3, one5, one7) ){
        alert("winner");
    }
    
  }

  reset = () => {
      this.setState({
        moves: MOVES,
        winner: "None"
      })
  }

  render() {
    return (
      <div style={containerStyle} className="gameBoard" >
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{this.state.nextPlayer}</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{this.state.winner}</span></div>
        <button style={buttonStyle} onClick={this.reset}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square id="0" val={this.state.moves[0]} clicked={() => this.addMove(0)}/>
            <Square id="1" val={this.state.moves[1]} clicked={() => this.addMove(1)}/>
            <Square id="2" val={this.state.moves[2]} clicked={() => this.addMove(2)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square id="3" val={this.state.moves[3]} clicked={() => this.addMove(3)}/>
            <Square id="4" val={this.state.moves[4]} clicked={() => this.addMove(4)}/>
            <Square id="5" val={this.state.moves[5]} clicked={() => this.addMove(5)}/>
          </div>
          <div className="board-row" style={rowStyle}>
            <Square id="6" val={this.state.moves[6]} clicked={() => this.addMove(6)}/>
            <Square id="7" val={this.state.moves[7]} clicked={() => this.addMove(7)}/>
            <Square id="8" val={this.state.moves[8]} clicked={() => this.addMove(8)}/>
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

