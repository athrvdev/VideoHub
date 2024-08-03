import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% , -50% )',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl'
  }

const imageOptions = {
  w: 'full',
  h: 'full',
  objectFit: 'cover'
}

const Home = () => {
  return (
    <Box>
<MyCarousel />

<Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
  <Heading textTransform={'uppercase'} m={'auto'} py='2' w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>

    {/* in chakra-ui react we can pass 2 values in an array inside a tag to ensure responsive design , first value is value on smaller screen and 2nd value is for larger screen  */}
    <Stack 
    h={'full'}
    p={'4'}
    alignItems={'center'}
    direction={['column', 'row']} 
    >
      <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

      <Text letterSpacing={'widest'} textAlign={'center'} lineHeight={'190%'} p={['4', '16']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt quam? Nemo tempora ipsa et, sapiente vero perspiciatis debitis quia ullam libero laboriosam quos odit animi! Velit explicabo dicta, qui beatae voluptas omnis tempore assumenda sint enim voluptatum officia eum repudiandae illo facere corrupti possimus libero dolor numquam quia alias natus maxime. Voluptatum voluptates itaque aspernatur explicabo dicta iusto placeat libero maiores fuga mollitia delectus voluptatibus minus officiis rem, ad ipsa eum ea dolorum dolor saepe magni molestias! Voluptates qui assumenda modi nostrum id iste nulla. Quisquam, aut ratione cumque odio eaque, voluptas quidem porro doloribus possimus fugit molestiae magnam!
      </Text>

    </Stack>


</Container>



    </Box>
  )
}

const MyCarousel = () =>{

  

  return (
   <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

    <Box w={'full'} h={'100vh'}>
    <Image src={img1} {...imageOptions} />
    <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
      Watch The Future
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img2} {...imageOptions} />
    <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
      Gaming is the Future
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img3} {...imageOptions}/>
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Gaming on Console
    </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
    <Image src={img4} {...imageOptions}/>
    <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Night Life Is Cool
    </Heading>
    </Box>
   </Carousel>
  )
}

export default Home