export const card_claim = {
    id: "",
    type: "card_claim",
    time: 0n,
    source: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    target: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    optionalCardData: {
        id: "",
        name: "",
        sourceName: "",
        stars: 0,
        picture: ""
    },
    optionalCardsData: null,
    content: {
        cardId: 0
    }
}

export const treasure = {
    id: "",
    type: "treasure",
    time: 0n,
    source: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    target: null,
    optionalCardData: null,
    optionalCardsData: null,
    content: {
        shard: "",
        xp: "",
        mana: "",
        combo: ""
    }
}

export const comet = {
    id: "",
    type: "comet",
    time: 0n,
    source: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    target: null,
    optionalCardData: null,
    optionalCardsData: null,
    content: {
        type: ""
    }
}

export const trade = {
    id: "",
    type: "trade",
    time: 0n,
    source: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    target: {
        id: "",
        name: "",
        avatar_url: "",
        level: 0,
        cardCount: 0
    },
    optionalCardData: null,
    optionalCardsData: new Map([[0, {
        id: "",
        name: "",
        sourceName: "",
        stars: 6,
        picture: ""
    }], [0, {
        id: "",
        name: "",
        sourceName: "",
        stars: 6,
        picture: ""
    }]]),
    content: [0, -0]
}