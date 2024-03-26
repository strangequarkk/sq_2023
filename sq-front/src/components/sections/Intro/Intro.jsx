import "./intro-style.css";
// external css file adjusts font size at a smaller breakpoint, and places the h1 with a calculated height

export const Intro = () => {
  return (
    <section id='intro'>
      <div className='title-wrap'>
        <h1 className='font-heading'>
          Kae
          <br />
          <span className='font-heading'>Unterseher</span>
        </h1>
      </div>
      <h2 className='font-heading'>
        Full-Stack
        <br />
        <span className='font-heading line-2'>Developer</span>
        <span className='font-fancy'>&amp;</span>
        <span className='font-heading leading-[1.2rem] block'>Tutor</span>
      </h2>
    </section>
  );
};
