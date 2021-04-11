import {
  Text,
  VStack,
  Code,
  Checkbox,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import { FaTwitter } from 'react-icons/fa';

const App = () => (
  <Layout>
    <VStack spacing={24} alignItems="flex-start" justifyContent="flex-start">
      <VStack spacing={4} alignItems="flex-start" justifyContent="flex-start">
        <Heading>Checklist</Heading>
        <VStack spacing={2} alignItems="flex-start" justifyContent="flex-start">
          <Checkbox>
            <Text fontSize="lg">GitHub repo created</Text>
          </Checkbox>
          <Checkbox>
            <Text fontSize="lg">Initial commit pushed</Text>
          </Checkbox>
          <Checkbox>
            <Text fontSize="lg">Accessed my-json-server API (see README)</Text>
          </Checkbox>
          <Checkbox>
            <Text fontSize="lg">
              <Code fontSize="md">src/App.js</Code> edited (not before reading
              below, though).
            </Text>
          </Checkbox>
        </VStack>
      </VStack>

      <VStack spacing={12} alignItems="flex-start" justifyContent="flex-start">
        <VStack spacing={4} alignItems="flex-start" justifyContent="flex-start">
          <Heading>The mission:</Heading>
          <Text fontSize="lg">
            We would like you to create your own{' '}
            <strong>life goals tracking app</strong>. You will be able to get
            access to a fake API, located at{' '}
            <Code fontSize="md">
              https://my-json-server.typicode.com/my-username/my-repo/goals
            </Code>
            , where <Code fontSize="md">my-username/my-repo</Code> represents
            the path to you repository on GitHub.
          </Text>
        </VStack>

        <VStack spacing={4} alignItems="flex-start" justifyContent="flex-start">
          <Text fontSize="lg">The app should consist of three pages:</Text>
          <UnorderedList spacing={2} fontSize="lg">
            <ListItem>
              A homepage, <Code fontSize="md">/</Code>, containing the list of
              you life goals.
            </ListItem>
            <ListItem>
              A goal details page, <Code fontSize="md">/:goalId</Code>,
              displaying your life goals in more details. What changes between
              the homepage and the details page is up to you, but we suggest
              thinking about truncating or hiding the goals description on the
              homepage.
            </ListItem>
            <ListItem>
              An admin page, <Code fontSize="md">/admin</Code>, where you will
              be able to create, update and delete you life goals. We would like
              the <Code fontSize="md">title</Code>,{' '}
              <Code fontSize="md">description</Code> and{' '}
              <Code fontSize="md">imageUrl</Code> (consider using Unsplash?) to
              be mandatory. We would like the{' '}
              <Code fontSize="md">completion</Code> field to act as checkbox as
              well as date reference.
            </ListItem>
          </UnorderedList>
        </VStack>
      </VStack>

      <VStack spacing={12} alignItems="flex-start" justifyContent="flex-start">
        <Heading>Tools</Heading>
        <VStack spacing={4} alignItems="flex-start" justifyContent="flex-start">
          <Text fontSize="lg">
            This repo comes with the following libraries installed:
          </Text>
          <UnorderedList spacing={2} fontSize="lg">
            <ListItem>
              <strong>UI library:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://chakra-ui.com/"
              >
                Chakra
              </Link>
            </ListItem>
            <ListItem>
              <strong>Routing:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://reacttraining.com/blog/react-router-v6-pre/"
              >
                react-router-dom v6
              </Link>
            </ListItem>
            <ListItem>
              <strong>Forms:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://formik.org/docs/overview"
              >
                Formik
              </Link>
            </ListItem>
            <ListItem>
              <strong>Form errors handling:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/jquense/yup#api"
              >
                Yup
              </Link>
            </ListItem>
            <ListItem>
              <strong>Icons:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-icons.github.io/react-icons/"
              >
                react-icons
              </Link>
            </ListItem>
            <ListItem>
              <strong>Requests:</strong>{' '}
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-query.tanstack.com/"
              >
                React Query
              </Link>
            </ListItem>
          </UnorderedList>
        </VStack>

        <VStack spacing={2} alignItems="flex-start">
          <Text fontSize="2xl">Good luck!</Text>
          <Link
            href="https://twitter.com/TymateEng"
            rel="nofollow noopener noreferrer"
            target="_blank"
            _hover={{
              color: 'blue.500',
            }}
          >
            <FaTwitter />
          </Link>
        </VStack>
      </VStack>
    </VStack>
  </Layout>
);

export default App;
