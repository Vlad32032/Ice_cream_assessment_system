const childrenList = [
    {
        name: "Пиздюк Обыкновенный",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    },
    {
        name: "Пиздючка Обыкновенная",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    },
    {
        name: "Пиздюк Особенный",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    },
    {
        name: "Пиздючка Особенная",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    },
    {
        name: "Пиздюк Мелкий",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    },
    {
        name: "Пиздючка Крупная",
        littleIcecream: 0,
        bigIcecream: 0,
        hide: false
    }
];

// --- nodes ---

const childrenListElement = document.getElementById("childrenListElement");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const restartButton = document.getElementById("restart");

// --- actions ---

let actionChildren = undefined;
let actionIcecreamType = "littleIcecream";

// --- function ---

function getChildrenTamplate(children, index) {
    return `
        <li class="${actionChildren === index ? "active-li": ""} ${children.hide ? "hide-li" : "show-li"}">
            <div class="isecream-wrapper">
                <button data-index="${index}" data-type="hide">&times;</button>
                <h3 >${children.name}</h3>
            </div>
            <div class="isecream-wrapper">
                <div class="${(actionChildren === index && actionIcecreamType === "littleIcecream") ? "active-icecream" : ""}">
                    <img src="./images/svg/icecream-svgrepo-com.svg">
                    <span>${children.littleIcecream}</span>
                    <div class="action-div" data-type="littleIcecream" data-index="${index}"></div>
                </div>
                <div class="${(actionChildren === index && actionIcecreamType === "bigIcecream") ? "active-icecream" : ""}">
                    <img src="./images/svg/icecream-svgrepo-com.svg">
                    <span>${children.bigIcecream}</span>
                    <div class="action-div" data-type="bigIcecream" data-index="${index}"></div>
                </div>
            </div>
        </li>
    `
}

function render(arr) {
    childrenListElement.innerHTML = "";

    // if (arr.length === 0) {
    //     return;
    // };

    for (let i = 0; i < arr.length; i++) {
        childrenListElement.insertAdjacentHTML("beforeend", getChildrenTamplate(arr[i], i))
    };
};

// --- action ---

childrenListElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = Number(event.target.dataset.index);
        const type = event.target.dataset.type;
        console.log(type)
        console.log(index)

        actionChildren = index;

        if(type === "littleIcecream") {
            actionIcecreamType = "littleIcecream";
        } else if (type === "bigIcecream") {
            actionIcecreamType = "bigIcecream";
        } else if (type === "hide") {
            console.log("hide")
            childrenList[index].hide = true;
        };

        render(childrenList);
    };
};

incrementButton.onclick = function () {
    if (actionIcecreamType === "littleIcecream") {
        childrenList[actionChildren].littleIcecream += 1;
    } else if (actionIcecreamType === "bigIcecream") {
        childrenList[actionChildren].bigIcecream += 1;
    }
    
    render(childrenList);
};

decrementButton.onclick = function () {
    if (actionIcecreamType === "littleIcecream") {
        childrenList[actionChildren].littleIcecream -= 1;
    } else if (actionIcecreamType === "bigIcecream") {
        childrenList[actionChildren].bigIcecream -= 1;
    }

    render(childrenList);
};

restartButton.onclick = function () {
    actionChildren = undefined;
    actionIcecreamType = "littleIcecream";


    for (let i = 0; i < childrenList.length; i++) {
        childrenList[i].littleIcecream = 0;
        childrenList[i].bigIcecream = 0;
        childrenList[i].hide = false;
    };

    render(childrenList);
}

render(childrenList);