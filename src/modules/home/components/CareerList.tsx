import Link from 'next/link';

import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/common/constant/careers';

import CareerCard from './CareerCard';

const RESUME_URL = 'https://drive.google.com/file/d/1_r3e7bTmSrhV6Iwerr9WmeYhH9lBOnRL/view?usp=sharing';

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="">My professional career journey.</p>
          <Link
            href={RESUME_URL}
            target="_blank"
            passHref
            className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600  hover:text-neutral-700"
            data-umami-event="Download Resume"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </Link>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CAREERS?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  );
}
