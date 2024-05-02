import React from "react";
import { Box, Flex, Text, Button, Image, VStack, HStack, Heading, Container, SimpleGrid, Input, Textarea, useColorModeValue, IconButton, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p={4} justifyContent="space-between" alignItems="center" bg={bgColor} color={textColor}>
        <Heading as="h1" size="lg">
          Tetrakt
        </Heading>
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Portfolio</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex justifyContent="center" alignItems="center" bg="blue.600" color="white" height="400px">
        <VStack>
          <Heading as="h2" size="2xl">
            Innovative Solutions
          </Heading>
          <Text fontSize="xl">Leading the way in creative digital engagement</Text>
          <Button mt={4} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Services Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ServiceBox title="Web Development" description="Modern and responsive web design and development services." />
          <ServiceBox title="Branding" description="Complete branding solutions that reflect your brand identity." />
          <ServiceBox title="Digital Marketing" description="Comprehensive digital marketing strategies to boost your visibility." />
        </SimpleGrid>
      </Container>

      {/* Portfolio Section */}
      <Box bg={bgColor} py={10}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={6}>
            Portfolio
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTcxNDY2NzA1N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
            <Image src="https://images.unsplash.com/photo-1554774853-719586f82d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZ3xlbnwwfHx8fDE3MTQ2NjcwNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Image src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MHx8fHwxNzE0NjY3MDU4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="xl" mb={6}>
          Contact Us
        </Heading>
        <VStack spacing={4} as="form">
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue" size="lg">
            Send Message
          </Button>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.700" color="gray.200" py={4}>
        <Container maxW="container.xl" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Tetrakt. All rights reserved.</Text>
          <HStack justifyContent="center" spacing={4} mt={4}>
            <SocialIcon icon={FaFacebookF} />
            <SocialIcon icon={FaInstagram} />
            <SocialIcon icon={FaLinkedinIn} />
            <SocialIcon icon={FaTwitter} />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

const ServiceBox = ({ title, description }) => (
  <VStack bg="white" p={4} borderRadius="md" boxShadow="md">
    <Heading as="h4" size="md">
      {title}
    </Heading>
    <Text>{description}</Text>
  </VStack>
);

const SocialIcon = ({ icon }) => <IconButton aria-label="Social media link" icon={<Icon as={icon} />} isRound size="lg" variant="ghost" colorScheme="gray" />;

export default Index;
