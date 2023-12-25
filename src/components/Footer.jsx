import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
// import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (

    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} textAlign={['center', 'left']}>
        <Stack direction={['column', 'row']} >
            <VStack alignItems={'stretch'} px={4} w={'full'} mb={'8 '} > 

            <Heading size={'md'} textTransform={'uppercase'}>
                Subscribe for more updates
            </Heading>

            <HStack
                borderBottom={'2px solid white'}
                py={'2'}
            >

                <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />

                <Button 
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                >
                    <AiOutlineSend size={20 } />
                </Button>
            </HStack>

            </VStack>

            <VStack 
            w={'full'} 
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            mb={'4'} 
            >
                <Heading 
                    textTransform={'uppercase'}
                    textAlign={'center'}
                >
                    Video Hub
                </Heading>
                <Text >
                    All rights reserved.
                </Text>
            </VStack>

            <VStack w={'full'}  mb={'4'} >
                <Heading 
                textTransform={'uppercase'}
                size={'md'}
                >Social Media</Heading>
                <Button 
                variant={'link'}
                colorScheme={'whiteAlpha'} >
                    <a href='https://github.com/athrvwebdev'>GitHub </a>
                </Button>
                <Button 
                variant={'link'}
                colorScheme={'whiteAlpha'} >
                    <a href='https://instagram.com/sarcastharv'>Instagram </a>
                </Button>
                <Button 
                variant={'link'}
                colorScheme={'whiteAlpha'} >
                    <a href='https://gmail.com/atharvamk6@gmail.com'>Gmail </a>
                </Button>
                <Button 
                variant={'link'}
                colorScheme={'whiteAlpha'} >
                    <a href='https://snapchat.com/athrvklrni'>Snapchat </a>
                </Button>

            </VStack>

        </Stack>

    </Box>
    
  )
}

export default Footer