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
        };
        this.CardListComponent = this.CardListComponent.bind(this);
        this.HeaderComponent = this.HeaderComponent.bind(this);
    }

    restartGame = ()=>{
        this.setState({isPaused: true, curGuess: -1, curGuessIndex: -1, turns: 0});

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
        this.setState({cards: cards});
    }

    HeaderComponent(props: any) {
        const turns = props.turns;
        const onclick = this.restartGame;

        return(
            <div className={'header'}>
                <p id={'title'}>MemoryGame</p>
                <p>Number of Taken Turns: {turns}</p>
                <button className={'restartBtn'} onClick={onclick}>Restart</button>
            </div>
        );
    }

    CardListComponent(props: any) {
        const card = props.value;
        const index = props.index;

        return(
            <MemoryCardComponent card={card} index = {index} onCardClicked = {this.onCardClicked}/>
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
            </div>
        );
    }
}
export default MemoryGridComponent