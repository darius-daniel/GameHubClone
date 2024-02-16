import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup size="lg">
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}
