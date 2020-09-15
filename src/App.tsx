import React from 'react';
import './App.css';
import {MemoryCard} from "./MemoryCard";
import MemoryGameComponent from "./MemoryGridComponent";

let cards: MemoryCard[] = []
let card:MemoryCard;

card = {id: 0, name: "test0", imagePath:"https://images.unsplash.com/photo-1591322128697-7dce389d8557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 1, name: "test1", imagePath:"https://images.unsplash.com/photo-1591322128797-1137c2e39804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 2, name: "test2", imagePath:"https://images.unsplash.com/photo-1598846021811-c23fa9263bb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 3, name: "test3", imagePath:"https://images.unsplash.com/photo-1591297299673-a620e2546a00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 4, name: "test4", imagePath:"https://images.unsplash.com/photo-1591295360405-33d6c25c4a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 5, name: "test5", imagePath:"https://images.unsplash.com/photo-1591322128794-395d069b5e32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 6, name: "test6", imagePath:"https://images.unsplash.com/photo-1580748238612-6740e3faea2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1290&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 7, name: "test7", imagePath:"https://images.unsplash.com/photo-1597647131428-d4a1924a9085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 8, name: "test8", imagePath:"https://images.unsplash.com/photo-1598895939666-93369119c586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

card = {id: 9, name: "test9", imagePath:"https://images.unsplash.com/photo-1599073154547-fa7525af0639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", selected: false, matched: false}
cards.push(card)
card = {...card}
cards.push(card)

/*
https://images.unsplash.com/photo-1591322128589-bd876a42c8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
 */



function App() {
  return (
      <MemoryGameComponent cards = {cards}/>
  );
}

export default App;
