const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((element) => {
      // console.log("ingreso o salio")
      if (element.isIntersecting) {
        element.target.play();
      } else {
        element.target.pause();
      }

      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? element.target.play()
          : element.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.8 });

  $videos.forEach((el) => {
    // console.log("elemento", el)
    observer.observe(el);
  });
}
