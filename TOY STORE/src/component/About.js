import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AboutUs = () => {
  const customTextStyle = {
    fontFamily: 'Times New Roman',
    fontSize: '20px',
    color: 'black',
    textAlign: 'justify',
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h2" gutterBottom style={{ fontFamily: 'Times New Roman', fontSize: '36px', color: 'white',backgroundColor:'black' }}>
        About Us
      </Typography>
      <Box my={3}>
        <Typography variant="body1" style={{ fontFamily: 'Times New Roman', fontSize: '30px', color: 'white' ,backgroundColor:'black'}}>
          Welcome To TOYFINITY
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Times New Roman', fontSize: '40px'}}>
                Our Story
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              Welcome to TOYFINITY, where the magic of childhood is at the heart of everything we do. Founded in 2015 by a group of parents and toy enthusiasts, our store was born out of a desire to create a haven for families seeking toys that inspire, captivate, and spark the imagination. A team of dedicated individuals who live and breathe the world of toys. With backgrounds in education, child development, and, of course, play, our team is here to guide you in finding the perfect toys for every age and stage.As an integral part of the community, ToyBox Treasures is committed to giving back. From hosting playdates to supporting local schools, we believe in creating lasting connections that extend beyond the walls of our store.           </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom style={{ fontFamily: 'Times New Roman', fontSize: '40px'}}>
                Our Mission
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              At TOYFINITY, we're on a mission to curate a collection of toys that go beyond mere entertainment. We believe in the power of play to shape young minds, foster creativity, and create cherished memories. Every toy on our shelves is handpicked for its quality, uniqueness, and ability to ignite the joy of discovery.           </Typography>
              <Typography variant="body2" style={customTextStyle}>
              Customer Experience: Focus on providing exceptional customer service and ensuring a pleasant buying experience for the customers. 
              </Typography>
              <Typography variant="body2" style={customTextStyle}>
              Continuous Improvement: Express a commitment to continuous improvement, whether it's through the innovation, service enhancements, or working on to the customer feedback and improve the customer's experience in monthly basis.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more sections as needed */}
      </Grid>
    </Container>
  );
};

export default AboutUs;
