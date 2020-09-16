import {MemoryCard} from "./MemoryCard";
import React from "react";
import MemoryCardComponent from "./MemoryCardComponent";

class MemoryGridComponent extends React.Component<any, any>{

    constructor(props:any) {
        super(props);

        this.shuffle(props.cards)
        this.state = {
            curGuess: -1,
            curGuessIndex: -1,
            cards: props.cards as Array<MemoryCard>,
            isPaused: false,
            turns: 0,
            win: false,
        };
    }

    restartGame = ()=>{
        this.setState({isPaused: true, curGuess: -1, curGuessIndex: -1, turns: 0, won: false});

        let cards:Array<MemoryCard> = this.state.cards;
        for (let i = 0; i < cards.length; i++) {
            cards[i].matched = false;
            cards[i].selected = false;
        }

        this.shuffle(cards);
        this.setState({cards: cards,isPaused: false});
    }

    shuffle(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    onCardClicked = (index:number) => {
        let cards:Array<MemoryCard> = this.state.cards;
        let clickedCard:MemoryCard = cards[index];
        let prevClickedCard:MemoryCard = cards[this.state.curGuessIndex];

        if (!this.state.isPaused && !clickedCard.selected && !clickedCard.matched){
            clickedCard.selected = true;
            if (this.state.curGuess === -1){
                this.setState({curGuess: clickedCard.id, curGuessIndex: index});
            }else if (this.state.curGuess === clickedCard.id){
                clickedCard.selected = false;
                prevClickedCard.selected = false;
                clickedCard.matched = true;
                prevClickedCard.matched = true;
                this.setState({curGuess: -1,curGuessIndex: -1, turns: this.state.turns + 1});
            }else {
                this.setState({isPaused: true, turns: this.state.turns + 1});
                setTimeout(()=>{
                    clickedCard.selected = false;
                    prevClickedCard.selected = false;
                    this.setState({curGuess: -1, curGuessIndex: -1, isPaused: false});
                }, 1000);
            }
        }
        let hasWOn = this.checkWinCon()
        console.log(hasWOn)

        this.setState({cards: cards, won: hasWOn});
    }

    checkWinCon = () => {
        for (let i = 0; i < this.state.cards.length; i++) {
            if (!this.state.cards[i].matched)
                return false;
        }
        return true;
    }

    WinOverlayComponent = (props: any) => {
        return(
            <div className={'winOverlay ' + (props.hasWon ? "shown":"" ) }>
                <div className={'inner'}>
                    <h2>You won!</h2>
                    <p>Number of Taken Turns: {props.turns}</p>
                    <button className={'restartBtn'} onClick={this.restartGame}>Restart</button>
                </div>
            </div>
        );
    }

    HeaderComponent = (props: any) => {
        return(
            <div className={'header'}>
                <p id={'title'}>MemoryGame</p>
                <p>Number of Taken Turns: {props.turns}</p>
                <button className={'restartBtn'} onClick={this.restartGame}>Restart</button>
            </div>
        );
    }

    CardListComponent = (props: any) => {
        return(
            <MemoryCardComponent card={props.value} index = {props.index} onCardClicked = {this.onCardClicked}/>
        );
    }

    render(){
        const cards:Array<MemoryCard> = this.state.cards;
        const turns:number = this.state.turns;
        const gridCards = cards.map((card, index) =>
            <this.CardListComponent key={index} index = {index} value={card}/>)

        return(
            <div className={'memoryGame'}>
                <this.HeaderComponent turns={turns}/>
                <div className={"gridcontainer"}>
                    {gridCards}
                </div>
                <this.WinOverlayComponent hasWon={this.state.won} turns={this.state.turns}/>
            </div>
        );
    }
}
export default MemoryGridComponent