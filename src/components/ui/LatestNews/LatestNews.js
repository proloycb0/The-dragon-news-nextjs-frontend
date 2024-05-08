import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import topNews from '@/assets/top-news.png';
import topNews2 from '@/assets/top-news2.png';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
    const { data } = await getAllNews();
    // console.log(data[0])

    return (
        <Box className='my-5'>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image width={800} height={500} src={data[0].thumbnail_url} alt='top news' />
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
                        >{data[0].category}</p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[0].title}
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By {data[0].author.name}- {data[0].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "..." : data[0].details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(0, 4).map((news) => (
                        <Grid key={news._id} item xs={6}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            "& img": {
                                                width: "100%",
                                                height: "250px",
                                            },
                                        }}
                                    >
                                        <Image width={800} height={100} src={news.thumbnail_url} alt='top news' />
                                    </CardMedia>
                                    <CardContent>
                                        <span
                                            className='
                                              bg-red-500
                                                px-2
                                              text-white
                                                my-3
                                                rounded
                        '
                                        >{news.category}</span>
                                        <Typography gutterBottom variant='h6'>{news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}</Typography>
                                        <Typography gutterBottom className='my-2'>
                                            By {news.author.name}- {news.author.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 180 ? news.details.slice(0, 180) + "..." : news.details}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default LatestNews;