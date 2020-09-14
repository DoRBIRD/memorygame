import {MemoryCard} from "./MemoryCard";
import React from "react";
import MemoryCardComponent from "./MemoryCardComponent";

class MemoryGridComponent extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            curGuess: -1,
            curGuessIndex: -1,
            cards: props.cards as Array<MemoryCard>,
            isPaused: false,
        };
        this.onCardClicked = this.onCardClicked.bind(this);
        this.CardListComponent = this.CardListComponent.bind(this);
    }

    onCardClicked(index:number){
        let cards:Array<MemoryCard> = this.state.cards;
        let clickedCard:MemoryCard = cards[index];
        let prevClickedCard:MemoryCard = cards[this.state.curGuessIndex];

        if (!this.state.isPaused && !clickedCard.selected && !clickedCard.matched){
            clickedCard.selected = true;
            if (this.state.curGuess === -1){
                this.setState({curGuess: clickedCard.id});
                this.setState({curGuessIndex: index});
            }else if (this.state.curGuess === clickedCard.id){
                clickedCard.selected = false;
                prevClickedCard.selected = false;
                clickedCard.matched = true;
                prevClickedCard.matched = true;
                this.setState({curGuess: -1});
                this.setState({curGuessIndex: -1});
            }else {
                this.setState({isPaused: true});
                setTimeout(()=>{
                    clickedCard.selected = false;
                    prevClickedCard.selected = false;
                    this.setState({curGuess: -1});
                    this.setState({curGuessIndex: -1});
                    this.setState({isPaused: false});
                }, 750);
            }
        }
        this.setState({cards: cards});
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
        const listItems = cards.map((card, index) =>
            <this.CardListComponent key={index} index = {index} value={card}/>)

        return(
            <div className={"gridcontainer"}>
                {listItems}
            </div>
        );
    }
}
export default MemoryGridComponent