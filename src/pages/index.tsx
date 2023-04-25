import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

interface DescriptionLinkProps {
  href: string;
  children: React.ReactNode;
}
const DescriptionLink = ({ href, children }: DescriptionLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    bg="yellow.100"
    px={1}
    py={0.5}
    color="stone.900"
    rounded="md"
    fontWeight="semibold"
  >
    {children}
  </Link>
);

const GITHUB_URL = "https://github.com/jonahallibone";
const LINKEDIN_URL = "https://linkedin.com/in/jonah-allibone-8988a5108/";
const TEMELIO_URL = "https://trytemelio.com/";
interface SocialButtonLinkProps {
  href: string;
  children: React.ReactNode;
  icon: IconType;
}

const SocialButtonLink = ({ href, icon, children }: SocialButtonLinkProps) => (
  <Button
    _hover={{
      textDecoration: "none",
    }}
    as={Link}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    leftIcon={<Icon as={icon} fill="orange.400" boxSize={6} />}
  >
    {children}
  </Button>
);

const Home = () => (
  <Box bg="stone.900" h="100%">
    <Container h="100%" maxW="xl">
      <Head>
        <title>Jonah&apos;s Personal Website</title>
      </Head>
      <Center h="100%">
        <Flex direction="column" alignItems="stretch">
          <Heading as="h1" size="2xl" color="white">
            Jonah Allibone
          </Heading>
          <Heading as="h2" size="xl" color="orange.300" mt={4} mb={0}>
            UI engineer and product developer
          </Heading>
          <Text fontSize="xl" color="gray.200" my={8}>
            I am a UI engineer and product developer with a passion for building
            intuitive and accessible user experiences. I am currently a{" "}
            <DescriptionLink href={LINKEDIN_URL}>
              Founding Engineer
            </DescriptionLink>{" "}
            in New York City at{" "}
            <DescriptionLink href={TEMELIO_URL}>Temelio</DescriptionLink>.
          </Text>
          <HStack>
            <SocialButtonLink href={GITHUB_URL} icon={RiGithubFill}>
              Github
            </SocialButtonLink>
            <SocialButtonLink href={LINKEDIN_URL} icon={RiLinkedinBoxFill}>
              LinkedIn
            </SocialButtonLink>
          </HStack>
        </Flex>
      </Center>
    </Container>
  </Box>
);

export default Home;
