const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?q=10&h=200",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, animi harum voluptatibus eveniet delectus, libero iste natus, hic dolorem quis perferendis tenetur. Temporibus corporis doloremque deserunt placeat inventore? Assumenda, consequatur!"
    },
    {
        id: 2,
        name: "michael smith",
        job: "web designer",
        img: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, animi harum voluptatibus eveniet delectus, libero iste natus, hic dolorem quis perferendis tenetur. Temporibus corporis doloremque deserunt placeat inventore? Assumenda, consequatur!"
    },
    {
        id: 3,
        name: "talia perez",
        job: "web developer",
        img: "https://us.123rf.com/450wm/sementsovalesia/sementsovalesia1904/sementsovalesia190400661/122168009-mujer-morena-en-ropa-casual-que-expresa-disgusto-no-le-gusta-algo-posando-aislado-sobre-fondo.jpg?ver=6",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, animi harum voluptatibus eveniet delectus, libero iste natus, hic dolorem quis perferendis tenetur. Temporibus corporis doloremque deserunt placeat inventore? Assumenda, consequatur!"
    },
    {
        id: 4,
        name: "javier poveda",
        job: "web designer",
        img: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, animi harum voluptatibus eveniet delectus, libero iste natus, hic dolorem quis perferendis tenetur. Temporibus corporis doloremque deserunt placeat inventore? Assumenda, consequatur!"
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
})

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click", function() {
    currentItem++;
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function() {
    currentItem--;
    showPerson(currentItem)
})