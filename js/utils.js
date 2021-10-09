function generateRandomImage(){
    let randomNr = 300 + Math.floor(Math.random() * 100);
    return 'https://unsplash.it/400/' + randomNr;
}