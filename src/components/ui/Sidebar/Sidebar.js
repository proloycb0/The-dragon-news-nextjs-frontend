import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTopNews from '@/assets/side-top-news.png';
import SidebarNewsCard from './SidebarNewsCard';
import sideBottomNews from '@/assets/side-bottom-img.png';

const Sidebar = () => {
    return (
        <Box className='my-5'>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image width={800} src={sideTopNews} alt='side top news' />
                    </CardMedia>
                    <CardContent>
                        <p
                            className='
                                    w-[100px]
                                    bg-red-500
                                    px-2
                                    text-white
                                    my-5
                                    rounded
                        '
                        >Technology</p>
                        <Typography gutterBottom>
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By Proloy Chacroborty- Mar 18 2024
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Divider />

            <Stack my={3} columnGap={2}>
                <SidebarNewsCard/>
                <SidebarNewsCard/>
                <SidebarNewsCard/>
                <SidebarNewsCard/>
                <SidebarNewsCard/>
            </Stack>

            <Box>
                <Image 
                    src={sideBottomNews}
                    height={400}
                    width={350}
                    alt='rectangle world image'
                />
            </Box>
        </Box>
    );
};

export default Sidebar;