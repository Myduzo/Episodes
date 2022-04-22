import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Flex,
  SimpleGrid,
  AspectRatio,
} from "@chakra-ui/react";

const api = axios.create({
  baseURL: `https://api.sampleapis.com/futurama/episodes`
});

function App() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getEpisodes = async () => {
      try {
        const res = await api.get('/');
        setEpisodes(res.data);
      } catch (error) {
        console.log("error")
      }
    }
    getEpisodes();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        
        <Flex
          pt= "5rem"
          w="full"
          bg="#F9FAFB"
          p={10}
          alignItems="center"
          justifyContent="center"
        >
          <SimpleGrid
            columns={[1, 2, 3, 4]}
            gap="24px"
            mx="auto"
            textAlign={"left"}
          >
            {episodes.slice(0,5).map((item) =>
              <Card sx={{ maxWidth: 345 }}>
                <AspectRatio maxW='560px' ratio={1}>
                  <iframe
                    title={'video'}
                    src='https://www.youtube.com/embed/ScMzIvxBSi4'
                    allowFullScreen
                  />
                </AspectRatio>
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary">
                    {item.originalAirDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </SimpleGrid>
        </Flex>

      </header>
    </div>
  );
}

export default App;
