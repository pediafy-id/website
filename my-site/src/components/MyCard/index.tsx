import * as React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface MyCardProps {
  title: string;
  description: string;
  imagePath: string; // Path relatif ke gambar dalam folder 'static'
}

const MyCardComponents: React.FC<MyCardProps> = ({ title, description, imagePath }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagePath} // Menggunakan path relatif
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCardComponents;