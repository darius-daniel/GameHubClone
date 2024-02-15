import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

export default function SearchInput() {
  return (
    <InputGroup size="lg">
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search"
        variant="filled"
        role="search"
        borderRadius={20}
      />
    </InputGroup>
  );
}
