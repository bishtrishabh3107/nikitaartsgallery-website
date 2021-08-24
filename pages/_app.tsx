import '../styles/index.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../Global/server/apolloClient';
import Layout from '../components/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ThemeProvider attribute="class">
          <AnimatePresence exitBeforeEnter>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </ThemeProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
