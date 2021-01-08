// method -> obj
// function -> global(window, global);

const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};

video.play();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');


function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Damini' }, 1, 2); // { name: 'Damini' }
playVideo.apply({ name: 'Damini' }, [1, 2]);  // { name: 'Damini' }
playVideo.bind({ name: 'Damini' })(); // { name: 'Damini' }
