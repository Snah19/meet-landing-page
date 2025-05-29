import logo from './assets/logo.svg';
import mdHeroImage from "./assets/tablet/image-hero.png";
import womanInVideocallImage from "./assets/desktop/image-woman-in-videocall.jpg";
import womenInVideoChatingImage from "./assets/desktop/image-women-videochatting.jpg";
import menInMeeting from "./assets/desktop/image-men-in-meeting.jpg";
import manTextingImage from "./assets/desktop/image-man-texting.jpg";
import heroLeftImage from "./assets/desktop/image-hero-left.png";
import heroRightImage from "./assets/desktop/image-hero-right.png";

const App = () => {
  return (
    <>
      <header className='mt-12 xl:mt-20 mb-16'>
        <img className='block mx-auto' src={logo} alt="Logo" />
      </header>
      <main>
        <section className='mb-16'>
          <img className='xl:hidden w-[433px] md:w-[820px] h-[160px] md:h-[303px] mx-auto mb-12 md:mb-[4.5rem] object-cover' src={mdHeroImage} alt="Profile Pictures" />

          <div className='xl:flex justify-between h-[22.5rem] mb-16 md:mb-[7.5rem] xl:mx-auto'>
            <img className='hidden xl:block w-[394px] h-[303px]' src={heroLeftImage} alt="Profile Pictures" />
            <div className='xl:self-end'>
              <h1 className='md:w-[10ch] mb-6 xl:mb-8 md:mx-auto text-[2.5rem] md:text-[3rem] xl:text-[4rem] font-black text-center leading-110 tracking-0 text-slate-900'>Group Chat for Everyone</h1>
              <p className='md:w-[38ch] xl:w-[37ch] mb-6 xl:mb-8 md:mx-auto text-[1rem] xl:text-[1.125rem] font-medium text-center leading-150 tracking-0 text-slate-600'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
              <div className='flex justify-center flex-wrap gap-4 w-full'>
                <a className='py-4 px-[2.5rem] text-base font-black leading-150 tracking-normal bg-[var(--cyan-600)] hover:bg-[#71C0D4] text-white rounded-full' href="#">Download &nbsp;<span className='leading-150 tracking-0 text-[var(--cyan-300)]'>v1.3</span></a>
                <a className='py-4 px-[2.5rem] text-base font-black leading-150 tracking-normal bg-[var(--purple-600)] hover:bg-[#B18BDD] text-white rounded-full' href="#">What is it?</a>
              </div>
            </div>
            <img className='hidden xl:block xl:self-end w-[394px] h-[303px]' src={heroRightImage} alt="Profile Pictures" />
          </div>

          <div className='mx-auto'>
            <div className="w-px h-20 mx-auto bg-[var(--slate-300)]"></div>
            <div className='w-14 h-14 mx-auto flex justify-center items-center border border-[var(--slate-300)] rounded-full'>
              <p className='text-base font-black leading-150 tracking-normal text-[var(--slate-600)]'>01</p>
            </div>
          </div>
        </section>

        <section className='mx-[2.1875rem] md:mx-0'>
          <div className='grid grid-cols-2 md:grid-cols-4 w-max gap-4 md:gap-x-6 xl:gap-x-8 mb-16 mx-auto'>
            <img className='w-[147.5px] md:w-[152px] xl:w-[256px] h-[144px] md:h-[160px] xl:h-[256px] rounded-lg object-cover' src={womanInVideocallImage} alt="Women In Videocall Image" />
            <img className='w-[147.5px] md:w-[152px] xl:w-[256px] h-[144px] md:h-[160px] xl:h-[256px] rounded-lg object-cover' src={womenInVideoChatingImage} alt="Women In Video Chating Image" />
            <img className='w-[147.5px] md:w-[152px] xl:w-[256px] h-[144px] md:h-[160px] xl:h-[256px] rounded-lg object-cover' src={menInMeeting} alt="Women In Meeting Image" />
            <img className='w-[147.5px] md:w-[152px] xl:w-[256px] h-[144px] md:h-[160px] xl:h-[256px] rounded-lg object-cover' src={manTextingImage} alt="Man Texting Image" />
          </div>
          <div className='mb-24 md:mb-16 xl:mb-[4.5rem] text-center'>
            <p className='mb-4 text-[0.75rem] md:text-[0.875rem] xl:text-[1rem] font-black leading-110 tracking-[0.25rem] uppercase text-[var(--cyan-600)]'>Built for modern use</p>
            <h2 className='md:w-[17ch] xl:w-[16ch] md:mx-auto mb-[2rem] text-[2rem] md:text-[2.25rem] xl:text-[2.5rem] font-black leading-110 tracking-normal text-[var(--slate-900)]'>Smarter meetings, all in one place</h2>
            <p className='md:w-[47ch] xl:w-[46ch] md:mx-auto text-[1rem] xl:text-[1.125rem] font-medium leading-150 tracking-normal text-[var(--slate-600)]'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
          </div>
          <div className='z-10 relative mb-[-1.75rem] mx-auto'>
            <div className="w-px h-20 mx-auto bg-[var(--slate-300)]"></div>
            <div className='w-14 h-14 mx-auto flex justify-center items-center border border-[var(--slate-300)] rounded-full bg-[var(--white)]'>
              <p className='text-base font-black leading-150 tracking-normal text-[var(--slate-600)]'>02</p>
            </div>            
          </div>
        </section>
      </main>

      <footer className='relative py-16 px-9 md:px-[8.25rem] xl:py-28 xl:px-0 text-center text-[var(--white)] bg-desktop-footer bg-cover bg-top bg-no-repeat'>
        {/* ---------- Overlay ---------- */}
        <div className="absolute inset-0 bg-[var(--cyan-600)] opacity-80"></div>
        {/* ---------- Content ---------- */}
        <div className='relative flex flex-col xl:flex-row gap-y-6 items-center max-w-[70rem] xl:mx-auto rounded-lg'>
          <h2 className='xl:w-[12ch] text-[2rem] md:text-[2.25rem] xl:text-[2.5rem] font-black leading-110 tracking-normal xl:text-left'>Experience more together</h2>
          <p className='md:w-[47ch] xl:w-[30ch] md:mx-auto text-[1rem] xl:text-[1.125rem] font-medium leading-150 tracking-[0px] xl:text-left'>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
          <a className='py-4 px-10 text-base font-black leading-150 tracking-normal bg-[var(--purple-600)] hover:bg-[#B18BDD] text-white rounded-full'href="#">Download &nbsp;<span className='leading-150 tracking-0 text-[var(--purple-300)]'>v1.3</span></a>
        </div>
      </footer>

    </>
  );
};

export default App;
