class BoardManager{
    cardManager;
    node;
    numImg;
    curNumCards;

    constructor(id,numImg,cardManager){
        this.node = document.getElementById(id);
        this.numImg = numImg;
        this.cardManager = cardManager
    }


    clear(){
        this.node.innerHTML="";
    }

    fill(numberCard){
        if (numberCard>2*this.numImg) {

            console.error('Error; NOT enough images for ${numberCard} cards');

            numberCard = 2*this.numImg;
        }
        this.clear();
        this.addCard(this.cardManager.gen(1));
    }

    addCard(card){
        this.node.appendChild(card);
    }
    getRandomList(size){
        let List=Array(size/2).fill().map((_,i)=>i+1)
        console.log({List})
        List=[...List,...List].sort(()=>Math.random()-0.5)
        return List
    }
}

