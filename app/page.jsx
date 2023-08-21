import '@styles/globals.css'
import Feed from '@components/feed'



const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
       <h1 className='head_text text-center'>Discover & share <br className='max-md:hidden' />
       <span className='orange_gradient text-center'>AI-Powered Prompts</span></h1>
       <p className='desc text-center'>
        Promptzy is an open-source AI prompting tool for modern world to discover , create and share creative prompts 
       </p>
       <Feed></Feed>
       {/* feed */}
    </section>
  )
}

export default Home