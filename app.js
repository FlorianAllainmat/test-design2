window.onload = function() {
    let tl = new TimelineMax();

    tl 
        .to('.gauche h2', 2, {delay: 0.5, opacity: 0, y: -100, ease: Expo.easeInOut})

        .to('.gauche', 2, {top: "-150%", autoAlpha: 0, ease: Expo.easeInOut}, '-=1')

        .to('.droite h2', 2, {opacity: 0, y: +60, ease: Expo.easeInOut}, '-=2')

        .to('.droite', 2, {top: "+100%", autoAlpha: 0, ease: Expo.easeInOut}, '-=1.5')


        .from('.nav', 1, {opacity: 0, y: -60, ease: Expo.easeInOut}, 3.5)

        .from('h1', 1, {opacity: 0, x: 200, ease: Expo.easeOut}, 3.5)

        .from('.social li', 0.75, {opacity: 0, y: 360, ease: Expo.easeOut}, 4)

        .staggerFrom('i', 0.5, {opacity: 0, x: -160, ease: Expo.easeInOut}, 0.35, 4.25)
}