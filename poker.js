/**
 * INPUT TEST CASE
 * * First character for Suit (S,H,D,C)
 * * Second character for Rank (2-10,J,Q,K,A)
 */
const testCase = "D4C4C8D8S4"

/**
 * GET CARD RANK
 * * Params:
 * * * card: String
 * * Return value:
 * * * rank of card
 */
const getRank = (card) => {
    if (typeof card !== "string" || card.length<2) {
        return false
    }
    else {
        return card.slice(1)
    }
}

/**
 * GET CARD SUIT
 * * Params:
 * * * card: String
 * * Return value:
 * * * suit of card
 */
const getSuit = (card) => {
    if (typeof card !== "string" || card.length<2) {
        return false
    }
    else {
        return card[0]
    }
}

/**
 * SEPERATE INTO CARD LIST
 * * Params:
 * * * cardString: Input String
 * * Return value:
 * * * array of card list
 */
const seperateCard = (cardString) => {
    const suitSet = new Set(['S','H','D','C'])
    let cardList = []
    let card = ''
    for (let i = 0; i < cardString.length; i++) {
        const char = cardString[i];
        if (suitSet.has(char)) {
            if (i>0) {
                cardList.push(card)
            }
            card = char
        }
        else {
            card += char
            if (i===cardString.length-1) {
                cardList.push(card)
            }
        }
    }
    return cardList
}

/**
 * TEST FOUR CARDS
 * * Params:
 * * * cardList: String Array
 * * Return value:
 * * * true or false
 */
const testFourCards = (cardList) => {
    let rankList = []
    let countRank = []
    cardList.forEach((item)=>{
        let rank = getRank(item)
        if (rankList.indexOf(rank)!==-1) {
            countRank[rankList.indexOf(rank)] += 1
        }
        else {
            rankList.push(rank)
            countRank.push(1)
        }
    })
    if (countRank.indexOf(4)!==-1) {
        return '4C'
    }
    else {
        return false
    }
}

/**
 * TEST FULL HOUSE
 * * Params:
 * * * cardList: String Array
 * * Return value:
 * * * true or false
 */
const testFullHouse = (cardList) => {
    let rankList = []
    let countRank = []
    cardList.forEach((item)=>{
        let rank = getRank(item)
        if (rankList.indexOf(rank)!==-1) {
            countRank[rankList.indexOf(rank)] += 1
        }
        else {
            rankList.push(rank)
            countRank.push(1)
        }
    })
    if (countRank.length===2 && countRank.indexOf(2)!==-1 && countRank.indexOf(3)!==-1) {
        return 'FH'
    }
    else {
        return false
    }
}

/**
 * TEST THREE CARDS
 * * Params:
 * * * cardList: String Array
 * * Return value:
 * * * true or false
 */
const testThreeCards = (cardList) => {
    let rankList = []
    let countRank = []
    cardList.forEach((item)=>{
        let rank = getRank(item)
        if (rankList.indexOf(rank)!==-1) {
            countRank[rankList.indexOf(rank)] += 1
        }
        else {
            rankList.push(rank)
            countRank.push(1)
        }
    })
    if (countRank.indexOf(3)!==-1) {
        return '3C'
    }
    else {
        return false
    }
}

/**
 * TEST TWO PAIRS
 * * Params:
 * * * cardList: String Array
 * * Return value:
 * * * true or false
 */
const testTwoPairs = (cardList) => {
    let rankList = []
    let countRank = []
    cardList.forEach((item)=>{
        let rank = getRank(item)
        if (rankList.indexOf(rank)!==-1) {
            countRank[rankList.indexOf(rank)] += 1
        }
        else {
            rankList.push(rank)
            countRank.push(1)
        }
    })
    let total = 0
    countRank.forEach((item)=>{
        if (item===2) {
            total += 1
        }
    })
    if (total===2) {
        return '2P'
    }
    else {
        return false
    }
}

/**
 * TEST ONE PAIR
 * * Params:
 * * * cardList: String Array
 * * Return value:
 * * * true or false
 */
const testOnePair = (cardList) => {
    let rankList = []
    let countRank = []
    cardList.forEach((item)=>{
        let rank = getRank(item)
        if (rankList.indexOf(rank)!==-1) {
            countRank[rankList.indexOf(rank)] += 1
        }
        else {
            rankList.push(rank)
            countRank.push(1)
        }
    })
    if (countRank.indexOf(2)!==-1) {
        return '1P'
    }
    else {
        return false
    }
}

/**
 * MAIN PROGRAM
 */
console.log('-----TEST CASE-----')
console.log(testCase)

let cardList = seperateCard(testCase)
let testList = [testFourCards,testFullHouse,testThreeCards,testTwoPairs,testOnePair]
let result = false
let i = 0
while (!result) {
    if (i>=testList.length) {
        result = '--'
    }
    else {
        result = testList[i](cardList)
    }
    if (!result) {
        i += 1
    }
}

console.log('-----RESULT-----')
console.log(result)