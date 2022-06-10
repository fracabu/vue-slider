const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const appVue = new Vue({
	// selettore dell'elemento html dove avviare vue
    el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
    data: {
	  // varie chiavi necessarie all'app
    imgSrc:"img/01.jpg" + "img/02.jpg" + "img/03.jpg" + "img/04.jpg" + "img/05.jpg",
    
    },
	
	// Conterrà una serie di funzioni
	methods: {
		// funzioni che useremo nell'app

        changeImage(){
            const turnImg = Math.floor(Math.random() *100);
            this.imgSrc = `img/${turnImg}`;
        },
	}
});

