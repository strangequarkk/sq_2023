import "./intro-style.css";
// external css file adjusts font size at a smaller breakpoint, and places the h1 with a calculated height

export const Intro = () => {
  return (
    <section id='intro' className='relative h-screen max-w-[650px] mx-auto'>
      <div className='title-wrap'>
        <h1 className='font-heading text-[2.9rem] leading-[1.4em]'>
          Kae
          <br />
          <span className='font-heading block'>Unterseher</span>
        </h1>
      </div>
      <h2 className='font-heading text-right text-[2.1rem] leading-[1.4em] absolute bottom-[10rem] right-0'>
        Full-Stack
        <br />
        <span className='font-heading block'>Developer</span>
        <span className='font-fancy text-7xl leading-[0rem]'>&amp;</span>
        <span className='font-heading leading-[1.2rem] block'>Tutor</span>
      </h2>
    </section>
  );
};
