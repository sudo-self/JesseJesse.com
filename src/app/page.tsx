import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <a href="https://timeofday.jessejesse.workers.dev">☎&nbsp;</a>
          <code className="font-mono font-bold"><a href="https://JesseJesse.com">JesseJesse.com</a></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://timeofday.jessejesse.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            local time{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://xo.jessejesse.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            tic-tac-toe{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         A multiplayer tic-tac-toe game
          </p>
        </a>

        <a
          href="https://bot.jessejesse.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
             Chat Bot{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          A Chat GPT UI Clone using open AI
          </p>
        </a>

        <a
          href="https://sudo-self.github.io"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
             Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Jekyll themed markdown hosted with github pages.
          </p>
        </a>

        <a
          href="https://retro.jessejesse.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Retro{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
           Zero config retro gaming console. 100% in web browser. 
          </p>
        </a> 
        <a
          href="https://one.jessejesse.com/1?data=eyJuIjoiSmVzc2UgUm9wZXIiLCJkIjoiQi5TLiBJbmZvcm1hdGlvbiBUZWNobm9sb2d5LCBDVFUuIDIwMjJcblxuXG5cblxuIiwiaSI6Imh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENTYwM0FRR1J5UXkzSjhDRXZ3L3Byb2ZpbGUtZGlzcGxheXBob3RvLXNocmlua180MDBfNDAwLzAvMTY5NDM2NTY4MzkxOD9lPTE3MDI1MTIwMDAmdj1iZXRhJnQ9NjhlV2dFdjhrODhGejVPRzRiWVFSMGR3bW40R2dDN2pMT2tzS0RkVnExRSIsImYiOiIiLCJ0IjoiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbG9zdG15aXBhZCIsImlnIjoiIiwiZ2giOiJodHRwczovL2dpdGh1Yi5jb20vc3Vkby1zZWxmIiwidGciOiIiLCJsIjoiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pyc2RldmVsb3BtZW50cy8iLCJlIjoiamVzc2VAamVzc2VqZXNzZS5jb20iLCJ3IjoiMTcxOTQzMjc4MDYiLCJ5IjoiIiwibHMiOlt7ImkiOiJzdmctc3Bpbm5lcnM6d2lmaS1mYWRlIiwibCI6ImlQdjQgVG9vbCIsInUiOiJodHRwczovL2lwLmplc3NlamVzc2UuY29tIn0seyJpIjoiZ2FtZS1pY29uczphbmNpZW50LXN3b3JkIiwibCI6IlBsYXkgTm93IiwidSI6Imh0dHBzOi8vdHlzb24uamVzc2VqZXNzZS5jb20ifSx7ImkiOiJmbHVlbnQtZW1vamktaGlnaC1jb250cmFzdDp3aGFsZSIsImwiOiJUaGUgT2NlYW4iLCJ1IjoiaHR0cHM6Ly9uZW1vLmplc3NlamVzc2UuY29tIn0seyJpIjoidGFibGVyOmFsaWduLWJveC1ib3R0b20tY2VudGVyIiwibCI6IkJsb2ciLCJ1IjoiaHR0cHM6Ly9zdWRvLXNlbGYuZ2l0aHViLmlvLyJ9LHsiaSI6Imljb21vb24tZnJlZTpjcmVkaXQtY2FyZCIsImwiOiJDYXNoIGFwcCIsInUiOiJodHRwczovL2Nhc2hhcHAuamVzc2VqZXNzZS5jb20ifSx7ImkiOiJpY29tb29uLWZyZWU6ZG93bmxvYWQiLCJsIjoiRG93bmxvYWQgTXkgUmVzdW1lICIsInUiOiJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFtS2xsV3V4TERUZy1leUZmcllTNUhzVE1fVU11N3RhTC9lZGl0P3VzcD1zaGFyaW5nJm91aWQ9MTEzNDYyNjg0MzU1MzY3MjIwMjE4JnJ0cG9mPXRydWUmc2Q9dHJ1ZSJ9XX0="
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          A mini base64 link-in-bio from one.jessejesse.com
          </p>
        </a>
        <a
          href="https://sunshine.jessejesse.workers.dev"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Geo Weather{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         location based weather report
          </p>
        </a>
        <a
          href="https://hangman.jessejesse.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Hangman{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         Guess the word before its too late
          </p>
        </a>
        <a
          href="https://sudo-self-com.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            sudo-self.com{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         A domain developed by me and hosted with vercel
          </p>
        </a>
      </div>
    </main>
  )
}

