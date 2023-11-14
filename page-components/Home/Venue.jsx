import { Container, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
// import Venue1 from "../../public/backgrounds/venue1.JPG";
// import Venue2 from "../../public/backgrounds/venue2.JPG";
import { useEffect, useState } from "react";

export default function Index({ venueRef }) {
  const [img, setImg] = useState(true);
  const [time, setTime] = useState(5);
  useEffect(() => {
    if (time > 0) {
      setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    }
    if (time === 0) {
      setImg(!img);
      setTime(5);
    }
  }, [img, time]);

  return (
    <>
      <Box
        ref={venueRef}
        width={"100%"}
        sx={{
          background: img
            ? `url('https://i.imgur.com/TaBfY45.jpg')`
            : `url('https://i.imgur.com/oKOCkRA.jpeg')`,
          //   background: `url('https://i.imgur.com/TaBfY45.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: { xl: "750px", lg: "630px", xs: "500px" },
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Box
          width={"100%"}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
        >
          <Container maxWidth={"lg"}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              mt={4}
            >
              <Box
                color={"#FFF"}
                fontSize={{ md: "47px", xs: "35px" }}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>The Event</Box>
                <Box ml={{ md: 1.5, xs: 1 }} fontWeight={600}>
                  Venue
                </Box>
              </Box>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"#c3c3c3"}
                mt={{ md: 3, xs: 2 }}
                mb={{ md: 4, xs: 3 }}
              >
                <Box
                  borderBottom={"2px solid #c3c3c3"}
                  height={"2px"}
                  width={{ md: "100px", xs: "130px" }}
                  sx={{ opacity: 0.5 }}
                />
                <LocationOnIcon sx={{ ml: 3, mr: 3 }} />
                <Box
                  borderBottom={"2px solid #c3c3c3"}
                  height={"2px"}
                  width={{ md: "100px", xs: "130px" }}
                  sx={{ opacity: 0.5 }}
                />
              </Box>
              <Box textAlign={"center"} color={"#bcbcbc"} maxWidth={"700px"}>
                Ahoy KIITians! Join us for Innovance in campus 7 and 17! Mark
                your calendars from 18th November to 19th November and be ready
                for unlimited fun!{" "}
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                mt={10}
              >
                {["Campus 7", "Campus 17"].map((each, index) => (
                  <Button
                    sx={{
                      ml: index ? 4 : 0,
                      borderRadius: "30px",
                      textTransform: "none",
                      py: 0.3,
                      px: 4,
                      fontSize: { md: "20px", xs: "16px" },
                      border: "1.5px solid #FFF",
                      "&:hover": {
                        // background: "#4763B7",
                        // border: '1.5px solid #4763B7'
                        border: "1.5px solid #FFF",
                      },
                    }}
                    onClick={async () => {
                      window.open(
                        index
                          ? "https://maps.app.goo.gl/KkV3Y8JSegmqX47x7"
                          : "https://maps.app.goo.gl/LX9dVmxx6YWW4Lev7",
                        "blank"
                       
                      );
                    }}
                    variant={"outlined"}
                    color={"white"}
                    disableElevation
                    key={index}
                  >
                    {each}
                  </Button>
                ))}
                {/* <Button
                  sx={{
                    ml: 0,
                    borderRadius: "30px",
                    textTransform: "none",
                    py: 0.3,
                    px: 4,
                    fontSize: { md: "20px", xs: "16px" },
                    border: "1.5px solid #FFF",
                    "&:hover": {
                      // background: "#4763B7",
                      // border: '1.5px solid #4763B7'
                      border: "1.5px solid #FFF",
                    },
                  }}
                  onClick={async () => {
                    window.open(
                      "https://goo.gl/maps/Szg68CUGrzvrLKED7",
                      "blank"
                    );
                  }}
                  variant={"outlined"}
                  color={"white"}
                  disableElevation
                >
                  Campus 17
                </Button> */}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
