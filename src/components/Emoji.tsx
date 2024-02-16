import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

interface Props {
  rating: number;
}

export default function Emoji({ rating }: Props) {
  if (rating > 3) {
    const emojiMap: { [key: number]: ImageProps } = {
      3: { src: meh, alt: 'meh', boxSize: '25px' },
      4: { src: thumbsUp, alt: 'Recommended', boxSize: '25px' },
      5: { src: bullsEye, alt: 'Exceptional', boxSize: '35px' },
    };
    return <Image {...emojiMap[rating]} marginBottom={5} />;
  }
}
