import React from 'react'
import { Button, Stack } from '@chakra-ui/react';

const Tabs = () => {
    return (
        <Stack spacing={4} direction='row' justifyContent={'center'}>
            <Button colorScheme='teal'>Currency</Button>
            <Button colorScheme='teal' variant='outline'>Cryptocurrency</Button>
        </Stack>
    );
}

export default Tabs;