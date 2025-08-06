const catImages = {
    0: "https://cataas.com/cat?width=400&height=300&v=1",
    1: "https://cataas.com/cat?width=400&height=300&v=2",
    2: "https://cataas.com/cat?width=400&height=300&v=3",
    3: "https://cataas.com/cat?width=400&height=300&v=4",
    4: "https://cataas.com/cat?width=400&height=300&v=5",
    5: "https://cataas.com/cat?width=400&height=300&v=6",
    6: "https://cataas.com/cat?width=400&height=300&v=7",
    7: "https://cataas.com/cat?width=400&height=300&v=8",
    8: "https://cataas.com/cat?width=400&height=300&v=9",
    9: "https://cataas.com/cat?width=400&height=300&v=10"
};


let imgNumber = Math.floor(Math.random() * 10);

imgBox = document.getElementById("imgBox");
imgBox.src = catImages[imgNumber];

const imgChange = (direction) => {
    const step = direction === 'left' ? -1 : 1
    imgNumber = (imgNumber + step + 10) % 10
    imgBox.src = catImages[imgNumber]
}
