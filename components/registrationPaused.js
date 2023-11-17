import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Switch,
    HStack,
    Select,
    Progress,
    Stack,
    Button,
    Heading,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    useColorModeValue,
} from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Registerationpaused() {

    return (
        <div>
            <Flex
                minH={"10vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                        Registrations Closed 😊
                        </Heading>
                        <Heading fontSize={"2xl"} textAlign={"center"}>
                        Thank you for the overwhelming response to our event, registrations are now closed. We look forward to welcoming you to our next exciting event in the future!
                        </Heading>
                        {/* <Typography variant="body1">We are pleased with the overwhemling responses! See you in the event</Typography> */}
                    </Stack>
                </Stack>
            </Flex>
        </div>
    );
}
