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
