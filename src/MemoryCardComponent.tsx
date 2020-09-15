import React from 'react'
import {MemoryCard} from "./MemoryCard";


class MemoryCardComponent extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    defaultImagePath: string = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"

    handleClick(e:any){
        e.preventDefault();
        this.props.onCardClicked(this.props.index);
    }

    render(){
        return(
            <div className={'memory-card ' + (this.props.card.selected ? "currentlySelected": "" ) + (this.props.card.matched ? "matched": "" )}
                 style={{ backgroundImage: `url(${this.props.card.selected || this.props.card.matched ? this.props.card.imagePath : this.defaultImagePath} )` }}
                 onClick={(e)=>this.handleClick(e)}>
            </div>
        );
    }
}
export default MemoryCardComponent
