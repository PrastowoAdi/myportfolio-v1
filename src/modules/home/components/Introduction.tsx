import Image from "@/common/components/elements/Image";
import ThemeToggle from "@/common/components/elements/ThemeToggle";
import { PROFILE_URL } from "@/common/constant";

export default function Introduction() {
  return (
    <section className='bg-cover bg-no-repeat space-y-2'>
      <div className='flex justify-between items-center gap-5 mb-7'>
        <div className='flex flex-row items-center gap-5'>
          <Image src={PROFILE_URL} alt='profile' width={80} height={80} rounded='rounded-full' />
          <div className='space-y-1'>
            <div className='flex'>
              <div className='flex gap-2 text-xl lg:text-3xl font-medium font-sora'>
                <h1>Hi, I&apos;m Prastowo Adi</h1> <div className='ml-1 animate-waving-hand'>👋</div>
              </div>
            </div>

            <div className='space-y-4'>
              <ul className='flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400'>
                <li>Frontend Enginner</li>
                <li>
                  Based in Jakarta <span className='ml-1'>🇮🇩</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='pr-5'>
          <ThemeToggle />
        </div>
      </div>
      <p className='leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300'>
        Frontend Development enthusiast and highly experienced software engineer. Using NextJS and TypeScript as the
        technology, I am currently a Frontend Engineer. Collaboration-focused team members are dedicated to creating
        online apps that are useful, scalable, and aesthetically beautiful.
      </p>
    </section>
  );
}
