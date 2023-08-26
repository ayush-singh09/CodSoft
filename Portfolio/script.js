const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function mouseskew(){
    var xpos=1, ypos=1;
    var xprev=0, yprev=0;   

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;


        CircleMouseFollower(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;

        },100)
    })
}
function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to("#boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1.5,
        stagger: .2

    })
    tl.from(".linked", {
        y: '20',
        opacity: 0,
        duration: 1.5,
        delay: -1.5,
        ease: Expo.easeInOut
    })
}
function CircleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}


mouseskew()

firstPageAnimation();

CircleMouseFollower();