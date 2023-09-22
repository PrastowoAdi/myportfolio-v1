import { MeProfile } from "./MeProfile";
import SocialMedia from "@/common/components/elements/SocialMedia";
import { SOCIAL_MEDIA } from "@/common/constant/menu";

interface IProps {
  data: any;
}

export default function MeSection({ data }: IProps) {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);
  return (
    <>
      <MeProfile data={data} />
      <SocialMedia items={filteredSocialMedia} isMePage />
    </>
  );
}
