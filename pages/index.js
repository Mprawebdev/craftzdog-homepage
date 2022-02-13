import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '.ks/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Bo
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hai, Nama saya Mochamad Pratama Mukti Dari Indonesia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mochamad Pratama Mukti
          </Heading>
          <p>Anak Nolep ( Wibu nolep bro )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hai, Nama saya Mochamad Pratama Mukti Dari Indonesia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mpratama
          </Heading>
          <p>Anak Nolep ( Mencari sebuah Inspirasi )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/mpratama.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          Mpratama adalah seorang siswa kelas 12 Multimedia 2 dari sekolah SMKN 1 Driyorejo. 
          dia adalah seorang siswa pendiam yang hobbynya suka sekali bermain hp.
          dia adalah anak nolep yang suka menonton anime, film, manhua, manhwa, dan komik.
          karena sudah mau lulus dia sedikit pusing memikirkan masa depan yang akan dijalaninya nanti.
          tidak lupa dia juga mempromosikan app dari bang takuya yang bernama{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Lahir di Surabaya, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Lulus SD
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Lulus SMP
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Kelas 12 SMKN 1 DRIYOREJO
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://194.163.183.129/" target="_blank">
            Anime
          </Link>
          , Playing Games,{' '}
          <Link href="https://sektekomik.com/" target="_blank">
            Komik
          </Link>
          , Film
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Mprawebdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Mprawebdev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Mpratama263" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Mpratama263
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/mochamadpratamamukti/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @mochamadpratamamukti
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/mochamadpratama.mukti.9" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @mochamadpratamamukti
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://youtube.com/channel/UCyCJqetrXr52hfMFRDPMwJg"
            title="Mpratama"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mpratama adalah seorang siswa kelas 12 Multimedia 2 dari sekolah SMKN 1 Driyorejo. 
          dia adalah seorang siswa pendiam yang hobbynya suka sekali bermain hp.
          dia adalah anak nolep yang suka menonton anime, film, manhua, manhwa, dan komik.
          karena sudah mau lulus dia sedikit pusing memikirkan masa depan yang akan dijalaninya nanti.
          tidak lupa dia juga mempromosikan app dari bang takuya yang bernama{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Lahir di Surabaya, Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Lulus SD
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Lulus SMP
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Kelas 12 SMKN 1 DRIYOREJO
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://194.163.183.129/" target="_blank">
            Anime
          </Link>
          , Playing Games,{' '}
          <Link href="https://sektekomik.com/" target="_blank">
            Komik
          </Link>
          , Film
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Mprawebdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Mprawebdev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Mpratama263" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @Mpratama263
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook/mochamadpratama.mukti.9" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @mochamadpratama.mukti.9
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mochamadpratamamukti" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://youtube.com/channel/UCyCJqetrXr52hfMFRDPMwJg"
            title="Mpratama"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
