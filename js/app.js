const tl = gsap.timeline({ defaults : { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1});
tl.fromTo(".img", { opacity : 0 }, { opacity:1, duration:1});
tl.fromTo(".title", { opacity : 0 }, { opacity:1, duration:1}, "-=1");
tl.fromTo(".items", { opacity : 0 }, { y: -10, opacity:1, duration:1});
